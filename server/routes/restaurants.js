const express = require('express')
const router = express.Router()
const data = require('../data')
const ObjectId = require('mongodb').ObjectId
const restaurantdata = data.restaurants

//---------This is Get by Restaurant ID method to get a restaurant with Id---------------//
router.get('/:restaurantId', async (req, res) => {
  const id = req.params.restaurantId

  if (id == null || id == undefined) {
    res.status(400).json({
      error: `There is no Input in restaurnat id Parameter. It cannot be null`,
    })
    return
  }

  if (typeof id !== 'string') {
    res
      .status(400)
      .json({ error: `The restaurant ID Parameter should be string` })
    return
  }

  if (/^ *$/.test(id)) {
    res
      .status(400)
      .json({ error: `Restaurant id field cannot be just empty spaces` })
    return
  }

  if (!id) {
    res.status(400).json({ error: 'Id parameter must be supplied' })
    return
  }

  try {
    const restaurantById = await restaurantdata.getRestaurantById(
      req.params.restaurantId,
    )
    res.json(restaurantById)
    return
  } catch (e) {
    //console.log(e)
    res
      .status(e.status || 500)
      .json({ message: e.message || 'Internal Server Error' })
    return
  }
})
//------------End of Restaurant GetByID method-------------//

//-----------This is Get method to get all the restaurants----------/
router.get('/', async (req, res) => {
  try {
    const allRestautrants = await restaurantdata.getAllRestaurants()
    res.json(allRestautrants)
    return
  } catch (e) {
    res
      .status(e.status || 500)
      .json({ message: e.message || 'Internal Server Error' })
    return
  }
})
//--------End of Get Method to get all the restaurants-----------//

//-----This is Post method to create an Item for a restaurant----------//
router.post('/foodItem/:restaurantId', async (req, res) => {
  const restaurantId = req.params.restaurantId
  const restaurantItemData = req.body

  if (/^ *$/.test(restaurantId)) {
    res.status(400).json({
      error: 'restaurantId cannot be empty Spaces',
    })
    return
  }

  if (Object.keys(restaurantItemData).length != 7) {
    res.status(400).json({
      error:
        'The Number of Parameters is not sufficient while adding the Food Item',
    })
    return
  }

  if (!restaurantId) {
    res
      .status(400)
      .json({ error: 'You must provide restaurant ID to add the item' })
    return
  }

  if (!restaurantItemData.name) {
    res.status(400).json({ error: 'You must provide name of the Item' })
    return
  }
  if (!restaurantItemData.description) {
    res.status(400).json({ error: 'You must provide description of the item' })
    return
  }
  if (!restaurantItemData.price) {
    res.status(400).json({ error: 'You must provide price of the item' })
    return
  }
  if (!restaurantItemData.item_image) {
    res.status(400).json({ error: 'You must provide image of the item added' })
    return
  }

  if (!restaurantItemData.type) {
    res.status(400).json({
      error: 'You must provide type of the Item added to the restaurant',
    })
    return
  }

  if (!restaurantItemData.stock) {
    res
      .status(400)
      .json({ error: 'You must provide stock of the Item available' })
    return
  }

  //------------Starts here--------------------//
  if (
    restaurantItemData.name == null ||
    restaurantItemData.description == null ||
    restaurantItemData.price == null ||
    restaurantItemData.item_image == null ||
    restaurantItemData.type == null ||
    restaurantItemData.stock == null
  ) {
    res.status(400).json({
      error:
        'All the input parameter must be provided in the function for adding an item',
    })
    return
  }

  if (restaurantId == null) {
    res.status(400).json({
      error:
        'You must provide restaurant ID to add the item. It cannot be null',
    })
    return
  }

  if (
    typeof restaurantItemData.name !== 'string' ||
    typeof restaurantItemData.description !== 'string' ||
    typeof restaurantItemData.price !== 'number' ||
    typeof restaurantItemData.item_image !== 'string' ||
    typeof restaurantItemData.type !== 'string' ||
    typeof restaurantItemData.stock !== 'number' ||
    typeof restaurantId !== 'string'
  ) {
    res.status(400).json({
      error:
        'The name,description,item_image,type,restaurantId must all be of string Type and price and stock should be of Number Type. No Other Datatype is allowed!',
    })
    return
  }

  if (isNaN(restaurantItemData.price) || isNaN(restaurantItemData.stock)) {
    res.status(400).json({
      error:
        'The price and stock should be of Number Type. No Other Datatype is allowed!',
    })
    return
  }

  if (/^ *$/.test(restaurantItemData.name)) {
    res.status(400).json({
      error: 'Item name cannot be empty Spaces',
    })
    return
  }

  if (/^ *$/.test(restaurantItemData.description)) {
    res.status(400).json({
      error: 'Item description cannot be empty Spaces',
    })
    return
  }

  if (/^ *$/.test(restaurantItemData.price)) {
    res.status(400).json({
      error: 'Item Price cannot be empty Spaces',
    })
    return
  }

  if (/^ *$/.test(restaurantItemData.item_image)) {
    res.status(400).json({
      error: 'Item Image cannot be empty Spaces',
    })
    return
  }

  if (/^ *$/.test(restaurantItemData.type)) {
    res.status(400).json({
      error: 'Item Type cannot be empty Spaces',
    })
    return
  }

  if (/^ *$/.test(restaurantItemData.stock)) {
    res.status(400).json({
      error: 'Item Price cannot be empty Spaces',
    })
    return
  }

  if (/^ *$/.test(restaurantId)) {
    res.status(400).json({
      error: 'Restaurant ID cannot be empty Spaces',
    })
    return
  }

  let name = restaurantItemData.name
  let description = restaurantItemData.description
  let price = restaurantItemData.price
  let item_image = restaurantItemData.item_image
  let type = restaurantItemData.type
  let cuisines = restaurantItemData.cuisines
  let stock = restaurantItemData.stock

  if (
    type.toLowerCase() !== 'veg' &&
    type.toLowerCase() !== 'non-veg' &&
    type.toLowerCase() !== 'vegan'
  ) {
    res.status(400).json({
      error:
        'The Type option should only have veg,non-veg and vegan. No other types are allowed',
    })
    return
  }

  name = name.trim()
  description = description.trim()
  type = type.trim()
  cuisines = cuisines.trim()

  //------------Ends Here------------------------//

  try {
    const newItemAdded = await restaurantdata.addItemToRestaurant(
      restaurantId,
      name,
      description,
      price,
      item_image,
      type,
      cuisines,
      stock,
    )
    res.json(newItemAdded)
    return
  } catch (e) {
    res
      .status(e.status || 500)
      .json({ message: e.message || 'Internal Server Error' })
    return
  }
})

