const express = require("express");
const router = express.Router();
const data = require("../data");
const xss = require("xss");
const jwt = require("jsonwebtoken");
const restaurantdata = data.restaurants;
const validator = require("../helpers/validator");

const ErrorCode = {
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
};

//---------This is Get by Restaurant ID method to get a restaurant with Id---------------//
router.get("/:restaurantId", async (req, res) => {
    const id = req.params.restaurantId;

    if (id == null || id == undefined) {
        res.status(400).json({
            error: `There is no Input in restaurant id Parameter. It cannot be null`,
        });
        return;
    }

    if (typeof id !== "string") {
        res.status(400).json({
            error: `The restaurant ID Parameter should be string`,
        });
        return;
    }

    if (/^ *$/.test(id)) {
        res.status(400).json({
            error: `Restaurant id field cannot be just empty spaces`,
        });
        return;
    }

    if (!id) {
        res.status(400).json({ error: "Id parameter must be supplied" });
        return;
    }

    try {
        const restaurantById = await restaurantdata.getRestaurantById(
            req.params.restaurantId
        );
        res.json(restaurantById);
        return;
    } catch (e) {
        //console.log(e)
        res.status(e.status || 500).json({
            message: e.message || "Internal Server Error",
        });
        return;
    }
});
//------------End of Restaurant GetByID method-------------//

//-----------This is Get method to get all the restaurants----------/
router.get("/", async (req, res) => {
    try {
        const allRestaurants = await restaurantdata.getAllRestaurants();
        res.json(allRestaurants);
        return;
    } catch (e) {
        res.status(e.status || 500).json({
            message: e.message || "Internal Server Error",
        });
        return;
    }
});
//--------End of Get Method to get all the restaurants-----------//

