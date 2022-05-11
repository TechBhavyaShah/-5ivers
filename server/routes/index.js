const locationRoutes = require("./location");

const constructorMethod = (app) => {
  app.use("/restaurants", locationRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};
module.exports = constructorMethod;