//------------End of Post Method to create an Item for a restaurant-------------//

//--------------Router to update the stock of the Item in restaurant-------------------//
router.put('/foodItem/:restaurantId/:foodItemId', async (req, res) => {
  const ItemStock = req.body

  if (Object.keys(ItemStock).length != 1) {
    res.status(400).json({ error: 'Proper Number of Parameters is Required' })
    return
  }

  let restaurantId = req.params.restaurantId
  let itemId = req.params.foodItemId
  if (!restaurantId) {
    res.status(400).json({ error: 'You must provide the restaurant Id' })
    return
  }
  if (!itemId) {
    res.status(400).json({ error: 'You must provide the Food Item ID' })
    return
  }
  if (!itemId) {
    res
      .status(400)
      .json({ error: 'You must the updated stock of the Food Item' })
    return
  }

  if (restaurantId == null || restaurantId == undefined) {
    res.status(400).json({
      error: `There is no Input in restaurantId Parameter. It cannot be null or undefined`,
    })
    return
  }

  if (itemId == null || itemId == undefined) {
    res.status(400).json({
      error: `There is no Input in itemId Parameter. It cannot be null or undefined`,
    })
    return
  }

  if (/^ *$/.test(restaurantId)) {
    res.status(400).json({
      error: 'restaurant Id cannot be empty Spaces',
    })
    return
  }

  if (/^ *$/.test(itemId)) {
    res.status(400).json({
      error: 'Item Id cannot be empty Spaces',
    })
    return
  }

  //------------Starts here--------------------//
  let stock = ItemStock.stock

  if (stock == null || undefined) {
    res.status(400).json({
      error: 'All the stock must be provided in the Body',
    })
    return
  }

  if (/^ *$/.test(stock)) {
    res.status(400).json({
      error: 'Stock cannot be empty Spaces',
    })
    return
  }

  if (typeof stock !== 'number') {
    res.status(400).json({
      error: 'stock should be of number type. No Other Datatype is allowed!',
    })
    return
  }

  if (isNaN(stock)) {
    res.status(400).json({
      error:
        'The stock should be of Number Type. No Other Datatype is allowed!',
    })
    return
  }

  //------------Ends Here------------------------//
  try {
    const newRest = await restaurantdata.updateFoodItemStock(
      restaurantId,
      itemId,
      stock,
    )
    res.json(newRest)
  } catch (e) {
    res.status(e.err || 500).json({ message: e.msg || 'Internal Server Error' })
  }
})

module.exports = router
