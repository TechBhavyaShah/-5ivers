require("dotenv").config();

const AWS = require("aws-sdk");
const crypto = require("crypto");
const util = require("util");
const randomBytes = util.promisify(crypto.randomBytes);

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const apiVersion = process.env.AWS_API_VERSION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new AWS.S3({
    // apiVersion,
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: "v4",
});

async function generateUploadURL() {
    const rawBytes = await randomBytes(16);
    const imageName = rawBytes.toString("hex");

    const params = {
        Bucket: bucketName,
        Key: imageName,
        Expires: 60,
    };

    const uploadURL = await s3.getSignedUrlPromise("putObject", params);
    console.log(uploadURL);
    return uploadURL;
}

module.exports = {
    generateUploadURL,
};