//-----This is Post method to create an Item for a restaurant----------//
router.post("/foodItem/:restaurantId", async (req, res) => {
    const restaurantId = req.params.restaurantId;
    const restaurantItemData = req.body;

    if (Object.keys(restaurantItemData).length != 7) {
        res.status(400).json({
            error: "The Number of Parameters is not sufficient while adding the Food Item",
        });
        return;
    }

    if (!restaurantId) {
        res.status(400).json({
            error: "You must provide restaurant ID to add the item",
        });
        return;
    }

    if (!restaurantItemData.name) {
        res.status(400).json({ error: "You must provide name of the Item" });
        return;
    }
    if (!restaurantItemData.description) {
        res.status(400).json({
            error: "You must provide description of the item",
        });
        return;
    }
    if (!restaurantItemData.price) {
        res.status(400).json({ error: "You must provide price of the item" });
        return;
    }
    if (!restaurantItemData.item_image) {
        res.status(400).json({
            error: "You must provide image of the item added",
        });
        return;
    }

    if (!restaurantItemData.type) {
        res.status(400).json({
            error: "You must provide type of the Item added to the restaurant",
        });
        return;
    }

    if (!restaurantItemData.stock) {
        res.status(400).json({
            error: "You must provide stock of the Item available",
        });
        return;
    }

    //------------Starts here--------------------//
    if (
        restaurantItemData.name == null ||
        restaurantItemData.description == null ||
        restaurantItemData.price == null ||
        restaurantItemData.item_image == null ||
        restaurantItemData.type == null ||
        restaurantItemData.stock == null
    ) {
        res.status(400).json({
            error: "All the input parameter must be provided in the function for adding an item",
        });
        return;
    }

    if (restaurantId == null) {
        res.status(400).json({
            error: "You must provide restaurant ID to add the item. It cannot be null",
        });
        return;
    }

    if (
        typeof restaurantItemData.name !== "string" ||
        typeof restaurantItemData.description !== "string" ||
        typeof restaurantItemData.price !== "number" ||
        typeof restaurantItemData.item_image !== "string" ||
        typeof restaurantItemData.type !== "string" ||
        typeof restaurantItemData.stock !== "number" ||
        typeof restaurantId !== "string"
    ) {
        res.status(400).json({
            error: "The name,description,item_image,type,restaurantId must all be of string Type and price and stock should be of Number Type. No Other Datatype is allowed!",
        });
        return;
    }

    if (isNaN(restaurantItemData.price) || isNaN(restaurantItemData.stock)) {
        res.status(400).json({
            error: "The price and stock should be of Number Type. No Other Datatype is allowed!",
        });
        return;
    }

    if (/^ *$/.test(restaurantItemData.name)) {
        res.status(400).json({
            error: "Item name cannot be empty Spaces",
        });
        return;
    }

    if (/^ *$/.test(restaurantItemData.description)) {
        res.status(400).json({
            error: "Item description cannot be empty Spaces",
        });
        return;
    }

    if (/^ *$/.test(restaurantItemData.price)) {
        res.status(400).json({
            error: "Item Price cannot be empty Spaces",
        });
        return;
    }

    if (/^ *$/.test(restaurantItemData.item_image)) {
        res.status(400).json({
            error: "Item Image cannot be empty Spaces",
        });
        return;
    }

    if (/^ *$/.test(restaurantItemData.type)) {
        res.status(400).json({
            error: "Item Type cannot be empty Spaces",
        });
        return;
    }

    if (/^ *$/.test(restaurantItemData.stock)) {
        res.status(400).json({
            error: "Item Price cannot be empty Spaces",
        });
        return;
    }

    if (/^ *$/.test(restaurantId)) {
        res.status(400).json({
            error: "Restaurant ID cannot be empty Spaces",
        });
        return;
    }

    let name = restaurantItemData.name;
    let description = restaurantItemData.description;
    let price = restaurantItemData.price;
    let item_image = restaurantItemData.item_image;
    let type = restaurantItemData.type;
    let cuisines = restaurantItemData.cuisines;
    let stock = restaurantItemData.stock;

    if (
        type.toLowerCase() !== "veg" &&
        type.toLowerCase() !== "non-veg" &&
        type.toLowerCase() !== "vegan"
    ) {
        res.status(400).json({
            error: "The Type option should only have veg,non-veg and vegan. No other types are allowed",
        });
        return;
    }

    name = name.trim();
    description = description.trim();
    type = type.trim();
    cuisines = cuisines.trim();

    //------------Ends Here------------------------//

    try {
        const newItemAdded = await restaurantdata.addItemToRestaurant(
            restaurantId,
            name,
            description,
            price,
            item_image,
            type,
            cuisines,
            stock
        );
        res.json(newItemAdded);
        return;
    } catch (e) {
        res.status(e.status || 500).json({
            message: e.message || "Internal Server Error",
        });
        return;
    }
});

//------------End of Post Method to create an Item for a restaurant-------------//

router.post("/signin", async (request, response) => {
    try {
        const requestPostData = request.body;

        validator.isPostSignInTotalFieldsValid(
            Object.keys(requestPostData).length
        );

        const restaurantUsername = validator.isRestaurantUsernameValid(
            xss(requestPostData.restaurantUsername)
        );
        const restaurantPassword = validator.isRestaurantPasswordValid(
            xss(requestPostData.restaurantPassword)
        );

        const restaurant = await restaurantdata.checkRestaurant(
            restaurantUsername,
            restaurantPassword
        );

        if (!restaurant) {
            throwError(
                ErrorCode.INTERNAL_SERVER_ERROR,
                "Internal Server Error"
            );
        }

        const jsonWebToken = jwt.sign(
            { restaurantId: restaurant._id },
            process.env.JSON_WEB_TOKEN
        );

        response.json({ token: jsonWebToken });
    } catch (error) {
        console.log(error);
        response.status(error.code || 500).json({
            isError: true,
            error: error.message || "Error: Internal server error.",
        });
    }
});

const throwError = (code = 500, message = "Internal Server Error") => {
    throw { code, message };
};

module.exports = router;
