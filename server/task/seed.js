const dbConnection = require('../config/mongoConnection')
const data = require('../data')
const restaurantData = data.restaurants
const ObjectId = require('mongodb').ObjectId

async function main() {
  const db = await dbConnection.connectToDb()
  //   await db.dropDatabase();

  try {
    let newRestaurant1 = await restaurantData.create(
      'restaurant1',
      'restaurant1.123',
      'La Casa',
      'LaCasa.png',
      '40.7368747',
      '-74.0302638',
    )
  } catch (e) {
    console.log(e)
  }

  console.log('Done seeding the Database')

  await dbConnection.closeConnection()
}

main()
