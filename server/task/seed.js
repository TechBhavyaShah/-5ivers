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
      '54 Newark St., Hoboken',
    )
    let newRestaurant2 = await restaurantData.create(
      'restaurant2',
      'restaurant2.123',
      'Mexiterraneo Grill',
      'MexiterraneoGrill.png',
      '40.7374588',
      '-74.0320251',
      '153 1st St, Hoboken',
    )
    let newRestaurant3 = await restaurantData.create(
      'restaurant3',
      'restaurant3.123',
      'The Franklin',
      'TheFranklin.png',
      '40.7417174',
      '-74.0470084',
      '159 New York Ave, Jersey City',
    )
    let newRestaurant4 = await restaurantData.create(
      'restaurant4',
      'restaurant4.123',
      "Mike's",
      "Mike's.png",
      '40.7490474',
      '-74.0409191',
      '602 Palisade Ave, Jersey City',
    )
    let newRestaurant5 = await restaurantData.create(
      'restaurant5',
      'restaurant5.123',
      'Chango Kitchen',
      'ChangoKitchen.png',
      '40.74069799999999',
      '-74.0335348',
      '301 Willow Ave, Hoboken',
    )
    let newRestaurant6 = await restaurantData.create(
      'restaurant6',
      'restaurant6.123',
      "Ricky's",
      "Ricky's.png",
      '40.7414618',
      '-74.0464209',
      '48 Franklin St, Jersey City',
    )
    let newRestaurant7 = await restaurantData.create(
      'restaurant7',
      'restaurant7.123',
      'Ali Baba',
      'AliBaba.png',
      '40.747743',
      '-74.02799329999999',
      '912 Washington St Ste 1, Hoboken',
    )
    let newRestaurant8 = await restaurantData.create(
      'restaurant8',
      'restaurant8.123',
      'Mision Burrito',
      'MisionBurrito.png',
      '40.7402406',
      '-74.0468504',
      '333 Palisade Ave, Jersey City',
    )
    let newRestaurant9 = await restaurantData.create(
      'restaurant9',
      'restaurant9.123',
      'El Sabroso',
      'ElSabroso.png',
      '40.74879',
      '-74.047125',
      '414 Central Ave, Jersey City',
    )
    let newRestaurant10 = await restaurantData.create(
      'restaurant10',
      'restaurant10.123',
      'Elysian Cafe',
      'ElysianCafe.png',
      '40.7486928',
      '-74.0272798',
      '1001 Washington St, Hoboken',
    )
    // let newRestaurant1 = await restaurantData.create(
    //   'restaurant1',
    //   'restaurant1.123',
    //   'La Casa',
    //   'LaCasa.png',
    //   '40.7368747',
    //   '-74.0302638',
    // ),
    // let newRestaurant1 = await restaurantData.create(
    //   'restaurant1',
    //   'restaurant1.123',
    //   'La Casa',
    //   'LaCasa.png',
    //   '40.7368747',
    //   '-74.0302638',
    // ),
    // let newRestaurant1 = await restaurantData.create(
    //   'restaurant1',
    //   'restaurant1.123',
    //   'La Casa',
    //   'LaCasa.png',
    //   '40.7368747',
    //   '-74.0302638',
    // ),
    // let newRestaurant1 = await restaurantData.create(
    //   'restaurant1',
    //   'restaurant1.123',
    //   'La Casa',
    //   'LaCasa.png',
    //   '40.7368747',
    //   '-74.0302638',
    // ),
    // let newRestaurant1 = await restaurantData.create(
    //   'restaurant1',
    //   'restaurant1.123',
    //   'La Casa',
    //   'LaCasa.png',
    //   '40.7368747',
    //   '-74.0302638',
    // ),
    // let newRestaurant1 = await restaurantData.create(
    //   'restaurant1',
    //   'restaurant1.123',
    //   'La Casa',
    //   'LaCasa.png',
    //   '40.7368747',
    //   '-74.0302638',
    // ),
    // let newRestaurant1 = await restaurantData.create(
    //   'restaurant1',
    //   'restaurant1.123',
    //   'La Casa',
    //   'LaCasa.png',
    //   '40.7368747',
    //   '-74.0302638',
    // ),
    // let newRestaurant1 = await restaurantData.create(
    //   'restaurant1',
    //   'restaurant1.123',
    //   'La Casa',
    //   'LaCasa.png',
    //   '40.7368747',
    //   '-74.0302638',
    // )
  } catch (e) {
    console.log(e)
  }

  console.log('Done seeding the Database')

  await dbConnection.closeConnection()
}

main()
