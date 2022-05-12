const { exit } = require("process");
const mongoCollections = require("../config/mongoCollections");
const restaurants = mongoCollections.restaurants;
const ObjectId = require("mongodb").ObjectId;
const uuid = require("uuid");
const bcrypt = require("bcryptjs");
const ErrorCode = require("../helpers/error-code");
const validator = require("../helpers/validator");
const xss = require("xss");
const saltRounds = 12;

//--------------- Function to create a Restaurant------------------------//
const create = async function create(
    username,
    password,
    name,
    image,
    latitude,
    longitude,
    address
) {
    if (arguments.length != 7) {
        throw {
            message: `The Number of Arguments provided are not Proper`,
            status: 400,
        };
    }

    if (
        !username ||
        !password ||
        !name ||
        !image ||
        !latitude ||
        !longitude ||
        !address
    ) {
        throw {
            message: `All the input parameter must be provided in the function`,
            status: 400,
        };
    }

    if (typeof username !== "string")
        throw { message: `Restaurant username must be string`, status: 400 };
    if (typeof password !== "string")
        throw { message: `Restaurant password must be string`, status: 400 };
    if (typeof name !== "string")
        throw { message: "Restaurant name must be string", status: 400 };
    if (typeof latitude !== "string")
        throw { message: "Restaurant Latitude must be string", status: 400 };
    if (typeof longitude !== "string")
        throw { message: "Restaurant Longitude must be string", status: 400 };
    if (typeof address !== "string")
        throw { message: "Restaurant address must be string", status: 400 };

    if (/^ *$/.test(username))
        throw { message: `Restaurant UserName cannot be empty`, status: 400 };
    if (/^ *$/.test(password))
        throw { message: `Restaurant Password cannot be empty`, status: 400 };
    if (/^ *$/.test(name))
        throw { message: `restaurant Name cannot be empty`, status: 400 };
    if (/^ *$/.test(latitude))
        throw { message: `Restaurant Latitude cannot be empty`, status: 400 };
    if (/^ *$/.test(longitude))
        throw { message: `Restaurant Longitude cannot be empty`, status: 400 };
    if (/^ *$/.test(address))
        throw { message: `Restaurant address cannot be empty`, status: 400 };

    if (/[^A-Za-z0-9]/g.test(username)) {
        throw {
            message: `Restaurant Username should only have numbers and alphabets`,
            status: 400,
        };
    }

    name = name.trim();
    latitude = latitude.trim();
    longitude = longitude.trim();
    address = address.trim();

    if (username.length < 4) {
        throw {
            message: `Restaurant Username should have atleast 4 characters`,
            status: 400,
        };
    }

    if (password.length < 8) {
        throw {
            message: `Restaurnat Password should be atleast 8 characters long`,
            status: 400,
        };
    }

    if (/\s/g.test(password))
        throw {
            message: `Restaurnat Password should not contain any white spaces`,
            status: 400,
        };

    const restHashedPwd = await bcrypt.hash(password, saltRounds);

    const restaurantsCollection = await restaurants();

    let newRestaurant = {
        _id: uuid.v4(),
        username: username,
        password: restHashedPwd,
        restaurant_name: name,
        restaurant_image: image,
        distance: 0,
        location: { lat: latitude, lon: longitude },
        address: address,
        food_items: [],
    };

    const insertInfo = await restaurantsCollection.insertOne(newRestaurant);
    if (insertInfo.insertedCount === 0)
        throw { message: "Could not add restaurant", status: 500 };

    const newRestaurantId = insertInfo.insertedId.toString();
    const restaurant = await getRestaurantById(newRestaurantId);

    return JSON.parse(JSON.stringify(restaurant));
};
//----------------End of Create Function-------------------//

//---------------Function to get a restaurant By Id-------------------//

async function getRestaurantById(id) {
    console.log(id);
    if (!id) throw { message: `You must provide a proper id`, status: 400 };
    if (typeof id != "string")
        throw { message: `${id} is not string`, status: 400 };
    if (/^ *$/.test(id))
        throw {
            message: `id with just empty spaces is not valid`,
            status: 400,
        };

    const restCollection = await restaurants();
    let getId = id;

    const restaurant = await restCollection.findOne({ _id: getId });

    if (restaurant === null)
        throw { message: `No restaurant exists with that id`, status: 400 };

    return restaurant;
}

//---------------End of get restaurant By ID------------------------//

//---------------Function to Get All restaurants------------------//
const getAllRestaurants = async function getAllRestaurants() {
    let restCollection = await restaurants();

    let restList = await restCollection.find({}).toArray();

    if (restList.length > 0) {
        return restList;
    } else {
        throw {
            message: `No Restaurant Available in the Database `,
            status: 404,
        };
    }
};

//--------------End of getAll Restaurants Function----------------------------//

