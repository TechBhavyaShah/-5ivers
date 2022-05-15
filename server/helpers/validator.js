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
};
