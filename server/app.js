const express = require("express");
const cors = require("cors");
const app = express();
const configRoutes = require("./routes");
const xss = require("xss");

const static = express.static(__dirname + "/public");
app.use("/public", static);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

//XSS
app.use("*", (req, res, next) => {
  if (req.body) {
    Object.keys(req.body).map(function (key, index) {
      if (typeof req.body[key] === "string") {
        req.body[key] = xss(req.body[key]);
      }
    });

    if (req.params) {
      Object.keys(req.params).map(function (key, index) {
        if (typeof req.params[key] === "string") {
          req.params[key] = xss(req.params[key]);
        }
      });
    }
    next();
  } else {
    next();
  }
});

configRoutes(app);

app.listen(3001, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3001");
});
