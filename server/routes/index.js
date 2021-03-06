const userRoutes = require("./users");
const restaurantRoutes = require("./restaurants");
const s3Routes = require("./s3");
const locationRoutes = require("./location");

const constructorMethod = (app) => {
  app.use("/user", userRoutes);
  app.use("/restaurants", restaurantRoutes);
  app.use("/restaurant", locationRoutes);
  app.use("/s3", s3Routes);
  app.use("*", (req, res) => {
    res.status(404).json({ error: "404 page Not found" });
  });
};
module.exports = constructorMethod;
