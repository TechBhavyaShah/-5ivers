const ErrorCode = require("./error-code");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");

function isArgumentString(string, variableName) {
    if (typeof string !== "string") {
        throwError(
            ErrorCode.BAD_REQUEST,
            `Error: Invalid argument passed for ${
                variableName || "provided variable"
            }. Expected string.`
        );
    }
}

function isString(string, variableName) {
    if (typeof string !== "string") {
        throwError(
            ErrorCode.BAD_REQUEST,
            `Error: ${
                variableName || "provided variable"
            } is not a string. Expected string.`
        );
    }
}

function isStringEmpty(string, variableName) {
    if (!string.trim() || string.length < 1) {
        throwError(
            ErrorCode.BAD_REQUEST,
            `Error: Empty string passed for ${
                variableName || "provided variable"
            }.`
        );
    }
}

function isStringAlphaSpace(string, variableName) {
    //should match alphabetical characters and spaces
    const alphaSpaceRegex = /[^a-zA-Z ]/;

    if (alphaSpaceRegex.test(string)) {
        throwError(
            ErrorCode.BAD_REQUEST,
            `Error: ${variableName} should have only alphabetical characters and/or spaces.`
        );
    }
}

function isStringLengthValid(string, mandatoryLength, variableName) {
    if (string.trim().length < mandatoryLength) {
        throwError(
            ErrorCode.BAD_REQUEST,
            `Error: ${variableName} should be of at least ${mandatoryLength} characters long.`
        );
    }
}

function isStringAlphaNumeric(string, variableName) {
    //should match alphanumeric characters
    const alphaNumericRegex = /[^a-zA-Z0-9]/;

    if (alphaNumericRegex.test(string)) {
        throwError(
            ErrorCode.BAD_REQUEST,
            `Error: ${variableName} should have only alphanumeric characters.`
        );
    }
}

function isNonSpaceString(string, variableName) {
    //should match alphanumeric characters, special characters and no spaces
    const nonSpaceRegex = /[^\S]/;

    if (nonSpaceRegex.test(string)) {
        throwError(
            ErrorCode.BAD_REQUEST,
            `Error: ${variableName} should have only alphanumeric or special characters and no spaces.`
        );
    }
}

function isTotalFieldsValid(totalFields, totalMandatoryFields) {
    if (totalFields !== totalMandatoryFields) {
        throwError(ErrorCode.BAD_REQUEST, "Error: You must supply all fields.");
    }
}

function isRequestQueryPresent(total) {
    if (total > 0) {
        throwError(ErrorCode.BAD_REQUEST, "Error: Request query not allowed.");
    }
}

function isRequestBodyPresent(total) {
    if (total > 0) {
        throwError(
            ErrorCode.BAD_REQUEST,
            "Error: Error: Doesn't require fields to be passed."
        );
    }
}

function isStringValidInteger(string, variableName) {
    isArgumentString(string, variableName);
    isStringEmpty(string, variableName);

    const number = Number(string);

    isNumber(number, variableName);
    isInteger(number, variableName);
    isNumberPositive(number, variableName);
}

function isStringValidNumber(string, variableName) {
    isArgumentString(string, variableName);
    isStringEmpty(string, variableName);

    const number = Number(string);

    isNumber(number, variableName);
    isNumberPositive(number, variableName);
}

function isNumber(number, variableName) {
    if (typeof number !== "number" || isNaN(number)) {
        throwError(
            ErrorCode.BAD_REQUEST,
            `Error: ${variableName || "Provided variable"} must be a number.`
        );
    }
}

function isInteger(number, variableName) {
    if (!Number.isInteger(number)) {
        throwError(
            ErrorCode.BAD_REQUEST,
            `Error: ${variableName || "Provided variable"} must be an integer.`
        );
    }
}

function isNumberPositive(number, variableName) {
    if (number < 0) {
        throwError(
            ErrorCode.BAD_REQUEST,
            `Error: ${
                variableName || "provided variable"
            } should be a positive number.`
        );
    }
}

function isNumberUnderUpperLimit(number, upperLimit, variableName) {
    if (number > upperLimit) {
        throwError(
            ErrorCode.BAD_REQUEST,
            `Error: Value for ${
                variableName || "provided variable"
            } cannot be more than ${upperLimit}`
        );
    }
}

function isUuid(id) {
    const PROJECT_UUID_VERSION = 4;

    if (!uuid.validate(id) || uuid.version(id) !== PROJECT_UUID_VERSION) {
        throwError(ErrorCode.BAD_REQUEST, `Error: Invalid id.`);
    }
}

function isJsonWebToken(accessToken) {
    try {
        const decodedToken = jwt.verify(
            accessToken,
            process.env.JSON_WEB_TOKEN_KEY
        );

        return decodedToken;
    } catch (error) {
        throwError(ErrorCode.UNAUTHORIZED, "Error: You are not logged in.");
    }
}

function isOptionValid(allowedOptions, givenOption, variableName) {
    if (!allowedOptions.includes(givenOption)) {
        throwError(
            ErrorCode.BAD_REQUEST,
            `Error: Invalid ${variableName || "provided variable"} selected.`
        );
    }
}

function isObject(obj, variableName) {
    if (
        !obj ||
        Array.isArray(obj) ||
        typeof obj !== "object" ||
        obj === null ||
        !(obj instanceof Object) ||
        obj.constructor !== Object
    ) {
        throwError(
            ErrorCode.BAD_REQUEST,
            `Error: ${
                variableName || "provided variable"
            } is not a Object. Expected Object.`
        );
    }
}

function isFileTypeValid(allowedFileTypes, givenFileType, variableName) {
    isString(givenFileType, variableName);
    isStringEmpty(givenFileType, variableName);

    if (!allowedFileTypes.includes(givenFileType.trim().toLowerCase())) {
        throwError(
            ErrorCode.BAD_REQUEST,
            `Error: Invalid ${variableName || "provided variable"} file type.`
        );
    }
}

function isFileSizeValid(fileSize, variableName) {
    isNumber(fileSize, variableName);

    if (fileSize < 1) {
        throwError(
            ErrorCode.BAD_REQUEST,
            `Error: Invalid ${variableName || "provided variable"} file size.`
        );
    }
}

function isUrlValid(string, variableName) {
    try {
        new URL(string);
    } catch (error) {
        throwError(
            ErrorCode.BAD_REQUEST,
            `Error: Invalid ${variableName || "provided variable"} url.`
        );
    }
}

const throwError = (code = 500, message = "Error: Internal server error") => {
    throw { code, message };
};

module.exports = {
    isArgumentString,
    isStringEmpty,
    isStringAlphaSpace,
    isStringAlphaNumeric,
    isNonSpaceString,
    isStringLengthValid,
    isTotalFieldsValid,
    isRequestQueryPresent,
    isRequestBodyPresent,
    isStringValidInteger,
    isNumberPositive,
    isNumberUnderUpperLimit,
    isNumber,
    isUuid,
    isString,
    isJsonWebToken,
    isOptionValid,
    isObject,
    isFileTypeValid,
    isFileSizeValid,
    isStringValidNumber,
    isUrlValid,
};
