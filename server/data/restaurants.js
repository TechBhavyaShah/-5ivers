const { exit } = require('process')
const mongoCollections = require('../config/mongoCollections')
const restaurants = mongoCollections.restaurants
const ObjectId = require('mongodb').ObjectId
const uuid = require('uuid')
const bcrypt = require('bcryptjs')
const saltRounds = 12

//--------------- Function to create a Restaurant------------------------//
const create = async function create(
  username,
  password,
  name,
  image,
  latitude,
  longitude,
) {
  if (arguments.length != 6) {
    throw { msg: `The Number of Arguments provided are not Proper`, err: 400 }
  }

  if (!username || !password || !name || !image || !latitude || !longitude) {
    throw {
      msg: `All the input parameter must be provided in the function`,
      err: 400,
    }
  }

  if (typeof username !== 'string')
    throw { message: `Restaurant username must be string`, status: 400 }
  if (typeof password !== 'string')
    throw { message: `Restaurant password must be string`, status: 400 }
  if (typeof name !== 'string')
    throw { message: 'Restaurant name must be string', status: 400 }
  if (typeof latitude !== 'string')
    throw { message: 'Restaurant Latitude must be string', status: 400 }
  if (typeof longitude !== 'string')
    throw { message: 'Restaurant Longitude must be string', status: 400 }

  if (/^ *$/.test(username))
    throw { message: `Restaurant UserName cannot be empty`, status: 400 }
  if (/^ *$/.test(password))
    throw { message: `Restaurant Password cannot be empty`, status: 400 }
  if (/^ *$/.test(name))
    throw { message: `restaurant Name cannot be empty`, status: 400 }
  if (/^ *$/.test(latitude))
    throw { message: `Restaurant Latitude cannot be empty`, status: 400 }
  if (/^ *$/.test(longitude))
    throw { message: `Restaurant Longitude cannot be empty`, status: 400 }

  if (/[^A-Za-z0-9]/g.test(username)) {
    throw {
      message: `Restaurant Username should only have numbers and alphabets`,
      status: 400,
    }
  }

  name = name.trim()
  latitude = latitude.trim()
  longitude = longitude.trim()

  if (username.length < 4) {
    throw {
      message: `Restaurant Username should have atleast 4 characters`,
      status: 400,
    }
  }

  if (password.length < 8) {
    throw {
      message: `Restaurnat Password should be atleast 8 characters long`,
      status: 400,
    }
  }

  if (/\s/g.test(password))
    throw {
      message: `Restaurnat Password should not contain any white spaces`,
      status: 400,
    }

  const restHashedPwd = await bcrypt.hash(password, saltRounds)

  const restaurantsCollection = await restaurants()

  let newRestaurant = {
    _id: uuid.v4(),
    username: username,
    password: restHashedPwd,
    name: name,
    restaurantImage: image,
    distance: 0,
    latitude: latitude,
    longitude: longitude,
    items: [],
  }

  const insertInfo = await restaurantsCollection.insertOne(newRestaurant)
  if (insertInfo.insertedCount === 0)
    throw { message: 'Could not add restaurant', status: 500 }

  const newRestaurantId = insertInfo.insertedId.toString()
  const restaurant = await getRestaurantById(newRestaurantId)

  return JSON.parse(JSON.stringify(restaurant))
}
//----------------End of Create Function-------------------//

//---------------Function to get a restaurant By Id-------------------//

async function getRestaurantById(id) {
  console.log(id)
  if (!id) throw { message: `You must provide a proper id`, status: 400 }
  if (typeof id != 'string')
    throw { message: `${id} is not string`, status: 400 }
  if (/^ *$/.test(id))
    throw { message: `id with just empty spaces is not valid`, status: 400 }

  const restCollection = await restaurants()
  let getId = id

  // try{
  //     getId = ObjectID(id);
  // }
  // catch(e){
  //     throw {message: `Id is invalid because of ${e}`, status: 400}
  // }

  const restaurant = await restCollection.findOne({ _id: getId })

  if (restaurant === null)
    throw { message: `No restaurant exists with that id`, status: 400 }

  return JSON.parse(JSON.stringify(restaurant))
}

//---------------End of get restaurant By ID------------------------//

//---------------Function to Get All restaurants------------------//
const getAllRestaurants = async function getAllRestaurants() {
  let restCollection = await restaurants()

  let restList = await restCollection
    .find({}, { projection: { _id: 1, name: 1 } })
    .toArray()

  if (restList.length > 0) {
    Array.from(restList).forEach((element) => {
      element['_id'] = element['_id'].toString()
    })
  } else {
    throw { msg: `No Restaurant Available in the Database `, err: 404 }
  }
  return restList
}

//--------------End of getAll Restaurants Function----------------------------//

module.exports = {
  create,
  getRestaurantById,
  getAllRestaurants,
}
