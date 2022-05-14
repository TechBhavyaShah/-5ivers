const express = require("express");
const cors = require("cors");
const app = express();
const configRoutes = require("./routes");

const static = express.static(__dirname + "/public");
app.use("/public", static);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

configRoutes(app);

app.listen(3001, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3001");
});
