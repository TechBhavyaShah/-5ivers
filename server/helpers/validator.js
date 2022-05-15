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

module.exports = {
    isRestaurantPasswordValid,
    isRestaurantUsernameValid,
    isPostSignInTotalFieldsValid,
    isCheckRestaurantTotalFieldsValid,
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
};
