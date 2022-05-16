const express = require("express");
const router = express.Router();
const s3storage = require("../s3storage");
const s3storageFns = s3storage.s3DirectUpload;

router.get("/url", async (req, res) => {
    try {
        const url = await s3storageFns.generateUploadURL();
        return res.json(url);
    } catch (e) {
        return res
            .status(e.status || 500)
            .json({ message: e.message || "Internal Server Error" });
    }
});

module.exports = router;
