require("dotenv").config();

const AWS = require("aws-sdk");
const fs = require("fs");

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const apiVersion = process.env.AWS_API_VERSION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

AWS.config.update({ region: region });

const s3 = new AWS.S3({
    apiVersion,
    region,
    accessKeyId,
    secretAccessKey,
});

/* 
    Uploads a file to s3
    - file: file details from multer
    - id: the generated id from multer
    - type: either "profile" or "food"
*/
function uploadFile(file, id, type) {
    const fileStream = fs.createReadStream(file.path);

    let key;

    if (type == "profile") {
        key = `profile/${id}/${file.filename}`;
    } else {
        key = `${id}/${file.filename}`;
    }

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: key,
    };

    return s3.upload(uploadParams).promise();
}

/* 
    Downloads a file from s3
    - fileKey: the key of the image from S3 (stored in the mongo database)
    - id: the generated id from multer
    - type: either "profilePic" or "foodItemPic"
*/
function getFileStream(fileKey, id, type) {
    let key;

    if (type == "profile") {
        key = `profile/${id}/${fileKey}`;
    } else {
        key = `${id}/${fileKey}`;
    }

    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName,
    };

    return s3.getObject(downloadParams).createReadStream();
}

module.exports = { uploadFile, getFileStream };
