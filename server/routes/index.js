const restaurantRoutes = require('./restaurants')
const s3Routes = require("./s3");

const constructorMethod = (app) => {
    app.use('/restaurants', restaurantRoutes);
    app.use("/s3", s3Routes);
    app.use('*', (req, res) => {
      res.status(404).json({ error: '404 page Not found' })
    })
};

module.exports = constructorMethod;
