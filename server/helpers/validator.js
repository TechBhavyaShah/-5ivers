const common = require("./common");

function isRestaurantPasswordValid(password) {
    common.isArgumentString(password, "restaurant password");
    common.isStringEmpty(password, "restaurant password");
    common.isNonSpaceString(password, "restaurant Password");

    const MINIMUM_PASSWORD_LENGTH = 8;

    common.isStringLengthValid(
        password,
        MINIMUM_PASSWORD_LENGTH,
        "Restaurant password"
    );

    return password;
}

function isRestaurantUsernameValid(username) {
    common.isArgumentString(username, "restaurant username");
    common.isStringEmpty(username, "restaurant username");
    common.isStringAlphaNumeric(username, "restaurant username");

    return username;
}

function isFoodItemNameValid(name) {
    common.isArgumentString(name, "food item name");
    common.isStringEmpty(name, "food item name");

    return name.trim();
}

function isFoodItemTypeValid(_type) {
    common.isArgumentString(_type, "food item type");
    common.isStringEmpty(_type, "food item type");

    const type = _type.trim().toLowerCase();

    const allowedOptions = ["veg", "non-veg", "vegan"];

    common.isOptionValid(allowedOptions, type, "food item type");

    return type;
}

function isFoodItemDescriptionValid(description) {
    common.isArgumentString(description, "food item description");
    common.isStringEmpty(description, "food item description");

    return description.trim();
}

function isFoodItemRestaurantValid(restaurant) {
    common.isArgumentString(restaurant, "food item restaurant");
    common.isStringEmpty(restaurant, "food item restaurant");
}

function isFoodItemCuisinesValid(cuisines) {
    common.isArgumentString(cuisines, "food item cuisines");
    common.isStringEmpty(cuisines, "food item cuisines");

    return cuisines.trim();
}

function isPostSignInTotalFieldsValid(totalFields) {
    const TOTAL_MANDATORY_FIELDS = 2;

    common.isTotalFieldsValid(totalFields, TOTAL_MANDATORY_FIELDS);
}

function isPutFoodItemStockValid(totalFields) {
    const TOTAL_MANDATORY_FIELDS = 1;

    common.isTotalFieldsValid(totalFields, TOTAL_MANDATORY_FIELDS);
}

function isCreateOrderTotalFieldsValid(totalFields) {
    const TOTAL_MANDATORY_FIELDS = 2;

    common.isTotalFieldsValid(totalFields, TOTAL_MANDATORY_FIELDS);
}

function isPutCreateOrderTotalFieldsValid(totalFields) {
    const TOTAL_MANDATORY_FIELDS = 1;

    common.isTotalFieldsValid(totalFields, TOTAL_MANDATORY_FIELDS);
}

function isUpdateFoodItemStockValid(totalFields) {
    const TOTAL_MANDATORY_FIELDS = 3;

    common.isTotalFieldsValid(totalFields, TOTAL_MANDATORY_FIELDS);
}

function isCheckRestaurantTotalFieldsValid(totalFields) {
    const TOTAL_MANDATORY_FIELDS = 2;

    common.isTotalFieldsValid(totalFields, TOTAL_MANDATORY_FIELDS);
}

function isPostFoodItemFieldsValid(totalFields) {
    const TOTAL_MANDATORY_FIELDS = 6;

    common.isTotalFieldsValid(totalFields, TOTAL_MANDATORY_FIELDS);
}

function isAddFoodItemFieldsValid(totalFields) {
    const TOTAL_MANDATORY_FIELDS = 8;

    common.isTotalFieldsValid(totalFields, TOTAL_MANDATORY_FIELDS);
}

function isRestaurantIdValid(_restaurantId) {
    common.isArgumentString(_restaurantId, "restaurant id");
    common.isStringEmpty(_restaurantId, "restaurant id");

    const restaurantId = _restaurantId.trim();

    common.isUuid(restaurantId);

    return restaurantId;
}