//--------------Add the Item to a Restaurant by restaurant ID----------------//
const addItemToRestaurant = async function addItemToRestaurant(
    restaurantId,
    name,
    description,
    price,
    item_image,
    type,
    cuisines,
    stock
) {
    if (arguments.length != 8) {
        throw {
            message: `All the 8 Arguments should be available in order to process request`,
            status: 400,
        };
    }

    if (!restaurantId) {
        throw {
            message: "You must provide restaurant ID to add the item",
            status: 400,
        };
    }

    if (!name) {
        throw { message: "You must provide name of the Item", status: 400 };
    }
    if (!description) {
        throw {
            message: "You must provide decription of the Item",
            status: 400,
        };
    }
    if (!price) {
        throw { message: "You must provide price of the Item", status: 400 };
    }
    if (!item_image) {
        throw { message: "You must provide Image of the Item", status: 400 };
    }

    if (!type) {
        throw { message: "You must provide Type of the Item ", status: 400 };
    }

    if (!stock) {
        throw { message: "You must provide stock of the Item ", status: 400 };
    }

    //------------Starts here--------------------//
    if (
        name == null ||
        description == null ||
        price == null ||
        item_image == null ||
        type == null ||
        stock == null
    ) {
        throw {
            message:
                "All the input parameter must be provided in the function for adding an item",
            status: 400,
        };
    }

    if (restaurantId == null) {
        throw {
            message:
                "You must provide restaurant ID to add the item. It cannot be null",
            status: 400,
        };
    }

    if (
        typeof name !== "string" ||
        typeof description !== "string" ||
        typeof price !== "number" ||
        typeof item_image !== "string" ||
        typeof type !== "string" ||
        typeof stock !== "number" ||
        typeof restaurantId !== "string"
    ) {
        throw {
            message:
                "The name,description,item_image,type,restaurantId must all be of string Type and price and stock should be of Number Type. No Other Datatype is allowed!",
            status: 400,
        };
    }

    if (isNaN(price) || isNaN(stock)) {
        throw {
            message:
                "The price and stock should be of Number Type. No Other Datatype is allowed!",
            status: 400,
        };
    }

    if (/^ *$/.test(name)) {
        throw {
            message: "Item name cannot be empty Spaces",
            status: 400,
        };
    }

    if (/^ *$/.test(description)) {
        throw {
            message: "Item description cannot be empty Spaces",
            status: 400,
        };
    }

    if (/^ *$/.test(price)) {
        throw {
            message: "Item Price cannot be empty Spaces",
            status: 400,
        };
    }

    if (/^ *$/.test(item_image)) {
        throw {
            message: "Item Image cannot be empty Spaces",
            status: 400,
        };
    }

    if (/^ *$/.test(type)) {
        throw {
            message: "Item Type cannot be empty Spaces",
            status: 400,
        };
    }

    if (/^ *$/.test(stock)) {
        throw {
            message: "Item Price cannot be empty Spaces",
            status: 400,
        };
    }

    if (/^ *$/.test(restaurantId)) {
        throw {
            message: "Restaurant ID cannot be empty Spaces",
            status: 400,
        };
    }

    if (
        type.toLowerCase() !== "veg" &&
        type.toLowerCase() !== "non-veg" &&
        type.toLowerCase() !== "vegan"
    ) {
        throw {
            message:
                "The Type option should only have veg,non-veg and vegan. No other types are allowed",
            status: 400,
        };
    }

    name = name.trim();
    description = description.trim();
    type = type.trim();
    cuisines = cuisines.trim();

    const newItem = {
        item_id: uuid.v4(),
        name: name,
        description: description,
        price: price,
        item_image: item_image,
        type: type,
        cuisines: cuisines,
        stock: stock,
    };

    const restaurantsCollection = await restaurants();

    restaurantsCollection.updateOne(
        { _id: restaurantId },
        {
            $push: {
                food_items: newItem,
            },
        }
    );
};

async function checkRestaurant(_restaurantUsername, _restaurantPassword) {
    try {
        validator.isCheckRestaurantTotalFieldsValid(arguments.length);

        const restaurantUsername = validator.isRestaurantUsernameValid(
            xss(_restaurantUsername)
        );
        const restaurantPassword = validator.isRestaurantPasswordValid(
            xss(_restaurantPassword)
        );

        const restaurantCollection = await restaurants();

        const restaurant = await restaurantCollection.findOne(
            { username: restaurantUsername },
            {
                projection: {
                    _id: 1,
                    username: 1,
                    password: 1,
                    restaurant_name: 1,
                    password: 1,
                },
            }
        );

        if (!restaurant) {
            throwError(
                ErrorCode.BAD_REQUEST,
                "Error: Incorrect username or password."
            );
        }

        const isPasswordCorrect = await bcrypt.compare(
            restaurantPassword,
            restaurant.password
        );

        if (!isPasswordCorrect) {
            throwError(
                ErrorCode.BAD_REQUEST,
                "Error: Incorrect username or password."
            );
        }

        delete restaurant.password;

        return restaurant;
    } catch (error) {
        throwCatchError(error);
    }
}

const throwError = (code = 500, message = "Error: Internal Server Error") => {
    throw { code, message };
};

const throwCatchError = (error) => {
    console.log(error);
    if (error.code && error.message) {
        throwError(error.code, error.message);
    }

    throwError(
        ErrorCode.INTERNAL_SERVER_ERROR,
        "Error: Internal server error."
    );
};

module.exports = {
    create,
    getRestaurantById,
    getAllRestaurants,
    addItemToRestaurant,
    checkRestaurant,
};
