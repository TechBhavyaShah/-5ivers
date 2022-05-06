const restaurantRoutes = require('./restaurants')

const constructorMethod = (app) => {
  app.use('/restaurants', restaurantRoutes)

  app.use('*', (req, res) => {
    res.status(404).json({ error: '404 page Not found' })
  })
}

module.exports = constructorMethod
