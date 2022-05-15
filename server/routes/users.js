const express = require("express");
const data = require("../data");
const usersData = data.users;
const mongoCollections = require("../config/mongoCollections");
const userColl = mongoCollections.users;
const ObjectID = require("mongodb").ObjectId;
const router = express.Router();
const xss = require("xss");
const ErrorCode = require("../helpers/error-code");

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
        biography: userdata.biography,
        address: userdata.address,
        image_url: userdata.image_url,
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
    if (!req.body.image_url) {
      res.status(400).send({ error: "You must provide an image_url" });
      return;
    }
    if (!req.body.biography) {
      res.status(400).send({ error: "Please write something about you" });
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
    if (typeof req.body.image_url !== "string") {
      res.status(400).send({ error: "Image_url must be string" });
      return;
    }
    if (typeof req.body.biography !== "string") {
      res.status(400).send({ error: "Biography must be string" });
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
    if (/^ *$/.test(req.body.image_url)) {
      res.status(400).send({ error: "image cannot be empty" });
      return;
    }
    if (/^ *$/.test(req.body.biography)) {
      res.status(400).send({ error: "Biography cannot be empty" });
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

    // if (/\s/g.test(req.body.password)) {
    //   res.status(400).send({ error: "password cannot have spaces" });
    //   return;
    // }
    // if (req.body.password.length < 8) {
    //   res
    //     .status(400)
    //     .send({ error: "Password should be atleast 8 characters long" });
    //   return;
    // }
    try {
      const user_data = req.body;
      const { id, name, emailAddress, biography, address, image_url } =
        user_data;
      const postUser = await usersData.createUser(
        id,
        name,
        emailAddress,
        biography,
        address,
        image_url
      );

      // if (postUser) {
      //     return res.redirect("/");
      // }
    } catch (e) {
      console.log(e);
      res.status(e.status || 500).send({
        error: e.message || `Internal Server Error`,
      });
    }
  } catch (e) {
    res.status(e.status || 500).send({ error: e.message });
  }
});

router.get("/pastOrders/:userId", async (req, res) => {
  const id = req.params.userId;
  try {
    if (id) {
      const pastOrders = await usersData.getPastOrders(id);
      res.send({
        pastOrders: pastOrders,
      });
    } else {
      res.redirect("/");
      // res.render("users/error")
    }
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
});

router.put("/createOrder/:id", async (request, response) => {
  try {
    const requestPostData = request.body;

    if (
      !requestPostData ||
      !requestPostData.cart ||
      requestPostData.cart.length < 1
    ) {
      throwError(ErrorCode.NOT_FOUND, "Error: Data not found.");
    }

    await usersData.createOrder(request.params.id, requestPostData.cart);

    response.json({ success: true });
  } catch (error) {
    response.status(error.code || 500).json({
      error: error.message || "Error: Internal server error.",
    });
  }
});

const throwError = (code = 500, message = "Internal Server Error") => {
  throw { code, message };
};

module.exports = router;
