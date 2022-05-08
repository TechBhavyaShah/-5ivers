const s3Routes = require("./s3");

const constructorMethod = (app) => {
    app.use("/s3", s3Routes);
    app.use("*", (req, res) => {
        res.redirect("/");
    });
};

module.exports = constructorMethod;
