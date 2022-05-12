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
    common.isNonSpaceString(username, "restaurant username");

    return username;
}

function isPostSignInTotalFieldsValid(totalFields) {
    const TOTAL_MANDATORY_FIELDS = 2;

    common.isTotalFieldsValid(totalFields, TOTAL_MANDATORY_FIELDS);
}

function isCheckRestaurantTotalFieldsValid(totalFields) {
    const TOTAL_MANDATORY_FIELDS = 2;

    common.isTotalFieldsValid(totalFields, TOTAL_MANDATORY_FIELDS);
}

module.exports = {
    isRestaurantPasswordValid,
    isRestaurantUsernameValid,
    isPostSignInTotalFieldsValid,
    isCheckRestaurantTotalFieldsValid,
};
