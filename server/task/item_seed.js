const dbConnection = require("../config/mongoConnection");
const data = require("../data");
const restaurantData = data.restaurants;
const ObjectId = require("mongodb").ObjectId;

async function main() {
  const db = await dbConnection.connectToDb();
  //   await db.dropDatabase();

  try {
    let rest1Item1 = await restaurantData.addItemToRestaurant(
      "4e3a2f29-9d22-4923-9e13-fc2b240d0665",
      "Cubano Sandwich",
      "Traditional cuban pressed sandwich pork ham swiss cheese pickle and mojo.",
      10.95,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/0e28000f-311c-4f91-be1a-d9a6c0fe21e6-retina-large-jpeg",
      "non-veg",
      "Latin American, Tapas/Small Plates",
      10
    );
    let rest1Item2 = await restaurantData.addItemToRestaurant(
      "4e3a2f29-9d22-4923-9e13-fc2b240d0665",
      "Pernil",
      "Roast Pork.",
      15.95,
      "",
      "non-veg",
      "Latin American, Tapas/Small Plates",
      10
    );
    let rest1Item3 = await restaurantData.addItemToRestaurant(
      "4e3a2f29-9d22-4923-9e13-fc2b240d0665",
      "Pollo a La Plancha",
      "Pollo a La Plancha Grilled chicken breast. served with 2 sides.",
      14.95,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/ac8c11fa-f783-4934-a1e7-dc894a54ba8c-retina-large-jpeg",
      "non-veg",
      "Latin American, Tapas/Small Plates",
      10
    );
    let rest1Item4 = await restaurantData.addItemToRestaurant(
      "4e3a2f29-9d22-4923-9e13-fc2b240d0665",
      "Pollo Empanizado",
      "Breaded chicken breast. served with 2 sides.",
      15.95,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/480cc6d0-be86-4a61-81a2-14cde233fa85-retina-large-jpeg",
      "non-veg",
      "Latin American, Tapas/Small Plates",
      10
    );
    let rest1Item5 = await restaurantData.addItemToRestaurant(
      "4e3a2f29-9d22-4923-9e13-fc2b240d0665",
      "Rabo Encendido",
      "Oxtail in Sauce.",
      17.95,
      "",
      "non-veg",
      "Latin American, Tapas/Small Plates",
      10
    );
    let rest1Item6 = await restaurantData.addItemToRestaurant(
      "4e3a2f29-9d22-4923-9e13-fc2b240d0665",
      "Tostones",
      "Fried green plantains.",
      4.95,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/2d4b5635-49c9-4de0-a444-0a90fb818b4e-retina-large-jpeg",
      "veg",
      "Latin American, Tapas/Small Plates",
      10
    );
    let rest1Item7 = await restaurantData.addItemToRestaurant(
      "4e3a2f29-9d22-4923-9e13-fc2b240d0665",
      "Papa Frita",
      "French Fries.",
      4.95,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/6a270992-c98b-4f30-b49b-c9fa055719b3-retina-large-jpeg",
      "veg",
      "Latin American, Tapas/Small Plates",
      10
    );
    let rest1Item8 = await restaurantData.addItemToRestaurant(
      "4e3a2f29-9d22-4923-9e13-fc2b240d0665",
      "Tres Leche",
      "Spanish three milk pound cake.",
      5.95,
      "",
      "veg",
      "Latin American, Tapas/Small Plates",
      10
    );
    let rest1Item9 = await restaurantData.addItemToRestaurant(
      "4e3a2f29-9d22-4923-9e13-fc2b240d0665",
      "Pollo Asado",
      "Roasted Chicken.",
      14.95,
      "",
      "non-veg",
      "Latin American, Tapas/Small Plates",
      10
    );
    let rest1Item10 = await restaurantData.addItemToRestaurant(
      "4e3a2f29-9d22-4923-9e13-fc2b240d0665",
      "Empanada De Carne",
      "",
      2.75,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/865befa3-6305-49f8-8c53-ce1908fef3a3-retina-large-jpeg",
      "non-veg",
      "Latin American, Tapas/Small Plates",
      10
    );
  } catch (e) {
    console.log(e);
  }
  console.log("Done seeding the Database");

  await dbConnection.closeConnection();
}

main();
