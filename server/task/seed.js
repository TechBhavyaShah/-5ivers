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
    let newRestaurant11 = await restaurantData.create(
      'restaurant11',
      'restaurant11.123',
      'Dark Side Of The Moo',
      'DarkSideOfTheMoo.png',
      '40.7460666',
      '-74.04455519999999',
      '52 Bowers St, Jersey City',
    )
    let newRestaurant12 = await restaurantData.create(
      'restaurant12',
      'restaurant12.123',
      'Corto',
      'Corto.png',
      '40.7459686',
      '-74.0433718',
      '507 Palisade Ave, Jersey City',
    )
    let newRestaurant13 = await restaurantData.create(
      'restaurant13',
      'restaurant13.123',
      "Amanda's",
      "Amanda's.png",
      '40.7476512',
      '-74.0281186',
      '908 Washington St A, Hoboken',
    )
    let newRestaurant14 = await restaurantData.create(
      'restaurant14',
      'restaurant14.123',
      'La Boheme Restaurant',
      'LaBohemeRestaurant.png',
      '40.7407004',
      '-74.0345169',
      '233 Clinton St, Hoboken',
    )
    let newRestaurant15 = await restaurantData.create(
      'restaurant15',
      'restaurant15.123',
      "Margherita's",
      "Margherita's.png",
      '40.7459597',
      '-74.0285025',
      '740 Washington St, Hoboken',
    )
    let newRestaurant16 = await restaurantData.create(
      'restaurant16',
      'restaurant16.123',
      "Zack's",
      "Zack's.png",
      '40.7405781',
      '-74.0339624',
      '232 Willow Ave, Hoboken',
    )
    let newRestaurant17 = await restaurantData.create(
      'restaurant17',
      'restaurant17.123',
      'Empanadas Cafe',
      'EmpanadasCafe.png',
      '40.7381833',
      '-74.0304743',
      '123 Washington St, Hoboken',
    )
    let newRestaurant18 = await restaurantData.create(
      'restaurant18',
      'restaurant18.123',
      "Mamoun's Falafel",
      "Mamoun'sFalafel.png",
      '40.740128',
      '-74.0303',
      '300 Washington St, Hoboken',
    )
    let newRestaurant19 = await restaurantData.create(
      'restaurant19',
      'restaurant19.123',
      'Los Tres Chilitos',
      'LosTresChilitos.png',
      '40.740128',
      '-74.0303',
      '456 Central Ave, Jersey City',
    )
    let newRestaurant20 = await restaurantData.create(
      'restaurant20',
      'restaurant20.123',
      'Shaka Kitchen',
      'ShakaKitchen.png',
      '40.740128',
      '-74.0303',
      '110 Washington St, Hoboken',
    )
    let newRestaurant21 = await restaurantData.create(
      'restaurant21',
      'restaurant21.123',
      'The Hutton',
      'TheHutton.png',
      '40.746984',
      '-74.05585099999999',
      '225 Hutton St, Jersey City',
    )
    let newRestaurant22 = await restaurantData.create(
      'restaurant22',
      'restaurant22.123',
      'Heavenly Chicken and Ribs',
      'HeavenlyChickenandRibs.png',
      '40.75006339999999',
      '-74.0607799',
      '555 Tonnele Ave, Jersey City',
    )
    let newRestaurant23 = await restaurantData.create(
      'restaurant23',
      'restaurant23.123',
      'Ujala',
      'Ujala.png',
      '40.748624',
      '-74.05597809999999',
      '3403 John F. Kennedy Blvd, Jersey City',
    )
    let newRestaurant24 = await restaurantData.create(
      'restaurant24',
      'restaurant24.123',
      'Northern Soul',
      'NorthernSoul.png',
      '40.7396414',
      '-74.04253299999999',
      '700 1st St, Hoboken',
    )
    let newRestaurant25 = await restaurantData.create(
      'restaurant25',
      'restaurant25.123',
      'Anna Maria Pizzeria & Restaurant',
      'AnnaMariaPizzeria&Restaurant.png',
      '40.755588',
      '-74.0467978',
      '3668 John F. Kennedy Blvd, Jersey City',
    )
    let newRestaurant26 = await restaurantData.create(
      'restaurant26',
      'restaurant26.123',
      'Corkscrew Bar',
      'CorkscrewBar.png',
      '40.7495872',
      '-74.0430642',
      '61 Congress St, Jersey City',
    )
    let newRestaurant27 = await restaurantData.create(
      'restaurant27',
      'restaurant27.123',
      'Garden State',
      'GardenState.png',
      '40.7448491',
      '-74.0503275',
      '287 Central Ave, Jersey City',
    )
    let newRestaurant28 = await restaurantData.create(
      'restaurant28',
      'restaurant28.123',
      'Hollywood Fried Chicken',
      'HollywoodFriedChicken.png',
      '40.7494904',
      '-74.04710229999999',
      '431 Central Ave, Jersey City',
    )
    let newRestaurant29 = await restaurantData.create(
      'restaurant29',
      'restaurant29.123',
      'NYC GYROS',
      'NYCGYROS.png',
      '40.7520534',
      '-74.0535598',
      '3515 John F. Kennedy Blvd, Jersey City',
    )
    let newRestaurant30 = await restaurantData.create(
      'restaurant30',
      'restaurant30.123',
      'Good Year',
      'GoodYear.png',
      '40.7488962',
      '-74.0472085',
      '416 Central Ave, Jersey City',
    )
    let newRestaurant31 = await restaurantData.create(
      'restaurant31',
      'restaurant31.123',
      "Tommy's Family Restaurant",
      "Tommy'sFamilyRestaurant.png",
      '40.7471024',
      '-74.0487619',
      '349 Central Ave, Jersey City',
    )
    let newRestaurant32 = await restaurantData.create(
      'restaurant32',
      'restaurant32.123',
      'Sophia’s Kitchen',
      'Sophia’sKitchen.png',
      '40.7563046',
      '-74.0434118',
      '422A Paterson Plank Rd, Union City',
    )
    let newRestaurant33 = await restaurantData.create(
      'restaurant33',
      'restaurant33.123',
      'Los Amigos Restaurant, LLC',
      'LosAmigosRestaurant,LLC.png',
      '40.7482997',
      '-74.0480542',
      '395 Central Ave, Jersey City',
    )
    let newRestaurant34 = await restaurantData.create(
      'restaurant34',
      'restaurant34.123',
      "Rumba's Cafe",
      "Rumba'sCafe.png",
      '40.7521653',
      '-74.04535039999999',
      '513 Central Ave, Jersey City',
    )
    let newRestaurant35 = await restaurantData.create(
      'restaurant35',
      'restaurant35.123',
      'La Concha',
      'LaConcha.png',
      '40.7479063',
      '-74.0478941',
      '384 Central Ave, Jersey City',
    )
  } catch (e) {
    console.log(e)
  }

  console.log('Done seeding the Database')

  await dbConnection.closeConnection()
}

main()
