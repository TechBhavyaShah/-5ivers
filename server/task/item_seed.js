const dbConnection = require("../config/mongoConnection");
const data = require("../data");
const restaurantData = data.restaurants;
const mongoCollections = require("../config/mongoCollections");
const restaurants = mongoCollections.restaurants;
const ObjectId = require("mongodb").ObjectId;

async function main() {
  const db = await dbConnection.connectToDb();

  let restCollection = await restaurantData.getAllRestaurants();
  // console.log(restCollection);

  //   await db.dropDatabase();

  try {
    let rest1Item1 = await restaurantData.addItemToRestaurant(
      restCollection[0]._id,
      "Cubano Sandwich",
      "Traditional cuban pressed sandwich pork ham swiss cheese pickle and mojo.",
      10.95,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/0e28000f-311c-4f91-be1a-d9a6c0fe21e6-retina-large-jpeg",
      "non-veg",
      "Latin American, Tapas/Small Plates",
      10
    );
    let rest1Item2 = await restaurantData.addItemToRestaurant(
      restCollection[0]._id,
      "Pernil",
      "Roast Pork.",
      15.95,
      "",
      "non-veg",
      "Latin American, Tapas/Small Plates",
      10
    );
    let rest1Item3 = await restaurantData.addItemToRestaurant(
      restCollection[0]._id,
      "Pollo a La Plancha",
      "Pollo a La Plancha Grilled chicken breast. served with 2 sides.",
      14.95,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/ac8c11fa-f783-4934-a1e7-dc894a54ba8c-retina-large-jpeg",
      "non-veg",
      "Latin American, Tapas/Small Plates",
      10
    );
    let rest1Item4 = await restaurantData.addItemToRestaurant(
      restCollection[0]._id,
      "Pollo Empanizado",
      "Breaded chicken breast. served with 2 sides.",
      15.95,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/480cc6d0-be86-4a61-81a2-14cde233fa85-retina-large-jpeg",
      "non-veg",
      "Latin American, Tapas/Small Plates",
      10
    );
    let rest1Item5 = await restaurantData.addItemToRestaurant(
      restCollection[0]._id,
      "Rabo Encendido",
      "Oxtail in Sauce.",
      17.95,
      "",
      "non-veg",
      "Latin American, Tapas/Small Plates",
      10
    );
    let rest1Item6 = await restaurantData.addItemToRestaurant(
      restCollection[0]._id,
      "Tostones",
      "Fried green plantains.",
      4.95,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/2d4b5635-49c9-4de0-a444-0a90fb818b4e-retina-large-jpeg",
      "veg",
      "Latin American, Tapas/Small Plates",
      10
    );
    let rest1Item7 = await restaurantData.addItemToRestaurant(
      restCollection[0]._id,
      "Papa Frita",
      "French Fries.",
      4.95,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/6a270992-c98b-4f30-b49b-c9fa055719b3-retina-large-jpeg",
      "veg",
      "Latin American, Tapas/Small Plates",
      10
    );
    let rest1Item8 = await restaurantData.addItemToRestaurant(
      restCollection[0]._id,
      "Tres Leche",
      "Spanish three milk pound cake.",
      5.95,
      "",
      "veg",
      "Latin American, Tapas/Small Plates",
      10
    );
    let rest1Item9 = await restaurantData.addItemToRestaurant(
      restCollection[0]._id,
      "Pollo Asado",
      "Roasted Chicken.",
      14.95,
      "",
      "non-veg",
      "Latin American, Tapas/Small Plates",
      10
    );
    let rest1Item10 = await restaurantData.addItemToRestaurant(
      restCollection[0]._id,
      "Empanada De Carne",
      "",
      2.75,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/865befa3-6305-49f8-8c53-ce1908fef3a3-retina-large-jpeg",
      "non-veg",
      "Latin American, Tapas/Small Plates",
      10
    );
    let rest2Item1 = await restaurantData.addItemToRestaurant(
      restCollection[1]._id,
      "Platter",
      "",
      11.99,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/6b34b471-751e-42b2-b13a-ccc5a94e9e14-retina-large-jpeg",
      "veg",
      "Mexican",
      10
    );
    let rest2Item2 = await restaurantData.addItemToRestaurant(
      restCollection[1]._id,
      "Pita Sandwich",
      "",
      8.99,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/8ee114dd-a67d-47e8-88a1-181d3489ff54-retina-large-jpeg",
      "veg",
      "Mexican",
      10
    );
    let rest2Item3 = await restaurantData.addItemToRestaurant(
      restCollection[1]._id,
      "Quinoa Lentil Soup",
      "",
      3.95,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/bcb8bc78-bd55-464c-9648-44bdb101c14a-retina-large-jpeg",
      "non-veg",
      "Mexican",
      10
    );
    let rest2Item4 = await restaurantData.addItemToRestaurant(
      restCollection[1]._id,
      "Burrito / Wrap",
      "Turmeric Rice,Spinach,Walnut chorizo,BlackBeans and Yams,Cabbage",
      15.95,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/4a1c7929-a7e7-43da-be60-4b034215758b-retina-large-jpeg",
      "veg",
      "Mexican American",
      10
    );
    let rest2Item5 = await restaurantData.addItemToRestaurant(
      restCollection[1]._id,
      "Mexi-Hummus",
      "Our original hummus blended with cilantro, jalapeños, and fresh lime juice. Sidekick: Pita.",
      4.95,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/eb742cd2-ec08-4cb3-9090-11df9fa10a67-retina-large-jpeg",
      "veg",
      "Mexican",
      10
    );
    let rest2Item6 = await restaurantData.addItemToRestaurant(
      restCollection[1]._id,
      "Traditional Hummus",
      "Homemade style veganlicious hummus. Sidekick: Pita.",
      4.95,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/594b353c-842b-49bd-b70e-744225fa0a3b-retina-large-jpeg",
      "veg",
      "Mexican",
      10
    );
    let rest2Item7 = await restaurantData.addItemToRestaurant(
      restCollection[1]._id,
      "Falafel (5X) / Tahini",
      "Homemade style, vegan and gluten-free, ground chickpeas, sesame seeds, and herbs.",
      4.95,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/7e4ce807-c863-4b24-9ec7-575e379e5158-retina-large-jpeg",
      "vegan",
      "Mexican",
      10
    );
    let rest2Item8 = await restaurantData.addItemToRestaurant(
      restCollection[1]._id,
      "Basmati Rice",
      "",
      5.95,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/0822cdcf-6910-44ce-b8ed-cd6d8b1efdf3-retina-large-jpeg",
      "veg",
      "Indian,Mexican",
      10
    );
    let rest2Item9 = await restaurantData.addItemToRestaurant(
      restCollection[1]._id,
      "Banana Nut Bread Vegan Slice",
      "",
      3.99,
      "",
      "veg",
      "Mexican,American",
      10
    );
    let rest3Item1 = await restaurantData.addItemToRestaurant(
      restCollection[2]._id,
      "The Franklin Burger",
      "Burratta, chorizo, guacamole, and fries.",
      17.75,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/2435c4cc-940a-4921-983d-eca846574f0d-retina-large.JPEG",
      "non-veg",
      "American",
      10
    );
    let rest3Item2 = await restaurantData.addItemToRestaurant(
      restCollection[2]._id,
      "Hot Honey Bruschetta",
      "chorizo and ricotta",
      13.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/3e855047-d277-43bd-8f23-f71ea900bb22-retina-large.JPEG",
      "non-veg",
      "American",
      10
    );
    let rest3Item3 = await restaurantData.addItemToRestaurant(
      restCollection[2]._id,
      "Bread Pudding",
      "Vanilla gelato.",
      7.0,
      "",
      "veg",
      "",
      10
    );
    let rest3Item4 = await restaurantData.addItemToRestaurant(
      restCollection[2]._id,
      "Antipasto (For 2)",
      "Roasted peppers, grilled artichokes, mixed olives, prosciutto, trufa seca, picante sausage, roasted butternut squash.",
      15.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/17b156d2-f834-477a-ab40-26ba0774e7f9-retina-large.JPEG",
      "veg",
      "American",
      10
    );
    let rest3Item5 = await restaurantData.addItemToRestaurant(
      restCollection[2]._id,
      "Short Rib Ravioli",
      "Homemade raviolis filled with short rib, mushrooms, caramelized onions, and ricotta cheese over a butter demi glaze.",
      24.75,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/b2ac2bb8-4142-4bbe-a569-a362537eb0d7-retina-large.JPEG",
      "non-veg",
      "American",
      10
    );
    let rest3Item6 = await restaurantData.addItemToRestaurant(
      restCollection[2]._id,
      "Lamb Sugo Parpadelle",
      "Braised lamb, brussels sprouts, cherry tomatoes, and Pecorino Romano.",
      24.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/46e313da-a00c-4c32-ba0b-1190c1a6aa58-retina-large.JPEG",
      "non-veg",
      "",
      10
    );
    let rest3Item7 = await restaurantData.addItemToRestaurant(
      restCollection[2]._id,
      "Cavatelli Carbonara",
      "Lump crab, pancetta, peas, and Pecorino Romano.",
      22.75,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/7b01cfcf-0b25-413c-a302-17a18225004c-retina-large.JPEG",
      "non-veg",
      "",
      5
    );
    let rest3Item8 = await restaurantData.addItemToRestaurant(
      restCollection[2]._id,
      "Veal Chop Parmigiana",
      "fresh mozzarella, bucatini, marinara, fresh basil",
      29.0,
      "",
      "veg",
      "American",
      8
    );
    let rest3Item9 = await restaurantData.addItemToRestaurant(
      restCollection[2]._id,
      "Dulce de Leche Donuts",
      "Topped with dulce de leche",
      5.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/93d56ca0-89da-4faa-bbf8-e5bb76bd83f8-retina-large.JPEG",
      "non-veg",
      "American Dessert",
      10
    );
    let rest4Item1 = await restaurantData.addItemToRestaurant(
      restCollection[3]._id,
      "#13 The Original Italian",
      "Provolone, ham, prosciuttini, cappacuolo, salami, and pepperoni. Served Mike's Way with onions, lettuce, tomato, vinegar, oil, oregano, and salt.",
      13.05,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/928efde0-39b8-4bbd-8d2f-c6ba199f2faa-retina-large.jpg",
      "non-veg",
      "Sandwiches, Cheesesteaks",
      10
    );
    let rest4Item2 = await restaurantData.addItemToRestaurant(
      restCollection[3]._id,
      "Soda Bottle",
      "",
      3.85,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/1aefa4b4-3aaf-4b18-a88d-d084b24bb1ae-retina-large.jpg",
      "veg",
      "",
      2
    );
    let rest4Item3 = await restaurantData.addItemToRestaurant(
      restCollection[3]._id,
      "#7 Turkey and Provolone",
      "Provolone and raised without antibiotics turkey . Served Mike's Way with onions, lettuce, tomato, vinegar, oil, oregano, and salt.",
      11.5,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/ccfaa4ed-caa3-4d1d-b7bd-4330f3148d01-retina-large.jpg",
      "veg",
      "Sandwiches, Cheesesteaks",
      10
    );
    let rest4Item4 = await restaurantData.addItemToRestaurant(
      restCollection[3]._id,
      "#10 Tuna Fish",
      "Freshly made on premises. Served Mike's Way with onions, lettuce, tomato, vinegar, oil, oregano, and salt.",
      11.5,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/d59ec64b-418b-42cc-b83f-1c1089dbcb14-retina-large.JPG",
      "non-veg",
      "Sandwiches, Cheesesteaks",
      10
    );
    let rest4Item5 = await restaurantData.addItemToRestaurant(
      restCollection[3]._id,
      "#14 The Veggie",
      "Swiss, provolone, & green bell peppers..",
      11.5,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/1a95b138-bfea-462f-a507-26972d5a03bf-retina-large.jpg",
      "veg",
      "Sandwiches, Cheesesteaks",
      20
    );
    let rest4Item6 = await restaurantData.addItemToRestaurant(
      restCollection[3]._id,
      "#2 Jersey Shore's Favorite",
      "Provolone, ham and cappacuolo. Served Mike's Way with onions, lettuce, tomato, vinegar, oil, oregano, and salt.",
      11.5,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/4fcff1a5-3f3e-4b63-be90-ce435c4581c4-retina-large.jpg",
      "non-veg",
      "Sandwiches, Cheesesteaks",
      5
    );
    let rest4Item7 = await restaurantData.addItemToRestaurant(
      restCollection[3]._id,
      "#42 Chipotle Chicken Cheese Steak",
      "Grilled onions, peppers, white American cheese and chipotle mayo.",
      12.3,
      "",
      "veg",
      "Mexican, Sandwiches, Cheesesteaks",
      12
    );
    let rest4Item8 = await restaurantData.addItemToRestaurant(
      restCollection[3]._id,
      "#26 Bacon Ranch Chicken Cheese Steak",
      "Applewood smoked bacon, lettuce, tomato, white American cheese and ranch dressing.",
      13.05,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/403460a7-8e6e-423e-98e2-caceedd5d67c-retina-large.jpg",
      "non-veg",
      "American , Sandwiches, Cheesesteaks",
      10
    );
    let rest4Item9 = await restaurantData.addItemToRestaurant(
      restCollection[3]._id,
      "#11 Stickball Special",
      "Provolone, ham and salami. Served Mike's Way with onions, lettuce, tomato, vinegar, oil, oregano, and salt.",
      11.5,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/d91ff99a-aae6-48ec-8d02-4ced9226999d-retina-large.jpg",
      "non-veg",
      "Sandwiches, Cheesesteaks",
      10
    );
    let rest4Item10 = await restaurantData.addItemToRestaurant(
      restCollection[3]._id,
      "Brownie",
      "Gooey chocolate chip brownies.",
      3.3,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/9afb887b-a94f-4f99-ae05-887d909fcba4-retina-large.jpg",
      "non-veg",
      "",
      10
    );
    let rest5Item1 = await restaurantData.addItemToRestaurant(
      restCollection[4]._id,
      "Churrasquito",
      "Junior grilled skirt steak. Served with rice and beans or French fries.",
      10.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/592f0dc4-cc01-42e2-abd0-caab7da2ec2c-retina-large-jpeg",
      "non-veg",
      "Cuban",
      10
    );
    let rest5Item2 = await restaurantData.addItemToRestaurant(
      restCollection[4]._id,
      "Churrasco con Chimichurri",
      "Skirt steak grilled and served with chimichurri sauce, rice, and beans.",
      24,
      "https://hiplatina.com/wp-content/uploads/sites/2/2017/07/pistachio-churrasco.jpg",
      "non-veg",
      "Cuban",
      10
    );
    let rest5Item3 = await restaurantData.addItemToRestaurant(
      restCollection[4]._id,
      "Cubano",
      "Cuban sandwich served with roasted pork, ham, Swiss cheese, and pickle on Cuban bread.",
      8.0,
      "https://littlesunnykitchen.com/wp-content/uploads/2021/08/Cuban-Sandwich-2.jpg",
      "non-veg",
      "Cuban",
      10
    );
    let rest5Item4 = await restaurantData.addItemToRestaurant(
      restCollection[4]._id,
      "Yuquita Frita con Salsa de Cilantro",
      "Yucca fries with cilantro sauce.",
      5.0,
      "https://images-gmi-pmc.edge-generalmills.com/aab2dd3b-95ad-4f73-a2cf-d85f90f995f1.jpg",
      "veg",
      "Cuban",
      10
    );
    let rest5Item5 = await restaurantData.addItemToRestaurant(
      restCollection[4]._id,
      "Vaca Frita",
      "Pan-fried shredded beef, garlic, and red onions with a touch of fresh lime. Served with rice and beans.",
      15,
      "https://www.cook2eatwell.com/wp-content/uploads/2018/08/Vaca-Frita-Image-1.jpg",
      "non-veg",
      "Cuban",
      10
    );
    let rest5Item6 = await restaurantData.addItemToRestaurant(
      restCollection[4]._id,
      "Patatas Bravas",
      "Pan-fried potatoes drenched in a spicy tomato, and smoked paprika sauce.",
      6.0,
      "https://www.aspicyperspective.com/wp-content/uploads/2021/08/Crispy-Patatas-Bravas-Mexican-Potatoes-9.jpg",
      "veg",
      "Cuban",
      10
    );
    let rest6Item1 = await restaurantData.addItemToRestaurant(
      restCollection[5]._id,
      "Large Crunchy Fingers Basket (5 Pc)",
      "5 crunchy fingers with your choice of three sauces and either classic or cajun fries.",
      15.35,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/2bfaae3b-fede-47e6-be0a-33d4ae9224b0-retina-large.jpg",
      "veg",
      "French,Itallian",
      10
    );
    let rest6Item2 = await restaurantData.addItemToRestaurant(
      restCollection[5]._id,
      "Medium Crunchy Poppers Basket (12 Pc)",
      "12 chicken poppers with your choice of two sauces and either classic or cajun fries.",
      12.85,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/7eb688b7-d09d-427d-ae1a-72d2d542c976-retina-large.jpg",
      "non-veg",
      "French,Itallian",
      10
    );
    let rest6Item3 = await restaurantData.addItemToRestaurant(
      restCollection[5]._id,
      "Truffle Parm Fries",
      "3/8th' straight cut fries tossed in truffle salt and parmesan cheese, parsley",
      6.25,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/3c6512ef-e5de-4002-adb1-d63150b817d0-retina-large.jpg",
      "veg",
      "French,Itallian",
      10
    );
    let rest6Item4 = await restaurantData.addItemToRestaurant(
      restCollection[5]._id,
      "Spicy Chicken Sandwich",
      "Sticky's sauce, nashville numb, cumin, pickles and your choice of two fingers: crunchy, grilled or veggie in between a potato bun. Add classic or cajun fries to make it a basket.",
      9.45,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/d4547933-a29c-46c8-ae76-4d050812df09-retina-large.jpg",
      "non-veg",
      "French,Itallian",
      10
    );

    let rest7Item1 = await restaurantData.addItemToRestaurant(
      restCollection[6]._id,
      "The 40 Thieves Grill Mix",
      "Serves Two. Combination of grilled chicken, lamb kabob, beef gyro, and kufta kabob. Served with our garlic lemon sauce, rice, hummus and baba ganoush.",
      34.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/c4f119e5-f921-4d3b-96a0-50441e3ac3eb-retina-large.JPG",
      "non-veg",
      "Middle Eastern, Sandwiches",
      10
    );
    let rest7Item2 = await restaurantData.addItemToRestaurant(
      restCollection[6]._id,
      "Falafel",
      "Our signature sandwich comes loaded with hummus, tahini, chopped salad, and hot sauce.",
      10.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/79e5428d-bb12-467f-a6d9-0b051fb15d5a-retina-large-jpeg",
      "veg",
      "Middle Eastern, Sandwiches",
      10
    );
    let rest7Item3 = await restaurantData.addItemToRestaurant(
      restCollection[6]._id,
      "Vegetarian Grand Combo",
      "Serves 2-3. Includes falafel, hummus, grape leaves, tabbouleh, lebeneh and baba ganoush.",
      22.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/6b67f78c-7c4c-4eeb-8633-8c28d5903ec7-retina-large.JPG",
      "veg",
      "Middle Eastern, Sandwiches",
      10
    );
    let rest7Item4 = await restaurantData.addItemToRestaurant(
      restCollection[6]._id,
      "Beef Gyro",
      "A real crowd pleaser; our beef is sliced hot & fresh off the rotisserie.",
      17.5,
      "",
      "non-veg",
      "Middle Eastern, Sandwiches",
      10
    );
    let rest7Item5 = await restaurantData.addItemToRestaurant(
      restCollection[6]._id,
      "Spinach Pie",
      "Spiced spinach, sumac, and lemon baked in homemade dough.",
      2.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/59887913-f29d-405a-acca-199e854d9b28-retina-large-jpeg",
      "non-veg",
      "Middle Eastern, Sandwiches",
      10
    );
    let rest8Item1 = await restaurantData.addItemToRestaurant(
      restCollection[7]._id,
      "Chicken Fajita Burrito",
      "Grilled chicken and veggies .",
      4.99,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/785d5c43-ef7d-4a8b-8c52-e7f1b80b982d-retina-large.jpg",
      "non-veg",
      "Mexican, Burritos",
      10
    );
    let rest8Item2 = await restaurantData.addItemToRestaurant(
      restCollection[7]._id,
      "Nachos Supreme",
      "Tortilla Chips, topped with cheese, pico de gallo, retried beans, sour cream and choice of meat or soy chicken or soy beef or soy chorizo. ( soy sour cream and soy cheese only available upon request )",
      6.99,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/daa70335-941b-47ff-9e05-a71bd8687608-retina-large.jpg",
      "non-veg",
      "Mexican, Burritos",
      10
    );
    let rest8Item3 = await restaurantData.addItemToRestaurant(
      restCollection[7]._id,
      "Steak Fajita Burrito",
      "Grilled steak with mix veggie.",
      5.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/fccf823b-6663-4439-b7ab-3d4721b9f549-retina-large-jpeg",
      "non-veg",
      "Mexican, Burritos",
      10
    );
    let rest8Item4 = await restaurantData.addItemToRestaurant(
      restCollection[7]._id,
      "Picadillo Beef",
      "Peppery ground beef.",
      6.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/6c591aaa-a027-4d39-8937-3f5a93990067-retina-large.jpg",
      "non-veg",
      "Mexican, Burritos",
      10
    );
    let rest9Item1 = await restaurantData.addItemToRestaurant(
      restCollection[8]._id,
      "Pechuga de Pollo a La Uruguaya",
      "Breaded chicken breast with ham and melted Mozzarella cheese.",
      5.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/41a71a00-3ae2-4d86-b03b-258c14fb97d7-retina-large.jpg",
      "non-veg",
      "Latin American, Sandwiches",
      10
    );
    let rest9Item2 = await restaurantData.addItemToRestaurant(
      restCollection[8]._id,
      "Sopa de Pollo",
      "Chicken soup.",
      1.99,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/f898b2e8-c4da-4a20-b21b-99a257d64319-retina-large.JPG",
      "non-veg",
      "Latin American, Sandwiches",
      10
    );
    let rest9Item3 = await restaurantData.addItemToRestaurant(
      restCollection[8]._id,
      "Sandwich Cubano",
      "Cuban sandwich.",
      2.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/c105f12a-81da-4b62-87be-e41459fb2ed2-retina-large.JPG",
      "non-veg",
      "Cuban, Latin American, Sandwiches",
      10
    );
    let rest9Item4 = await restaurantData.addItemToRestaurant(
      restCollection[8]._id,
      "Bistec de Palomilla",
      "Cuban style steak.",
      6.99,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/3d355af9-8f60-4b4b-b2b2-758482d65a0c-retina-large.jpg",
      "non-veg",
      "Latin American, Sandwiches",
      10
    );
    let rest10Item1 = await restaurantData.addItemToRestaurant(
      restCollection[9]._id,
      "Smoked Salmon Club",
      "Dill creme and avocado.",
      10.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/5c05025d-5281-4490-9d0f-0f40291ae0d8-retina-large-jpeg",
      "veg",
      "Cafe, Sandwiches",
      10
    );
    let rest10Item2 = await restaurantData.addItemToRestaurant(
      restCollection[9]._id,
      "Lobster Roll",
      "Shallots, celery, herbs, arugula salad, and pommes frites.",
      12.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/ee9477f9-9e95-453d-9828-55fb2fd793de-retina-large.JPG",
      "non-veg",
      "Cafe, Sandwiches",
      15
    );
    let rest10Item3 = await restaurantData.addItemToRestaurant(
      restCollection[9]._id,
      "Homemade Potato Gnocchi",
      "Bolognese sauce and shaved parmesan.",
      12.99,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/296504ab-b6b6-41ef-932f-0ff97db1f2e0-retina-large-jpeg",
      "non-veg",
      "Cafe, Sandwiches",
      5
    );
    let rest10Item4 = await restaurantData.addItemToRestaurant(
      restCollection[9]._id,
      "Crisp Calamari Salad",
      "Nicoise, olives, tomatoes, pepperoncini, and arugula.",
      6.0,
      "",
      "veg",
      "Cafe, Sandwiches",
      10
    );
    let rest11Item1 = await restaurantData.addItemToRestaurant(
      restCollection[10]._id,
      "Cheeseburger",
      "Most popular. 5 oz patty. American cheese, grilled onions, pickles, lettuce, tomato and moo special sauce on a roll. All burgers cooked medium unless requested otherwise. Option to order Nature's Own farm grass-fed beef.",
      5.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/e489e168-0577-4f9c-bdff-f30280bfdf7f-retina-large-jpeg",
      "non-veg",
      "American, Burgers",
      10
    );
    let rest11Item2 = await restaurantData.addItemToRestaurant(
      restCollection[10]._id,
      "Empanadas by Empanada Guy",
      "Empanadas by the empanada guru! Based in Freehold, NJ. Empanada Guy - like us - started out small doing pop-ups before graduating to a food truck and now has a fleet of trucks and brick and mortar locations. Visit any food truck festival and look for the long lines!",
      2.5,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/c80d8873-35e5-4ee7-b78a-88f8dad5f9a8-retina-large-jpeg",
      "non-veg",
      "American, Burgers",
      10
    );
    let rest11Item3 = await restaurantData.addItemToRestaurant(
      restCollection[10]._id,
      "Fries",
      "",
      2.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/c1a8aeef-aac6-4431-9be0-9d97d88cc70d-retina-large-jpeg",
      "non-veg",
      "American, Burgers",
      10
    );
    let rest11Item4 = await restaurantData.addItemToRestaurant(
      restCollection[10]._id,
      "Chicken Wings (8)",
      "NEW and improved. We now only use fresh organic wings, breaded in our own seasoned flour blend. Twice fried, juicier and crisper than ever. Now available in 5 or 8 wings. Choose from Cajun or jerk dry rubs or tossed in our Buffalo, FIRE, Samurai, honey BBQ, chipotle ranch or peach-habanero sauces. Blue cheese or ranch dip. DUE TO A SPIKE IN CHICKEN PRICES WE HAVE TO TEMPORARILY RAISE OUR PRICES, APOLOGIES FOR THE INCONVENIENCE. WE HOPE TO REVERT SOON.",
      7.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/ea9e0d18-e5c8-4d97-b334-a8f87c807d9d-retina-large-jpeg",
      "non-veg",
      "American, Burgers",
      10
    );
    let rest11Item5 = await restaurantData.addItemToRestaurant(
      restCollection[10]._id,
      "Chipotle Cheeseburger",
      "Pepper jack cheese, Pico de Gallo, jalapeños, lettuce and chipotle mayo on a potato roll. All burgers cooked medium unless requested otherwise. Option to order Nature's Own farm grass-fed beef.",
      4.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/17eecf51-133f-4011-84bb-e02bb9b2c0ff-retina-large-jpeg",
      "non-veg",
      "American, Burgers",
      5
    );
    let rest11Item6 = await restaurantData.addItemToRestaurant(
      restCollection[10]._id,
      "Mac 'n Cheese",
      "",
      2.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/7fa426be-1a8a-4211-8061-4ef10cb83a5b-retina-large-jpeg",
      "veg",
      "American, Burgers, Mexican",
      10
    );
    let rest12Item1 = await restaurantData.addItemToRestaurant(
      restCollection[11]._id,
      "Chicken Over Rice with Soda",
      "",
      5.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/abad4e3a-cb44-4ed2-8403-8b95d692c109-retina-large-jpeg",
      "non-veg",
      "Middle Eastern, Turkish",
      10
    );
    let rest12Item2 = await restaurantData.addItemToRestaurant(
      restCollection[11]._id,
      "Lamb & Chicken Over Rice with Soda",
      "",
      5.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/2d9a027b-7d2f-4c98-82e4-52b04e42f1d2-retina-large-jpeg",
      "non-veg",
      "Middle Eastern, Turkish",
      10
    );
    let rest12Item3 = await restaurantData.addItemToRestaurant(
      restCollection[11]._id,
      "Lamb Over Rice with Soda",
      "",
      4.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/b9d58ba2-5342-42a6-a55c-aafecfc6ad98-retina-large-jpeg",
      "non-veg",
      "Middle Eastern, Turkish",
      10
    );
    let rest12Item4 = await restaurantData.addItemToRestaurant(
      restCollection[11]._id,
      "Falafel Over Rice with Soda",
      "",
      4.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/a18a6874-f06e-4392-a47c-4a3558b82fcf-retina-large-jpeg",
      "veg",
      "Middle Eastern, Turkish",
      10
    );
    let rest12Item5 = await restaurantData.addItemToRestaurant(
      restCollection[11]._id,
      "Chicken Gyro with Soda",
      "",
      4.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/576007a8-d214-48bc-8b4f-1f58069ab532-retina-large-jpeg",
      "non-veg",
      "Middle Eastern, Turkish",
      10
    );
    let rest13Item1 = await restaurantData.addItemToRestaurant(
      restCollection[12]._id,
      "Gnocchi Pomodoro",
      "House made potato gnocchi, tomato sauce.",
      10.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/3f267ecb-9b23-4e92-9e5a-51b822996dd8-retina-large-jpeg",
      "veg",
      "American, Brunch",
      10
    );
    let rest13Item2 = await restaurantData.addItemToRestaurant(
      restCollection[12]._id,
      "House Made Argentinian Empanadas (3)",
      "Served with chimichurri.",
      7.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/42871914-365a-4885-be0c-139f2886189e-retina-large-jpeg",
      "veg",
      "American, Brunch",
      10
    );
    let rest13Item3 = await restaurantData.addItemToRestaurant(
      restCollection[12]._id,
      "Chicken Cutlet Napolitana",
      "Tomato sauce, prosciutto, mozzarella, and penne pasta.",
      12.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/5c40ba04-3695-472c-ad4c-4cac8861f391-retina-large-jpeg",
      "non-veg",
      "American, Brunch",
      10
    );
    let rest13Item4 = await restaurantData.addItemToRestaurant(
      restCollection[12]._id,
      "Sirloin Steak",
      "Chimichurri. 12 oz",
      10.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/48792c47-21f6-40a0-8926-734067cc7dac-retina-large-jpeg",
      "non-veg",
      "American, Brunch",
      10
    );
    let rest13Item5 = await restaurantData.addItemToRestaurant(
      restCollection[12]._id,
      "Dulce De Leche Pie",
      "",
      2.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/d1c3aa48-914a-4667-8852-8fc8c1000c3f-retina-large-jpeg",
      "non-veg",
      "American, Brunch",
      10
    );
    let rest14Item1 = await restaurantData.addItemToRestaurant(
      restCollection[13]._id,
      "Lamb Birria Tacos",
      "Lamb Birria = Lamb meat stew.- Slow cooked lamb meat stew meat. - Small side of consomme. Choice of tortilla style, cucumber, radish, lime. 3 Per Order.",
      6.0,
      "https://vikalinka.com/wp-content/uploads/2017/10/lamb-birria-tacos-8-Edit.jpg",
      "non-veg",
      "Mexican",
      10
    );
    let rest14Item2 = await restaurantData.addItemToRestaurant(
      restCollection[13]._id,
      "Grilled Chicken Tacos",
      "Grilled Chicken, Choice of tortilla style, cucumber, radish, lime. 3 Per order.",
      5.75,
      "https://www.cookingclassy.com/wp-content/uploads/2016/03/grilled_chicken_tacos_cilantro_lime_ranch9.-500x500.jpg",
      "non-veg",
      "Mexican",
      10
    );
    let rest14Item3 = await restaurantData.addItemToRestaurant(
      restCollection[13]._id,
      "Guacamole and Chips",
      "",
      5.0,
      "https://www.seriouseats.com/thmb/6hf1AabQr5C4wJ9VwBgaoZviZdo=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2012__01__20210318_BasicGuacamole_LizClayman-9-96a19c7b8d6243709b27a44ec65f283b.jpg",
      "non-veg",
      "Mexican",
      10
    );
    let rest15Item1 = await restaurantData.addItemToRestaurant(
      restCollection[14]._id,
      "Truffle Honey Fig Pizza",
      '12" pizza topped with ricotta, fontina, black mission figs, arugula, truffle honey, white balsamic',
      10.0,
      "https://www.caligirlcooking.com/wp-content/uploads/2016/06/Fresh-Fig-Prosciutto-and-Burrata-Pizza-40.jpg",
      "non-veg",
      "Italian,Pizza,Sandwitches",
      10
    );
    let rest15Item2 = await restaurantData.addItemToRestaurant(
      restCollection[14]._id,
      "Lobster Ravioli.",
      "Lobster Ravioli served in our Vodka Sauce",
      10.0,
      "https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/margherita-pizza-4.jpg",
      "non-veg",
      "Italian,Pizza,Sandwitches",
      10
    );
    let rest15Item3 = await restaurantData.addItemToRestaurant(
      restCollection[14]._id,
      "Chilean Sea Bass",
      "Broiled Chilean seabass served over spinach in a lemon butter sauce",
      20.0,
      "",
      "non-veg",
      "Italian,Pizza,Sandwitches",
      10
    );

    let rest16Item1 = await restaurantData.addItemToRestaurant(
      restCollection[15]._id,
      "Chicken over Rice",
      "",
      4.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/122b9747-e97c-4eb8-9111-a0daba9b4634-retina-large-jpeg",
      "non-veg",
      "Halal, Chicken",
      10
    );

    let rest16Item2 = await restaurantData.addItemToRestaurant(
      restCollection[15]._id,
      "Chicken & Lamb over Rice",
      "",
      5.0,
      "https://addysexpressjamaica.com/wp-content/uploads/2020/09/combo_rice_x_2048x2048.jpg",
      "non-veg",
      "Halal, Chicken",
      10
    );

    let rest16Item3 = await restaurantData.addItemToRestaurant(
      restCollection[15]._id,
      "Lamb over Rice",
      "",
      4.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/b8db7428-7ba4-4d5c-a26c-826042984722-retina-large-jpeg",
      "non-veg",
      "Halal, Chicken",
      10
    );

    let rest17Item1 = await restaurantData.addItemToRestaurant(
      restCollection[16]._id,
      "Empanada Choice",
      "",
      5.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/55ec1199-bbbc-4b72-98f9-faed721943cb-retina-large.JPG",
      "non-veg",
      "Bevrages,cookies,coffee",
      10
    );

    let rest17Item2 = await restaurantData.addItemToRestaurant(
      restCollection[16]._id,
      "Latte",
      "",
      1.0,
      "https://coffeeaffection.com/wp-content/uploads/2021/05/Spanish-latte-milk-and-espresso-500x500.jpg",
      "veg",
      "Bevrages,cookies,coffee",
      10
    );

    let rest17Item3 = await restaurantData.addItemToRestaurant(
      restCollection[16]._id,
      "American Coffee",
      "",
      1.0,
      "https://pontevecchiosrl.it/wp-content/uploads/2021/03/caffe-americano-in-casa.jpg",
      "non-veg",
      "Bevrages,cookies,coffee",
      10
    );

    let rest17Item4 = await restaurantData.addItemToRestaurant(
      restCollection[16]._id,
      "Espresso",
      "",
      1.0,
      "https://www.dailygrind.com/wp-content/uploads/2018/11/espresso-1.jpg",
      "non-veg",
      "Bevrages,cookies,coffee",
      10
    );

    let rest18Item1 = await restaurantData.addItemToRestaurant(
      restCollection[17]._id,
      "Chicken Kebob Plate",
      "Marinated cubes of chicken breast, skewered and grilled; served over a choice of salad or seasoned rice (or both for addt'l charge) and tahineh sauce, with a pita bread on the side",
      6.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/02326c21-9a5e-4b0c-a210-1e2962aca919-retina-large.jpg",
      "non-veg",
      "Mediterranean",
      10
    );
    let rest18Item2 = await restaurantData.addItemToRestaurant(
      restCollection[17]._id,
      "Falafel Plate (vegetarian)",
      "Finely ground chickpeas, onions, parsley, garlic, and spices, deep-fried; served over a choice of salad or seasoned rice (or both for addt'l charge) and tahineh sauce, with a pita bread on the side",
      4.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/f2092c91-3bbc-479c-a752-e8e8904cfa0e-retina-large.jpg",
      "veg",
      "Mediterranean",
      10
    );
    let rest18Item3 = await restaurantData.addItemToRestaurant(
      restCollection[17]._id,
      "Shawarma Plate (lamb)",
      "100% lamb made with our signature spices, cooked slowly on a stand-up rotisserie; served over a choice of salad or seasoned rice (or both for addt'l charge) and tahineh sauce, with a pita bread on the side",
      7.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/7812dbb2-fed8-4c28-add2-ce44250b45e7-retina-large.jpg",
      "non-veg",
      "Mediterranean",
      10
    );
    let rest18Item4 = await restaurantData.addItemToRestaurant(
      restCollection[17]._id,
      "Falafel Side",
      "4 balls with tahineh sauce on the side",
      1.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/673e7af8-0a23-422f-a669-c920ad6adc7d-retina-large.jpg",
      "veg",
      "Mediterranean",
      10
    );
    let rest18Item5 = await restaurantData.addItemToRestaurant(
      restCollection[17]._id,
      "Chicken Kebob Sandwich",
      "Marinated cubes of chicken breast, skewered and grilled; served in a pita pocket with lettuce, tomatoes, onions, and tahineh sauce",
      5.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/f2ddc4bf-11c3-4c19-b400-6cb999da4e6f-retina-large.jpg",
      "non-veg",
      "Mediterranean",
      10
    );
    let rest19Item1 = await restaurantData.addItemToRestaurant(
      restCollection[18]._id,
      "Pollo Flautas",
      "3 pieces. Shredded chicken in chipotle sauce.",
      4.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/1b20bfab-3ee7-4331-a0ee-212e48b22d5b-retina-large.jpg",
      "non-veg",
      "Mexican,soup American",
      10
    );
    let rest19Item2 = await restaurantData.addItemToRestaurant(
      restCollection[18]._id,
      "Pollo Enchiladas",
      "Chicken.",
      4.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/82a4ea02-35c7-4ba6-b7c7-6701d6b3f161-retina-large.jpg",
      "non-veg",
      "Mexican,soup American",
      10
    );
    let rest19Item3 = await restaurantData.addItemToRestaurant(
      restCollection[18]._id,
      "Rancheros Deluxe",
      "2 eggs over easy on a corn homemade tortilla topped with ranchera sauce, served with black beans, homemade potatoes, chorizo, onions and poblano peppers.",
      5.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/2677a6e9-a61e-41cb-b5a6-7e1bf708f87f-retina-large.jpg",
      "non-veg",
      "Mexican,soup American",
      10
    );
    let rest19Item4 = await restaurantData.addItemToRestaurant(
      restCollection[18]._id,
      "Kid's Mini Quesadilla Pollo y Papas Fritas",
      "Mini chicken quesadilla and cheese with french fries.",
      2.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/0bd9ef25-25e5-4849-927b-925765a83d55-retina-large.jpg",
      "non-veg",
      "Mexican,soup American",
      10
    );
    let rest20Item1 = await restaurantData.addItemToRestaurant(
      restCollection[19]._id,
      "Breakfast Bowl",
      "house-made home fries, Taylor ham, monetary jack cheese, 2 fried eggs, avocado, & a house-made buffalo sauce.",
      9.0,
      "https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Breakfast-Bowls-with-Fruits-and-Seeds-Toppings.png",
      "non-veg",
      "American,Mexican,Itallian",
      10
    );
    let rest20Item2 = await restaurantData.addItemToRestaurant(
      restCollection[19]._id,
      "Buffalo Cauliflower Appetizer",
      "Our battered cauliflower (not gluten free) tossed in our house-made buffalo sauce (contains dairy) served with a size of our house-made lime bleu cheese sauce.",
      5.0,
      "https://www.forkinthekitchen.com/wp-content/uploads/2021/01/210118.buffalo.cauliflower.bites-1452-15.jpg",
      "non-veg",
      "American,Mexican,Itallian",
      10
    );
    let rest20Item3 = await restaurantData.addItemToRestaurant(
      restCollection[19]._id,
      "Avocado Egg Rolls",
      "house-made avocado egg rolls served with our Spicy Shaka sauce.",
      5.0,
      "https://secretcopycatrestaurantrecipes.com/wp-content/uploads/2014/04/Cheesecake-Factory-Avocado-Egg-Rolls-Recipe.jpg",
      "non-veg",
      "American,Mexican,Itallian",
      10
    );
    let rest20Item4 = await restaurantData.addItemToRestaurant(
      restCollection[19]._id,
      "Pulled Pork Sliders",
      "(3) King Hawaiian Rolls, Kalua Pulled Pork, bread and butter pickle, cheddar cheese, crispy jalapeno, & a house-made mayo-que. No alterations, please",
      0.0,
      "https://recipes.instantpot.com/wp-content/uploads/2019/11/INSTANT-POT-Southern-Barbecue-Pulled-Pork-Sliders-1024x576.jpg",
      "non-veg",
      "American,Mexican,Itallian",
      3
    );
    let rest20Item5 = await restaurantData.addItemToRestaurant(
      restCollection[19]._id,
      "Brunch Tacos",
      "",
      4.0,
      "https://www.macheesmo.com/wp-content/uploads/2019/01/Quick-Breakfast-Tacos.jpg",
      "non-veg",
      "American,Mexican,Itallian",
      10
    );
    let rest21Item1 = await restaurantData.addItemToRestaurant(
      restCollection[20]._id,
      "Handmade Pasta",
      "Chicken bolognese, ricotta.",
      10.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/643eb6e6-ca02-4ca6-a721-39941da28f1f-retina-large.jpg",
      "non-veg",
      "Bar and grill,Mexican,Italian,American,Latin",
      10
    );
    let rest21Item2 = await restaurantData.addItemToRestaurant(
      restCollection[20]._id,
      "Fried Chicken Naan Sandwich",
      "Arugula, Street Corn, Cheddar Sauce",
      10.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/fd574402-dadd-493b-ada4-d73008447054-retina-large-jpeg",
      "non-veg",
      "Bar and grill,Mexican,Italian,American,Latin",
      10
    );
    let rest21Item3 = await restaurantData.addItemToRestaurant(
      restCollection[20]._id,
      "Cauliflower Wings",
      "Honey ginger, Valentina",
      10.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/3a278489-ab89-49e7-9227-52a7b496669b-retina-large-jpeg",
      "non-veg",
      "Bar and grill,Mexican,Italian,American,Latin",
      10
    );
    let rest21Item4 = await restaurantData.addItemToRestaurant(
      restCollection[20]._id,
      "Warm Apple Cake",
      "Oats, Bourbon Caramel",
      3.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/c54e1c88-1b26-448b-ae2f-ecc62d0f5b8d-retina-large-jpeg",
      "non-veg",
      "Bar and grill,Mexican,Italian,American,Latin",
      10
    );
    let rest22Item1 = await restaurantData.addItemToRestaurant(
      restCollection[21]._id,
      "Ribs Rack (Half)",
      "#1 in NJ, highly rated, the most-ordered item; Premium large Pork Ribs served with signature honey hickory sauce.",
      7.0,
      "https://ascater.com/wp-content/uploads/2013/05/ribs-half-rack.jpg",
      "non-veg",
      "Mexican,Seafood",
      10
    );

    let rest22Item2 = await restaurantData.addItemToRestaurant(
      restCollection[21]._id,
      "Tasty Sandwiches",
      "Choose - Fresh Grilled Chicken, Fried Chicken, Beef Brisket, Pulled Pork, Burger ..with Fries",
      5.0,
      "https://blog.myfitnesspal.com/wp-content/uploads/2019/10/9-Tasty-Ways-to-Make-Healthy-Sandwiches-Exciting.jpg",
      "non-veg",
      "Mexican,Seafood",
      10
    );

    let rest22Item3 = await restaurantData.addItemToRestaurant(
      restCollection[21]._id,
      "Tenders, Wings, Fried Chicken",
      "Your choice of Fresh improved tasty Hand Breaded Premium Fried Chicken, Tenders, Wings",
      5.0,
      "",
      "non-veg",
      "Mexican,Seafood",
      10
    );

    let rest22Item4 = await restaurantData.addItemToRestaurant(
      restCollection[21]._id,
      "Heavenly Bowls",
      "🥳 Bowls - Ribs 🍖, Chicken 🐔, Steak, Fish 🐠, Shrimp",
      10.0,
      "https://mainsite-prod-cdn.azureedge.net/partner-images/394177/micrositeimage_photo1.jpg",
      "non-veg",
      "Mexican,Seafood",
      10
    );

    let rest23Item1 = await restaurantData.addItemToRestaurant(
      restCollection[22]._id,
      "Boneless Chicken Tikka Masala",
      "Boneless chicken with yellow tomato sauce, tomato puree with desi herbs.",
      5.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/cd05e49d-e374-4fa4-9c29-df3b78209a35-retina-large.jpg",
      "non-veg",
      "Indian, Tandoori",
      10
    );
    let rest23Item2 = await restaurantData.addItemToRestaurant(
      restCollection[22]._id,
      "Vegetable Samosa (2 Pc)",
      "Crisp triangle patties filled with m y spiced potato and green peas.",
      2.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/fec8daa1-0ede-4f03-9b1d-15057b8e3b7e-retina-large.jpg",
      "veg",
      "Indian, Tandoori",
      10
    );
    let rest23Item3 = await restaurantData.addItemToRestaurant(
      restCollection[22]._id,
      "Kaju Curry",
      "Fresh milk, cottage cheese cooked in tomato sauce, sour cream and special desi spices.",
      5.0,
      "",
      "veg",
      "Indian, Tandoori",
      10
    );
    let rest23Item4 = await restaurantData.addItemToRestaurant(
      restCollection[22]._id,
      "Tandoori Chicken Tikka",
      "Chicken breast cubes dipped in lemon juice garlic sauce and desi spices.",
      10.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/d8b38d5e-9b65-4bab-bf35-1233a74c0283-retina-large.jpg",
      "non-veg",
      "Indian, Tandoori",
      10
    );
    let rest23Item5 = await restaurantData.addItemToRestaurant(
      restCollection[22]._id,
      "Paneer Makhani",
      "Fresh milk, cotage cheese cooked in tomato sauce, sour cream with special desi spices.",
      5.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/854e27ea-db42-43ef-8778-95536dfff56c-retina-large.JPG",
      "veg",
      "Indian, Tandoori",
      10
    );
    let rest23Item6 = await restaurantData.addItemToRestaurant(
      restCollection[22]._id,
      "Palak Panneer",
      "Fresh spinach and homemade cubed cottage sheese cooked in creamy sause and spices.",
      5.0,
      "",
      "veg",
      "Indian, Tandoori",
      10
    );
    let rest23Item7 = await restaurantData.addItemToRestaurant(
      restCollection[22]._id,
      "Tandoori Chicken Tikka",
      "Chicken breast cubes dipped in lemon juice garlic sauce and desi spices.",
      5.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/d8b38d5e-9b65-4bab-bf35-1233a74c0283-retina-large.jpg",
      "non-veg",
      "Indian, Tandoori",
      10
    );
    let rest23Item8 = await restaurantData.addItemToRestaurant(
      restCollection[22]._id,
      "Paneer Bhurji",
      "Chopped onions, cumin seeds, crushed pepers, grated paneer and Indian spices.",
      5.0,
      "",
      "veg",
      "Indian, Tandoori",
      10
    );
    let rest24Item1 = await restaurantData.addItemToRestaurant(
      restCollection[23]._id,
      "Cauliflower Bites",
      "",
      5.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/2459d372-dff3-49d3-b97a-a647104c0a6b-01085780-acad-46f2-b67e-534d4d9e406e-retina-large.JPG",
      "non-veg",
      "Beer, Alcohol",
      10
    );
    let rest24Item2 = await restaurantData.addItemToRestaurant(
      restCollection[23]._id,
      "NoSo Burger",
      "",
      6.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/8026008a-a32b-4b60-b1e3-66fe2cb4d6e6-5c98e539-22db-4000-9c1c-35347dea7f14-retina-large.JPG",
      "non-veg",
      "Beer, Alcohol",
      10
    );
    let rest24Item3 = await restaurantData.addItemToRestaurant(
      restCollection[23]._id,
      "Buttermilk Chicken Sandwich",
      "",
      10.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/8d324640-8e9b-4b13-83c2-e09d73504053-3ef508f4-888f-4c3a-ad2c-33bde8010b22-retina-large.JPG",
      "non-veg",
      "",
      10
    );
    let rest24Item4 = await restaurantData.addItemToRestaurant(
      restCollection[23]._id,
      "Impossible Burger",
      "",
      3.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/15d6e93b-c5a7-4478-a62d-6b147af8d867-3bb62cab-a64a-460e-a369-b4dae018ed96-retina-large.JPG",
      "non-veg",
      "",
      10
    );
    let rest25Item1 = await restaurantData.addItemToRestaurant(
      restCollection[24]._id,
      "Garlic Knots",
      "5 pieces.",
      2.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/aee3bf70-9ade-48f9-98ea-2192c4d1d883-retina-large.JPEG",
      "veg",
      "Italian, Pizza, Salads",
      10
    );
    let rest25Item2 = await restaurantData.addItemToRestaurant(
      restCollection[24]._id,
      "Italian Mozzarella Sticks",
      "",
      5.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/87001efd-f87b-4882-90f9-ded1eba87333-retina-large.JPEG",
      "veg",
      "Italian, Pizza, Salads",
      10
    );
    let rest25Item3 = await restaurantData.addItemToRestaurant(
      restCollection[24]._id,
      "Buffalo Spicy Wings",
      "This wings are made with spicy buffalo sauce,.Each order 10 pcs. comes with 1 dipping sauce.",
      6.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/b41d8026-790f-453f-90ca-0b6e717988e5-retina-large-jpeg",
      "non-veg",
      "Italian, Pizza, Salads",
      10
    );
    let rest25Item4 = await restaurantData.addItemToRestaurant(
      restCollection[24]._id,
      'Margherita Pizza | 16" Pizza',
      "Fresh Mozzarella. tomatoes, fresh garlic, Grana Padano, drizzled extra virgin olive oil. No half and half, no substitutions.",
      10.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/6c70fb7c-54ca-4ff1-b802-680edd3f0330-retina-large-jpeg",
      "veg",
      "Italian, Pizza, Salads",
      10
    );
    let rest25Item5 = await restaurantData.addItemToRestaurant(
      restCollection[24]._id,
      "Vodka Sauce with Pasta",
      "Creamy pink sauce. Linguine, penne, Rigatoni, angel hair or Fettuccine",
      7.0,
      "",
      "non-veg",
      "Italian, Pizza, Salads",
      10
    );
    let rest25Item6 = await restaurantData.addItemToRestaurant(
      restCollection[24]._id,
      "Garlicy Cheese Curd",
      "White Cheddar CheeseCurds.Lightlyhand breadedcrumbs fresh garlic and parsley.",
      4.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/43fbcb19-d594-441d-9d14-11270680f926-retina-large.JPG",
      "non-veg",
      "Italian, Pizza, Salads",
      10
    );
    let rest26Item1 = await restaurantData.addItemToRestaurant(
      restCollection[25]._id,
      "Build Your Own Burger",
      "Please note: burger does not come with fries.",
      5.0,
      "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg",
      "non-veg",
      "Itallian, Pizza,Drinks,BBQ",
      10
    );
    let rest26Item2 = await restaurantData.addItemToRestaurant(
      restCollection[25]._id,
      "Bacon-Chicken-Ranch Wrap",
      "Grilled or crispy chicken in a wrap with shredded lettuce, tomato, onion, pepper-jack cheese, crispy bacon and ranch dressing. Please note: wrap does not come with fries",
      6.0,
      "https://easywraprecipes.com/wp-content/uploads/2019/12/chipotle-chicken-bacon-ranch-wrap-4-720x720.jpg",
      "non-veg",
      "Itallian, Pizza,Drinks,BBQ",
      10
    );
    let rest26Item4 = await restaurantData.addItemToRestaurant(
      restCollection[25]._id,
      "Chicken Wings",
      "Choice of sauce-BBQ, buffalo, cajun dry rub, honey mustard, sweet and spicy, teriyaki, or xxx.",
      10.0,
      "",
      "non-veg",
      "Itallian, Pizza,Drinks,BBQ",
      10
    );
    let rest26Item3 = await restaurantData.addItemToRestaurant(
      restCollection[25]._id,
      "Smoke House Burger",
      "Bacon, smoked onions, cheddar cheese, BBQ sauce, and spicy aioli. Please note: burger does not come with fries.",
      6.0,
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/07/29/DVSP133_The-Smokehouse-Burger_s4x3.jpg.rend.hgtvcom.616.462.suffix/1627579580289.jpeg",
      "non-veg",
      "Itallian, Pizza,Drinks,BBQ",
      10
    );
    let rest27Item1 = await restaurantData.addItemToRestaurant(
      restCollection[26]._id,
      "Crunchy Rice Cakes",
      "Spicy tuna tartare, sweet soy, spicy mayo, wasabi tobiko.",
      10.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/8fe036d2-9c1a-448a-b5d5-bccf48a77a9d-retina-large-jpeg",
      "veg",
      "Bar & Grill, Mexican,American",
      10
    );
    let rest27Item2 = await restaurantData.addItemToRestaurant(
      restCollection[26]._id,
      "Crispy Shrimp Bao Bun",
      "pickled Carrot, Aromatic Greens, Spicy Aioli (3pcs)",
      10.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/7ad061d7-5b75-4e3d-b103-c916f1d5be10-retina-large-jpeg",
      "veg",
      "Bar & Grill, Mexican,American",
      10
    );
    let rest27Item3 = await restaurantData.addItemToRestaurant(
      restCollection[26]._id,
      "Mac N' Cheese",
      "Four cheeses, applewood smoked bacon, herb panko crust.",
      7.0,
      "https://www.lactaid.com/sites/lactaid_us/files/recipe-images/mac-and-cheese-website.png",
      "non-veg",
      "Bar & Grill, Mexican,American",
      10
    );
    let rest28Item1 = await restaurantData.addItemToRestaurant(
      restCollection[27]._id,
      "Hot Wings Zings (6 pieces) w/ Fries",
      "",
      5.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/58180380-581f-44bd-a66e-08083d3f0646-retina-large.jpg",
      "veg",
      "American, Chicken, Chicken Wings",
      10
    );
    let rest28Item2 = await restaurantData.addItemToRestaurant(
      restCollection[27]._id,
      "Chicken (2 Pieces) with French Fries, Rolls",
      "With one biscuit.",
      3.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/864e6ed4-0c6f-4d94-b328-df8f599d7065-retina-large.jpg",
      "non-veg",
      "American, Chicken, Chicken Wings",
      10
    );
    let rest28Item3 = await restaurantData.addItemToRestaurant(
      restCollection[27]._id,
      "Beef Burger (1/4 lb)",
      "",
      3.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/3ec82d8b-bce0-4cc1-a245-2346e298e750-retina-large.jpg",
      "non-veg",
      "American, Chicken, Chicken Wings",
      10
    );
    let rest28Item4 = await restaurantData.addItemToRestaurant(
      restCollection[27]._id,
      "Cheese Fries",
      "",
      3.0,
      "",
      "non-veg",
      "American, Chicken, Chicken Wings",
      10
    );
    let rest28Item5 = await restaurantData.addItemToRestaurant(
      restCollection[27]._id,
      "Italian Cheeseburger",
      "",
      5.0,
      "",
      "non-veg",
      "American, Chicken, Chicken Wings",
      10
    );
    let rest29Item1 = await restaurantData.addItemToRestaurant(
      restCollection[28]._id,
      "Chicken Over Rice with Soda Bundle",
      "Served with your choice of Coca-Cola product.",
      10.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/2377c691-6232-4716-8cab-75471f31db3b-retina-large-jpeg",
      "non-veg",
      "Salads, Sandwiches",
      10
    );
    let rest29Item2 = await restaurantData.addItemToRestaurant(
      restCollection[28]._id,
      "Chicken Sandwich with Soda",
      "",
      3.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/ef6c8854-911d-4e84-b58e-0da55fdb7942-retina-large-jpeg",
      "non-veg",
      "Salads, Sandwiches",
      10
    );
    let rest29Item3 = await restaurantData.addItemToRestaurant(
      restCollection[28]._id,
      "4 Chicken Tenders with Fries & Soda",
      "Four pieces chicken tenders with fries and soda.",
      3.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/32175e46-49aa-432d-b7a5-35f58a6d76ac-retina-large-jpeg",
      "non-veg",
      "Salads, Sandwiches",
      10
    );
    let rest29Item4 = await restaurantData.addItemToRestaurant(
      restCollection[28]._id,
      "Chicken & Lamb Salad with Soda",
      "",
      4.0,
      "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/ea82dda7-349a-44c7-8e85-91e741e6a51c-retina-large-jpeg",
      "non-veg",
      "Salads, Sandwiches",
      10
    );
    let rest30Item1 = await restaurantData.addItemToRestaurant(
      restCollection[29]._id,
      "2 Spring Shrimp Roll",
      "2 pieces.",
      1.0,
      "https://lh5.googleusercontent.com/-JCFr2s1HvDg/UtTZTO8AYpI/AAAAAAAEXpA/27wZGLBQ1M8/s800/fresh-vietnamese-shrimp-spring-rolls-24.jpg",
      "non-veg",
      "Chinese",
      10
    );
    let rest30Item2 = await restaurantData.addItemToRestaurant(
      restCollection[29]._id,
      "8 Szechuan Spicy Hot Wonton",
      "8 pieces. Served spicy.",
      5.0,
      "https://www.seriouseats.com/thmb/vReNBlHyf_zUvNHvvKvZqmaw9-g=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__03__20150310-sichuan-wonton-chili-oil-recipe-new-1-b5d267569a64453984160aaa919fe5fc.jpg",
      "non-veg",
      "Chinese",
      10
    );
    let rest30Item3 = await restaurantData.addItemToRestaurant(
      restCollection[29]._id,
      "Cold Noodles with Sesame Sauce",
      "With sesame sauce.",
      4.0,
      "",
      "non-veg",
      "Chinese",
      10
    );
    let rest30Item4 = await restaurantData.addItemToRestaurant(
      restCollection[29]._id,
      "Mixed Vegetable Soup",
      "",
      1.0,
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/vegetable-soup.jpg",
      "non-veg",
      "Chinese",
      10
    );
  } catch (e) {
    console.log(e);
  }
  console.log("Done seeding the Database");

  await dbConnection.closeConnection();
}

main();
