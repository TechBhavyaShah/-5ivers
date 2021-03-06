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

    delete restaurant.password;
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
    _restaurantId,
    _name,
    _description,
    _price,
    _imageUrl,
    _type,
    _cuisines,
    _stock
) {
    try {
        validator.isAddFoodItemFieldsValid(arguments.length);

        const restaurantId = validator.isRestaurantIdValid(xss(_restaurantId));
        const name = validator.isFoodItemNameValid(xss(_name));
        const description = validator.isFoodItemDescriptionValid(
            xss(_description)
        );
        const price = validator.isFoodItemPriceValid(
            _price === 0 ? _price.toString() : xss(_price)
        );
        const imageUrl = validator.isFoodItemImageUrlValid(xss(_imageUrl));
        const type = validator.isFoodItemTypeValid(xss(_type));
        const cuisines = validator.isFoodItemCuisinesValid(xss(_cuisines));
        const stock = validator.isFoodItemStockValid(
            _stock === 0 ? _stock.toString() : xss(_stock)
        );

        const restaurantsCollection = await restaurants();

        const restaurant = await restaurantsCollection.findOne({
            _id: restaurantId,
        });

        if (!restaurant) {
            throwError(ErrorCode.NOT_FOUND, "Error: Restaurant not found.");
        }

        const newItem = {
            item_id: uuid.v4(),
            name: name,
            description: description,
            price: price,
            item_image: imageUrl,
            type: type,
            cuisines: cuisines,
            stock: stock,
        };

        await restaurantsCollection.updateOne(
            { _id: restaurantId },
            {
                $push: {
                    food_items: newItem,
                },
            }
        );
    } catch (error) {
        throwCatchError(error);
    }
};

async function updateFoodItemStock(_restaurantId, _itemId, _stock) {
    try {
        validator.isUpdateFoodItemStockValid(arguments.length);

        const foodItemId = validator.isFoodItemIdValid(xss(_itemId));

        const stock = validator.isFoodItemStockValid(
            _stock === 0 ? _stock.toString() : xss(_stock)
        );

        const restaurantId = validator.isRestaurantIdValid(xss(_restaurantId));

        const restaurantsCollection = await restaurants();

        const foodItem = await restaurantsCollection.findOne(
            { "food_items.item_id": foodItemId },
            {
                projection: {
                    _id: 1,
                    "food_items.$": 1,
                },
            }
        );

        if (!foodItem) {
            throwError(ErrorCode.NOT_FOUND, "Error: Food item not found.");
        }

        if (restaurantId !== foodItem._id) {
            throwError(ErrorCode.UNAUTHORIZED, "Error: Unauthorized access.");
        }

        restaurantsCollection.updateOne(
            { _id: restaurantId, "food_items.item_id": foodItemId },
            { $set: { "food_items.$.stock": stock } }
        );
    } catch (error) {
        throwCatchError(error);
    }
}

async function getFoodItemsByRestaurantId(_restaurantId) {
    try {
        const restaurantId = validator.isRestaurantIdValid(xss(_restaurantId));

        const restaurantCollection = await restaurants();

        const foodItems = await restaurantCollection.findOne(
            { _id: restaurantId },
            {
                projection: {
                    _id: 0,
                    food_items: 1,
                },
            }
        );

        if (
            !foodItems ||
            !foodItems.food_items ||
            foodItems.food_items.length < 1
        ) {
            throwError(ErrorCode.NOT_FOUND, "Error: Food items not found.");
        }

        return foodItems;
    } catch (error) {
        throwCatchError(error);
    }
}

async function getFoodItemByFoodItemId(_foodItemId) {
    try {
        const foodItemId = validator.isFoodItemIdValid(xss(_foodItemId));

        const restaurantCollection = await restaurants();

        const foodItem = await restaurantCollection.findOne(
            { "food_items.item_id": foodItemId },
            {
                projection: {
                    _id: 1,
                    "food_items.$": 1,
                },
            }
        );

        if (!foodItem) {
            throwError(ErrorCode.NOT_FOUND, "Error: Food item not found.");
        }

        [foodItem.foodItem] = foodItem.food_items;

        delete foodItem.food_items;

        return foodItem;
    } catch (error) {
        throwCatchError(error);
    }
}

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
                    restaurant_image: 1,
                    address: 1,
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
    updateFoodItemStock,
    checkRestaurant,
    getFoodItemsByRestaurantId,
    getFoodItemByFoodItemId,
};
