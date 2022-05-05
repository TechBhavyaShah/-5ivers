const express = require("express");
const data = require("../data");
const usersData = data.users;
const mongoCollections = require("../config/mongoCollections");
const userColl = mongoCollections.users;
const ObjectID = require("mongodb").ObjectId;
const router = express.Router();
const xss = require("xss");

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

router.get("/userDetails/:userId", async (req, res) => {
  const id = req.params.userId;
  try {
    if (id) {
      const userdata = await usersData.getById(id);
      res.send({
        name: userdata.name,
        emailAddress: userdata.emailAddress,
        currentLocation: userdata.currentLocation,
        address: userdata.address,
        pastOrders: userdata.pastOrders,
      });
    } else {
      res.redirect("/");
      // res.render("users/error")
    }
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
});

router.post("/userDetails", async (req, res) => {
  try {
    if (!req.body.id) {
      res.status(400).send({ error: "You must provide an id" });
      return;
    }
    if (!req.body.name) {
      res.status(400).send({ error: "You must provide a name" });
      return;
    }

    if (!req.body.emailAddress) {
      res.status(400).send({ error: "You must provide Email Address" });
      return;
    }
    if (!req.body.password) {
      res.status(400).send({ error: "You must provide a Password" });
      return;
    }
    if (!req.body.currentLocation) {
      res.status(400).send({ error: "Current Location not found" });
      return;
    }
    if (!req.body.address) {
      res.status(400).send({ error: "You must provide an address" });
      return;
    }
    if (typeof req.body.name !== "string") {
      res.status(400).send({ error: "Name must be string" });
      return;
    }
    if (typeof req.body.emailAddress !== "string") {
      res.status(400).send({ error: "Email address must be string" });
      return;
    }
    if (typeof req.body.password !== "string") {
      res.status(400).send({ error: "Password must be string" });
      return;
    }
    if (typeof req.body.currentLocation !== "string") {
      res.status(400).send({ error: "current location must be string" });
      return;
    }
    if (typeof req.body.address !== "string") {
      res.status(400).send({ error: "address must be string" });
      return;
    }
    if (/^ *$/.test(req.body.name)) {
      res.status(400).send({ error: "Name cannot be empty" });
      return;
    }
    if (/^ *$/.test(req.body.emailAddress)) {
      res.status(400).send({ error: "Email Address cannot be empty" });
      return;
    }
    if (/^ *$/.test(req.body.password)) {
      res.status(400).send({ error: "password cannot be empty" });
      return;
    }
    if (/^ *$/.test(req.body.currentLocation)) {
      res.status(400).send({ error: "current location cannot be empty" });
      return;
    }
    if (/^ *$/.test(req.body.address)) {
      res.status(400).send({ error: "Address cannot be empty" });
      return;
    }
    if (!validateEmail(req.body.emailAddress)) {
      res.status(400).send({ error: "Please Enter valid Email Address" });
      return;
    }

    if (/\s/g.test(req.body.password)) {
      res.status(400).send({ error: "password cannot have spaces" });
      return;
    }
    if (req.body.password.length < 8) {
      res
        .status(400)
        .send({ error: "Password should be atleast 8 characters long" });
      return;
    }
    try {
      const user_data = req.body;
      const { name, emailAddress, password, currentLocation, address } =
        user_data;
      const postUser = await usersData.createUser(
        name,
        emailAddress,
        password,
        currentLocation,
        address
      );

      if (postUser) {
        return res.redirect("/");
      }
    } catch (e) {
      res
        .status(e.status || 500)
        .send({ error: e.message || `Internal Server Error` });
    }
  } catch (e) {
    res.status(e.status || 500).send({ error: e.message });
  }
});
