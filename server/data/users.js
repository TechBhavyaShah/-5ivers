const ObjectID = require("mongodb").ObjectId;
const mongoCollections = require("../config/mongoCollections");
const users = mongoCollections.users;
const restaurants = mongoCollections.restaurants;
const ErrorCode = require("../helpers/error-code");
const validator = require("../helpers/validator");
const uuid = require("uuid");
const xss = require("xss");
const moment = require("moment");

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

async function createUser(
  id,
  name,
  emailAddress,
  biography,
  address,
  image_url
) {
  if (!id || !name || !emailAddress || !biography || !address || !image_url) {
    throw { message: `All fields must be supplied`, status: 400 };
  }

  if (typeof name !== "string")
    throw { message: `Name must be string`, status: 400 };
  // if(typeof name.lastName !== "string" ) throw {message:`lastName must be string`,status:400}
  if (typeof emailAddress !== "string")
    throw { message: "emailAddress must be string", status: 400 };
  if (typeof image_url !== "string")
    throw { message: "image_url must be string", status: 400 };
  if (typeof address !== "string")
    throw { message: "address must be string", status: 400 };
  if (typeof biography !== "string")
    throw { message: "Biography must be string", status: 400 };
  //   if (!Array.isArray(pastOrders))
  //     throw { message: "pastOrders must be an array", status: 400 };

  if (/^ *$/.test(id)) throw { message: `id cannot be empty`, status: 400 };

  if (/^ *$/.test(name)) throw { message: `name cannot be empty`, status: 400 };
  if (/^ *$/.test(emailAddress))
    throw { message: `emailAddress cannot be empty`, status: 400 };
  if (/^ *$/.test(image_url))
    throw { message: `image_url cannot be empty`, status: 400 };
  if (/^ *$/.test(biography))
    throw { message: `Biography cannot be empty`, status: 400 };
  if (/^ *$/.test(address))
    throw { message: `address cannot be empty`, status: 400 };

  if (!validateEmail(emailAddress))
    throw { message: `Please Enter valid Email Address`, status: 400 };

  //   if (/\s/g.test(password))
  //     throw { message: `password cannot have spaces`, status: 400 };
  //   if (password.length < 8) {
  //     throw {
  //       message: `Password should be atleast 8 characters long`,
  //       status: 400,
  //     };
  //   }

  //   const hashedPwd = await bcrypt.hash(password, saltRounds);

  const userCollection = await users();

  const lowerUser = emailAddress.toLowerCase();
  const userexists = await userCollection.findOne({
    emailAddress: lowerUser,
  });

  if (userexists)
    throw {
      message: `User with that email address already exists`,
      status: 400,
    };

  let newUser = {
    id: id,
    name: name,
    emailAddress: emailAddress.toLowerCase(),
    // password: hashedPwd,
    biography: biography,
    address: address,
    image_url: image_url,
    pastOrders: [],
  };

  const insertInfo = await userCollection.insertOne(newUser);
  if (insertInfo.insertCount == 0)
    throw { message: `Could not add user`, status: 400 };

  const newId = insertInfo.insertedId.toString();
  //   console.log(newId)
  const user = await getById(id);

  return JSON.parse(JSON.stringify(user));
}

async function getById(id) {
  if (!id) throw { message: `You must provide a proper id`, status: 400 };
  if (typeof id != "string")
    throw { message: `${id} is not string`, status: 400 };
  if (/^ *$/.test(id))
    throw {
      message: `id with just empty spaces is not valid`,
      status: 400,
    };

  const userCollection = await users();
  let getId;

  //   try {
  //     getId = ObjectID(id);
  //   } catch (e) {
  //     throw { message: `Id is invalid because of ${e}`, status: 400 };
  //   }

  const user = await userCollection.findOne({ id: id });
  //   console.log(user)

  if (user === null)
    throw { message: `No user exists with that id`, status: 400 };

  return JSON.parse(JSON.stringify(user));
}

async function getByEmail(emailAddress) {
  if (!emailAddress)
    throw {
      message: `You must provide a proper emailAddress`,
      status: 400,
    };
  if (typeof emailAddress != "string")
    throw { message: `${emailAddress} is not string`, status: 400 };
  if (/^ *$/.test(emailAddress))
    throw {
      message: `emailAddress with just empty spaces is not valid`,
      status: 400,
    };

  if (!validateEmail(emailAddress))
    throw { message: `Please Enter valid Email Address`, status: 400 };

  const userCollection = await users();

  const user = await userCollection.findOne({
    emailAddress: emailAddress.toLowerCase(),
  });

  if (user === null)
    throw {
      message: `No user exists with that Email Address`,
      status: 400,
    };

  return JSON.parse(JSON.stringify(user));
}

async function getPastOrders(id) {
  if (!id) throw { message: `You must provide a proper id`, status: 400 };
  if (typeof id != "string")
    throw { message: `${id} is not string`, status: 400 };
  if (/^ *$/.test(id))
    throw {
      message: `id with just empty spaces is not valid`,
      status: 400,
    };

  const userCollection = await users();
  //   let getId;
  const user = await userCollection.findOne({ _id: id });

  if (user === null)
    throw { message: `No user exists with that id`, status: 400 };

  let userDetails = JSON.parse(JSON.stringify(user));

  return userDetails.pastOrders;
}

async function createOrder(userId, cart) {
  try {
    const userCollection = await users();
    const restaurantCollection = await restaurants();

    const orderId = uuid.v4();

    for (const currentFoodItem of cart) {
      const foodItem = await restaurantCollection.findOne(
        { "food_items.item_id": currentFoodItem.id },
        {
          projection: {
            _id: 1,
            "food_items.$": 1,
          },
        }
      );

      [foodItem.food_items] = foodItem.food_items;

      restaurantCollection.updateOne(
        {
          _id: foodItem._id,
          "food_items.item_id": foodItem.food_items.item_id,
        },
        {
          $set: {
            "food_items.$.stock":
              foodItem.food_items.stock - currentFoodItem.quantity,
          },
        }
      );

      const updateData = {
        orderId: orderId,
        itemId: currentFoodItem.id,
        name: currentFoodItem.name,
        price: currentFoodItem.price,
        totalPrice:
          Math.round(
            (currentFoodItem.price * currentFoodItem.quantity +
              Number.EPSILON) *
              100
          ) / 100,
        image: currentFoodItem.image,
        type: currentFoodItem.type,
        description: currentFoodItem.description,
        cuisines: currentFoodItem.cuisines,
        quantity: currentFoodItem.quantity,
        restaurant: currentFoodItem.restaurant,
        orderDate: moment().format("MM/DD/YYYY"),
      };

      await userCollection.updateOne(
        { id: userId },
        {
          $push: {
            pastOrders: updateData,
          },
        }
      );
    }
  } catch (error) {
    throwCatchError(error);
  }
}

const throwError = (code = 500, message = "Error: Internal Server Error") => {
  throw { code, message };
};

const throwCatchError = (error) => {
  console.log(error);
  if ((error.code || error.status) && error.message) {
    throwError(error.code || error.status, error.message);
  }

  throwError(ErrorCode.INTERNAL_SERVER_ERROR, "Error: Internal server error.");
};

module.exports = {
  createUser,
  getById,
  getByEmail,
  getPastOrders,
  createOrder,
};
