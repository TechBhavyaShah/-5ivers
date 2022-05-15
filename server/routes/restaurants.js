const express = require("express");
const router = express.Router();
const data = require("../data");
const xss = require("xss");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const restaurantdata = data.restaurants;
const validator = require("../helpers/validator");
const ErrorCode = require("../helpers/error-code");
const path = require("path");
const im = require("imagemagick");
const AWS = require("aws-sdk");
var fs = require("fs");
require("dotenv").config();

const s3AwsUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/`;

if (process.platform == "win32") {
  im.convert.path = "C:/Program Files/ImageMagick-7.1.0-Q16-HDRI/convert";
  im.identify.path = "C:/Program Files/ImageMagick-7.1.0-Q16-HDRI/identify";
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

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

  if (/^ *$/.test(restaurantId)) {
    res.status(400).json({
      error: "restaurantId cannot be empty Spaces",
    });
    return;
  }

  if (Object.keys(restaurantItemData).length != 7) {
    res.status(400).json({
      error:
        "The Number of Parameters is not sufficient while adding the Food Item",
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
  // if (!restaurantItemData.description) {
  //   res.status(400).json({ error: 'You must provide description of the item' })
  //   return
  // }
  if (
    restaurantItemData.price == null ||
    restaurantItemData.price == undefined
  ) {
    res.status(400).json({ error: "You must provide price of the item" });
    return;
  }
  // if (!restaurantItemData.item_image) {
  //   res.status(400).json({ error: 'You must provide image of the item added' })
  //   return
  // }

  if (!restaurantItemData.type) {
    res.status(400).json({
      error: "You must provide type of the Item added to the restaurant",
    });
    return;
  }

  if (
    restaurantItemData.stock == null ||
    restaurantItemData.stock == undefined
  ) {
    res.status(400).json({
      error: "You must provide stock of the Item available",
    });
    return;
  }

  //------------Starts here--------------------//
  if (
    restaurantItemData.name == null ||
    // restaurantItemData.description == null ||
    restaurantItemData.price == null ||
    // restaurantItemData.item_image == null ||
    restaurantItemData.type == null ||
    restaurantItemData.stock == null
  ) {
    res.status(400).json({
      error:
        "All the input parameter must be provided in the function for adding an item",
    });
    return;
  }

  if (restaurantId == null) {
    res.status(400).json({
      error:
        "You must provide restaurant ID to add the item. It cannot be null",
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
      error:
        "The name,description,item_image,type,restaurantId must all be of string Type and price and stock should be of Number Type. No Other Datatype is allowed!",
    });
    return;
  }

  if (isNaN(restaurantItemData.price) || isNaN(restaurantItemData.stock)) {
    res.status(400).json({
      error:
        "The price and stock should be of Number Type. No Other Datatype is allowed!",
    });
    return;
  }

  if (/^ *$/.test(restaurantItemData.name)) {
    res.status(400).json({
      error: "Item name cannot be empty Spaces",
    });
    return;
  }

  // if (/^ *$/.test(restaurantItemData.description)) {
  //   res.status(400).json({
  //     error: 'Item description cannot be empty Spaces',
  //   })
  //   return
  // }

  if (/^ *$/.test(restaurantItemData.price)) {
    res.status(400).json({
      error: "Item Price cannot be empty Spaces",
    });
    return;
  }

  // if (/^ *$/.test(restaurantItemData.item_image)) {
  //   res.status(400).json({
  //     error: 'Item Image cannot be empty Spaces',
  //   })
  //   return
  // }

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

  if (restaurantItemData.stock < 0) {
    res.status(400).json({
      error: "Item stock cannot be less than zero",
    });
    return;
  }

  if (restaurantItemData.price < 0) {
    res.status(400).json({
      error: "Item price cannot be less than zero",
    });
    return;
  }

  if (!Number.isInteger(restaurantItemData.stock)) {
    res.status(400).json({
      error: "The stock Should be Integer Value!.",
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
      error:
        "The Type option should only have veg,non-veg and vegan. No other types are allowed",
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

    validator.isPostSignInTotalFieldsValid(Object.keys(requestPostData).length);

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
      throwError(ErrorCode.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }

    const jsonWebToken = jwt.sign(
      {
        restaurant: {
          id: restaurant._id,
          name: restaurant.restaurant_name,
          image: restaurant.restaurant_image,
          address: restaurant.address,
        },
      },
      process.env.JSON_WEB_TOKEN_KEY
    );

    response.json({
      token: jsonWebToken,
    });
  } catch (error) {
    response.status(error.code || 500).json({
      error: error.message || "Error: Internal server error.",
    });
  }
});

router.get(
  "/foodItems/singleFoodItem/:foodItemId",
  async (request, response) => {
    try {
      const decodedAccessToken = validator.isAccessTokenValid(
        request.header("accessToken")
      );

      if (!decodedAccessToken.restaurant?.id) {
        throwError(ErrorCode.UNAUTHORIZED, "Error: You are not logged in.");
      }

      const foodItemId = validator.isRestaurantIdValid(
        xss(request.params.foodItemId)
      );

      const foodItem = await restaurantdata.getFoodItemByFoodItemId(foodItemId);

      if (decodedAccessToken.restaurant.id !== foodItem._id) {
        throwError(ErrorCode.UNAUTHORIZED, "Error: You are not logged in.");
      }

      response.json(foodItem);
    } catch (error) {
      response.status(error.code || 500).json({
        error: error.message || "Error: Internal server error.",
      });
    }
  }
);

router.get("/foodItems/:id", async (request, response) => {
  try {
    const decodedAccessToken = validator.isAccessTokenValid(
      request.header("accessToken")
    );

    if (
      !decodedAccessToken.restaurant?.id ||
      request.params.id.trim() !== decodedAccessToken.restaurant?.id
    ) {
      throwError(ErrorCode.UNAUTHORIZED, "Error: You are not logged in.");
    }

    const restaurantId = validator.isRestaurantIdValid(
      xss(decodedAccessToken.restaurant?.id)
    );

    const foodItems = await restaurantdata.getFoodItemsByRestaurantId(
      restaurantId
    );

    response.json({ foodItems: foodItems.food_items });
  } catch (error) {
    response.status(error.code || 500).json({
      error: error.message || "Error: Internal server error.",
    });
  }
});

router.post(
  "/foodItems/:id",
  upload.single("image"),
  async (request, response) => {
    try {
      const decodedAccessToken = validator.isAccessTokenValid(
        request.header("accessToken")
      );

      if (!decodedAccessToken.restaurant?.id) {
        throwError(ErrorCode.UNAUTHORIZED, "Error: You are not logged in.");
      }

      const requestPostData = request.body;

      await _uploadFoodItemImage(request.file);

      await restaurantdata.addItemToRestaurant(
        decodedAccessToken.restaurant.id,
        requestPostData.name,
        requestPostData.description,
        parseInt(requestPostData.price),
        `${s3AwsUrl}${request.file.filename}`,
        requestPostData.type,
        requestPostData.cuisines,
        parseInt(requestPostData.stock)
      );

      response.json({ success: true });
    } catch (error) {
      response.status(error.code || error.status || 500).json({
        error: error.message || "Error: Internal server error.",
      });
    }
  }
);

async function _uploadFoodItemImage(file) {
  try {
    const imageSourcePath = path.join(__dirname, "..", "/", file.path);
    const imageDestinationPath = path.join(
      __dirname,
      "..",
      "/public/",
      file.filename
    );

    im.resize(
      {
        srcPath: imageSourcePath,
        dstPath: imageDestinationPath,
        height: 175,
      },
      async function (error, stdout) {
        if (error) {
          throwError(ErrorCode.INTERNAL_SERVER_ERROR, error);
        }

        const params = {
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: file.filename,
          Body: fs.createReadStream(imageDestinationPath),
          ContentType: file.mimetype,
        };

        const s3 = new AWS.S3({
          accessKeyId: process.env.AWS_ACCESS_KEY,
          secretAccessKey: process.env.AWS_SECRET_KEY,
          signatureVersion: "v4",
          region: process.env.AWS_BUCKET_REGION,
        });

        const awsImage = await s3
          .upload(params, function (error) {
            if (error) {
              throwError(ErrorCode.INTERNAL_SERVER_ERROR, error);
            }
          })
          .promise();

        fs.unlink(imageSourcePath, (error) => {
          if (error) {
            throwError(ErrorCode.INTERNAL_SERVER_ERROR, error);
          }
        });

        fs.unlink(imageDestinationPath, (error) => {
          if (error) {
            throwError(ErrorCode.INTERNAL_SERVER_ERROR, error);
          }
        });
      }
    );
  } catch (error) {
    throwCatchError(error);
  }
}

router.put(
  "/foodItems/singleFoodItem/:foodItemId",
  async (request, response) => {
    try {
      const requestPostData = request.body;

      const decodedAccessToken = validator.isAccessTokenValid(
        request.header("accessToken")
      );

      if (!decodedAccessToken.restaurant?.id) {
        throwError(ErrorCode.UNAUTHORIZED, "Error: You are not logged in.");
      }

      await restaurantdata.updateFoodItemStock(
        decodedAccessToken.restaurant.id,
        request.params.foodItemId,
        parseInt(requestPostData.stock)
      );

      response.json({ success: true });
    } catch (error) {
      response.status(error.code || 500).json({
        error: error.message || "Error: Internal server error.",
      });
    }
  }
);

const throwCatchError = (error) => {
  console.log(error);
  if (error.code && error.message) {
    throwError(error.code, error.message);
  }

  throwError(ErrorCode.INTERNAL_SERVER_ERROR, "Error: Internal server error.");
};

const throwError = (code = 500, message = "Internal Server Error") => {
  throw { code, message };
};
//--------------Router to update the stock of the Item in restaurant-------------------//
router.put("/foodItem/:restaurantId/:foodItemId", async (req, res) => {
  const ItemStock = req.body;

  if (Object.keys(ItemStock).length != 1) {
    res.status(400).json({
      error: "Proper Number of Parameters is Required",
    });
    return;
  }

  let restaurantId = req.params.restaurantId;
  let itemId = req.params.foodItemId;
  if (!restaurantId) {
    res.status(400).json({ error: "You must provide the restaurant Id" });
    return;
  }
  if (!itemId) {
    res.status(400).json({ error: "You must provide the Food Item ID" });
    return;
  }
  if (!itemId) {
    res.status(400).json({
      error: "You must the updated stock of the Food Item",
    });
    return;
  }

  if (restaurantId == null || restaurantId == undefined) {
    res.status(400).json({
      error: `There is no Input in restaurantId Parameter. It cannot be null or undefined`,
    });
    return;
  }

  if (itemId == null || itemId == undefined) {
    res.status(400).json({
      error: `There is no Input in itemId Parameter. It cannot be null or undefined`,
    });
    return;
  }

  if (/^ *$/.test(restaurantId)) {
    res.status(400).json({
      error: "restaurant Id cannot be empty Spaces",
    });
    return;
  }

  if (/^ *$/.test(itemId)) {
    res.status(400).json({
      error: "Item Id cannot be empty Spaces",
    });
    return;
  }

  //------------Starts here--------------------//
  let stock = ItemStock.stock;

  if (stock == null || undefined) {
    res.status(400).json({
      error: "All the stock must be provided in the Body",
    });
    return;
  }

  if (/^ *$/.test(stock)) {
    res.status(400).json({
      error: "Stock cannot be empty Spaces",
    });
    return;
  }

  if (typeof stock !== "number") {
    res.status(400).json({
      error: "stock should be of number type. No Other Datatype is allowed!",
    });
    return;
  }

  if (isNaN(stock)) {
    res.status(400).json({
      error:
        "The stock should be of Number Type. No Other Datatype is allowed!",
    });
    return;
  }

  if (stock < 0) {
    res.status(400).json({
      error: "The stock cannot be negative",
    });
    return;
  }

  if (!Number.isInteger(stock)) {
    res.status(400).json({
      error: "The stock Should be Integer Value!.",
    });
    return;
  }

  //------------Ends Here------------------------//
  try {
    const newRest = await restaurantdata.updateFoodItemStock(
      restaurantId,
      itemId,
      stock
    );
    res.json(newRest);
  } catch (e) {
    res.status(e.err || 500).json({
      message: e.msg || "Internal Server Error",
    });
  }
});

module.exports = router;