function isFoodItemIdValid(_foodItemId) {
    common.isArgumentString(_foodItemId, "food item id");
    common.isStringEmpty(_foodItemId, "food item id");

    const foodItemId = _foodItemId.trim();

    common.isUuid(foodItemId);

    return foodItemId;
}

function isRestaurantIdValid(_foodItemId) {
    common.isArgumentString(_foodItemId, "food item id");
    common.isStringEmpty(_foodItemId, "food item id");

    const foodItemId = _foodItemId.trim();

    common.isUuid(foodItemId);

    return foodItemId;
}

function isAccessTokenValid(accessToken) {
    common.isString(accessToken);
    common.isStringEmpty(accessToken);
    return common.isJsonWebToken(accessToken);
}

function isFoodItemStockValid(stock) {
    common.isStringValidInteger(stock, "food item stock");

    return Number(stock);
}

function isFoodItemPriceValid(price) {
    common.isStringValidNumber(price, "food item price");

    return Number(price);
}

function isCartFoodItemPriceValid(price) {
    common.isNumberValid(price, "food item price");
}

function isCartFoodItemQuantityValid(quantity) {
    common.isIntegerValid(quantity, "food item quantity");
}

function isFoodItemUploadImageValid(image) {
    common.isObject(image, "food item image");

    const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];

    common.isFileTypeValid(allowedFileTypes, image.mimetype, "food item image");
    common.isFileSizeValid(image.size, "food item image");
}

function isFoodItemImageUrlValid(imageUrl) {
    common.isArgumentString(imageUrl, "food item image");
    common.isStringEmpty(imageUrl, "food item image");
    common.isUrlValid(imageUrl, "food item image");

    return imageUrl.trim();
}

function isUserIdValid(userId) {
    common.isArgumentString(userId, "user id");
    common.isStringEmpty(userId, "user id");

    return userId.trim();
}

function isCartFieldsValid(cart) {
    common.isVariableArray(cart, "cart");
    common.isArrayEmpty(cart, "cart");

    for (const currentItem of cart) {
        common.isObject(currentItem, "cart food item");

        const EXPECTED_OBJECT_LENGTH = 10;
        common.isObjectLengthValid(
            currentItem,
            EXPECTED_OBJECT_LENGTH,
            "Cart food item"
        );

        isRestaurantIdValid(currentItem.restaurantId);
        isFoodItemIdValid(currentItem.id);
        isFoodItemNameValid(currentItem.name);
        isCartFoodItemPriceValid(currentItem.price);

        currentItem.image &&
            currentItem.image.trim().length > 0 &&
            isFoodItemImageUrlValid(currentItem.image);

        isFoodItemTypeValid(currentItem.type);

        currentItem.description &&
            currentItem.description.trim().length > 0 &&
            isFoodItemDescriptionValid(currentItem.description);

        currentItem.cuisines &&
            currentItem.cuisines.trim().length > 0 &&
            isFoodItemCuisinesValid(currentItem.cuisines);

        isCartFoodItemQuantityValid(currentItem.quantity);
        isFoodItemRestaurantValid(currentItem.restaurant);
    }
}

module.exports = {
    isRestaurantPasswordValid,
    isRestaurantUsernameValid,
    isPostSignInTotalFieldsValid,
    isCheckRestaurantTotalFieldsValid,
    isPutCreateOrderTotalFieldsValid,
    isPutFoodItemStockValid,
    isRestaurantIdValid,
    isAccessTokenValid,
    isFoodItemIdValid,
    isFoodItemStockValid,
    isUpdateFoodItemStockValid,
    isFoodItemNameValid,
    isFoodItemDescriptionValid,
    isFoodItemPriceValid,
    isFoodItemTypeValid,
    isFoodItemCuisinesValid,
    isFoodItemUploadImageValid,
    isPostFoodItemFieldsValid,
    isFoodItemImageUrlValid,
    isAddFoodItemFieldsValid,
    isCartFieldsValid,
    isUserIdValid,
    isCreateOrderTotalFieldsValid,
};
