const dbConnection = require("../config/mongoConnection");
const data = require("../data");
const restaurantData = data.restaurants;
const ObjectId = require("mongodb").ObjectId;

async function main() {
  const db = await dbConnection.connectToDb();
  //   await db.dropDatabase();

  try {
    let newRestaurant1 = await restaurantData.create(
      "restaurant1",
      "restaurant1.123",
      "La Casa",
      "https://lacasahoboken.com/img/LCasa-interior.png",
      "40.7368747",
      "-74.0302638",
      "54 Newark St., Hoboken"
    );
    let newRestaurant2 = await restaurantData.create(
      "restaurant2",
      "restaurant2.123",
      "Mexiterraneo Grill",
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/restaurant/cover/66aed670-52b8-4f38-9ccc-347ecca5eb86.png",
      "40.7374588",
      "-74.0320251",
      "153 1st St, Hoboken"
    );
    let newRestaurant3 = await restaurantData.create(
      "restaurant3",
      "restaurant3.123",
      "The Franklin",
      "https://www.hobokengirl.com/wp-content/uploads/2022/04/The-Franklin-secaucus.jpeg",
      "40.7417174",
      "-74.0470084",
      "159 New York Ave, Jersey City"
    );
    let newRestaurant4 = await restaurantData.create(
      "restaurant4",
      "restaurant4.123",
      "Mike's",
      "https://d1ralsognjng37.cloudfront.net/14c894d2-667f-4b10-9313-815f443ddeb0.jpeg",
      "40.7490474",
      "-74.0409191",
      "602 Palisade Ave, Jersey City"
    );
    let newRestaurant5 = await restaurantData.create(
      "restaurant5",
      "restaurant5.123",
      "Chango Kitchen",
      "https://www.hobokengirl.com/wp-content/uploads/2019/12/chango-kitchen-sandwich.png",
      "40.74069799999999",
      "-74.0335348",
      "301 Willow Ave, Hoboken"
    );
    let newRestaurant6 = await restaurantData.create(
      "restaurant6",
      "restaurant6.123",
      "Ricky's",
      "https://www.eastbaytimes.com/wp-content/uploads/2020/08/SJM-L-RICKYS-0807-4.jpg",
      "40.7414618",
      "-74.0464209",
      "48 Franklin St, Jersey City"
    );
    let newRestaurant7 = await restaurantData.create(
      "restaurant7",
      "restaurant7.123",
      "Ali Baba",
      "https://alibabahoboken.com/content/website/accounts/190/1600-ca6e4afe85aad52e6b62c151a1654948.jpg",
      "40.747743",
      "-74.02799329999999",
      "912 Washington St Ste 1, Hoboken"
    );
    let newRestaurant8 = await restaurantData.create(
      "restaurant8",
      "restaurant8.123",
      "Mision Burrito",
      "https://www.sfweekly.com/wp-content/uploads/2017/12/2017-12-04.jpg",
      "40.7402406",
      "-74.0468504",
      "333 Palisade Ave, Jersey City"
    );
    let newRestaurant9 = await restaurantData.create(
      "restaurant9",
      "restaurant9.123",
      "El Sabroso",
      "https://images.squarespace-cdn.com/content/v1/6005befa6f0b7e66aaa707cc/1611003270257-ZZ4GTDKM6RT58EBYOZXW/Sabroso+Logo.png",
      "40.74879",
      "-74.047125",
      "414 Central Ave, Jersey City"
    );
    let newRestaurant10 = await restaurantData.create(
      "restaurant10",
      "restaurant10.123",
      "Elysian Cafe",
      "https://www.hoboken-bar.net/wp-content/uploads/2018/04/ely-ph2.jpg",
      "40.7486928",
      "-74.0272798",
      "1001 Washington St, Hoboken"
    );
    let newRestaurant11 = await restaurantData.create(
      "restaurant11",
      "restaurant11.123",
      "Dark Side Of The Moo",
      "https://isteam.wsimg.com/ip/781ed898-327b-46a0-9b62-cd1d6ece1a9c/Dark%20Side%20Of%20The%20Moo%20black-0002.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25",
      "40.7460666",
      "-74.04455519999999",
      "52 Bowers St, Jersey City"
    );
    let newRestaurant12 = await restaurantData.create(
      "restaurant12",
      "restaurant12.123",
      "Corto",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/145154137.jpg?k=68fead0a0f2812045dbf4c60ec4122725aacacad46c9d3ebbf3735dc8f45a1aa&o=&hp=1",
      "40.7459686",
      "-74.0433718",
      "507 Palisade Ave, Jersey City"
    );
    let newRestaurant13 = await restaurantData.create(
      "restaurant13",
      "restaurant13.123",
      "Amanda's",
      "https://www.new-jersey-leisure-guide.com/images/amandas-restaurant-800.jpg",
      "40.7476512",
      "-74.0281186",
      "908 Washington St A, Hoboken"
    );
    let newRestaurant14 = await restaurantData.create(
      "restaurant14",
      "restaurant14.123",
      "La Boheme Restaurant",
      "https://img.particlenews.com/image.php?type=thumbnail_580x000&url=0xErBZ_0afJ2Bar00",
      "40.7407004",
      "-74.0345169",
      "233 Clinton St, Hoboken"
    );
    let newRestaurant15 = await restaurantData.create(
      "restaurant15",
      "restaurant15.123",
      "Margherita's",
      "https://28nwgk2wx3p52fe6o9419sg5-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/Margheritas-Restaurant-740-Washington-Street-Hoboken-2.jpg",
      "40.7459597",
      "-74.0285025",
      "740 Washington St, Hoboken"
    );
    let newRestaurant16 = await restaurantData.create(
      "restaurant16",
      "restaurant16.123",
      "Zack's",
      "https://www.hobokengirl.com/wp-content/uploads/2020/12/zacks-oak-bar-hoboken-7.png",
      "40.7405781",
      "-74.0339624",
      "232 Willow Ave, Hoboken"
    );
    let newRestaurant17 = await restaurantData.create(
      "restaurant17",
      "restaurant17.123",
      "Empanadas Cafe",
      "https://empanadascafe.com/wp-content/uploads/2021/04/empanadas-site.jpg",
      "40.7381833",
      "-74.0304743",
      "123 Washington St, Hoboken"
    );
    let newRestaurant18 = await restaurantData.create(
      "restaurant18",
      "restaurant18.123",
      "Mamoun's Falafel",
      "https://cdn.vox-cdn.com/thumbor/Q0oPgYzJ_2DjP4M5blOOEQZbtng=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/3856458/macdougal_10-530x360.0.jpg",
      "40.740128",
      "-74.0303",
      "300 Washington St, Hoboken"
    );
    let newRestaurant19 = await restaurantData.create(
      "restaurant19",
      "restaurant19.123",
      "Los Tres Chilitos",
      "https://media-cdn.tripadvisor.com/media/photo-s/07/f5/b4/a3/los-tres-chilitos.jpg",
      "40.740128",
      "-74.0303",
      "456 Central Ave, Jersey City"
    );
    let newRestaurant20 = await restaurantData.create(
      "restaurant20",
      "restaurant20.123",
      "Shaka Kitchen",
      "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_1200,h_800,f_auto,fl_lossy,q_80,c_fit/ugyhkvyrwa8adfirjvqr",
      "40.740128",
      "-74.0303",
      "110 Washington St, Hoboken"
    );
    let newRestaurant21 = await restaurantData.create(
      "restaurant21",
      "restaurant21.123",
      "The Hutton",
      "https://static.wixstatic.com/media/380501_17f80b221d8443d1a20b68084fc022e3~mv2_d_5602_3735_s_4_2.jpg/v1/fill/w_640,h_590,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/380501_17f80b221d8443d1a20b68084fc022e3~mv2_d_5602_3735_s_4_2.jpg",
      "40.746984",
      "-74.05585099999999",
      "225 Hutton St, Jersey City"
    );
    let newRestaurant22 = await restaurantData.create(
      "restaurant22",
      "restaurant22.123",
      "Heavenly Chicken and Ribs",
      "http://nebula.wsimg.com/090f2beebdda1769c3057ed10bfd8f0d?AccessKeyId=6F1341C2232EF2CD22AD&disposition=0&alloworigin=1",
      "40.75006339999999",
      "-74.0607799",
      "555 Tonnele Ave, Jersey City"
    );
    let newRestaurant23 = await restaurantData.create(
      "restaurant23",
      "restaurant23.123",
      "Ujala",
      "https://28nwgk2wx3p52fe6o9419sg5-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/Ujala-Kabab-713-Newark-Avenue-Jersey-City-2.jpg",
      "40.748624",
      "-74.05597809999999",
      "3403 John F. Kennedy Blvd, Jersey City"
    );
    let newRestaurant24 = await restaurantData.create(
      "restaurant24",
      "restaurant24.123",
      "Northern Soul",
      "https://images.squarespace-cdn.com/content/v1/582a073a2e69cf1958987260/91fb97b7-0c5b-4c77-889f-0b9f830c092c/Screen+Shot+2021-12-17+at+3.15.43+PM.png",
      "40.7396414",
      "-74.04253299999999",
      "700 1st St, Hoboken"
    );
    let newRestaurant25 = await restaurantData.create(
      "restaurant25",
      "restaurant25.123",
      "Anna Maria Pizzeria & Restaurant",
      "https://www.opendurham.org/sites/default/files/images/2008_4/annamariaspizza_1981.jpg",
      "40.755588",
      "-74.0467978",
      "3668 John F. Kennedy Blvd, Jersey City"
    );
    let newRestaurant26 = await restaurantData.create(
      "restaurant26",
      "restaurant26.123",
      "Corkscrew Bar",
      "https://www.corkscrewbarandgrille.com/wp-content/uploads/elementor/thumbs/New-Sign-3-nw0x2tneg38edpyki5qh2x75ycljzl86sp3picd5k8.jpg",
      "40.7495872",
      "-74.0430642",
      "61 Congress St, Jersey City"
    );
    let newRestaurant27 = await restaurantData.create(
      "restaurant27",
      "restaurant27.123",
      "Garden State",
      "https://tapinto-production.s3.amazonaws.com/uploads/articles/fo/best_crop_51f617d66dfd76842ede_Fogo_de_chao.jpg?id=3936815",
      "40.7448491",
      "-74.0503275",
      "287 Central Ave, Jersey City"
    );
    let newRestaurant28 = await restaurantData.create(
      "restaurant28",
      "restaurant28.123",
      "Hollywood Fried Chicken",
      "https://s3-media0.fl.yelpcdn.com/bphoto/jNekImN6KsJ5kXbutIVizA/l.jpg",
      "40.7494904",
      "-74.04710229999999",
      "431 Central Ave, Jersey City"
    );
    let newRestaurant29 = await restaurantData.create(
      "restaurant29",
      "restaurant29.123",
      "NYC GYROS",
      "https://i.imgur.com/cM9oH9e.jpg",
      "40.7520534",
      "-74.0535598",
      "3515 John F. Kennedy Blvd, Jersey City"
    );
    let newRestaurant30 = await restaurantData.create(
      "restaurant30",
      "restaurant30.123",
      "Good Year",
      "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_1200,h_800,f_auto,fl_lossy,q_80,c_fit/yarvn5fphksbx0kjyej0",
      "40.7488962",
      "-74.0472085",
      "416 Central Ave, Jersey City"
    );
    let newRestaurant31 = await restaurantData.create(
      "restaurant31",
      "restaurant31.123",
      "Tommy's Family Restaurant",
      "https://www.tommysrestaurantgi.com/wp-content/uploads/elementor/thumbs/tommys-family-restaurant-exterior-o6y1vzlzx1gnfsiyiwmcntg54v57zdsd3b2w4drqze.jpg",
      "40.7471024",
      "-74.0487619",
      "349 Central Ave, Jersey City"
    );
    let newRestaurant32 = await restaurantData.create(
      "restaurant32",
      "restaurant32.123",
      "Sophia’s Kitchen",
      "https://images.squarespace-cdn.com/content/v1/5bad042f4d871108484ba648/1543251909265-1FPP3DPHYSKGS8SAMO0R/SKLogo-transparent.png",
      "40.7563046",
      "-74.0434118",
      "422A Paterson Plank Rd, Union City"
    );
    let newRestaurant33 = await restaurantData.create(
      "restaurant33",
      "restaurant33.123",
      "Los Amigos Restaurant, LLC",
      "https://static.wixstatic.com/media/af7f5f_97f58af98bc34f0fa47ebf23105157ca.jpg",
      "40.7482997",
      "-74.0480542",
      "395 Central Ave, Jersey City"
    );
    let newRestaurant34 = await restaurantData.create(
      "restaurant34",
      "restaurant34.123",
      "Rumba's Cafe",
      "https://rumbascafe.com/wp-content/uploads/2013/06/6.jpg",
      "40.7521653",
      "-74.04535039999999",
      "513 Central Ave, Jersey City"
    );
    let newRestaurant35 = await restaurantData.create(
      "restaurant35",
      "restaurant35.123",
      "La Concha",
      "https://cdn.usarestaurants.info/assets/uploads/2c9e6c8f32d7a77c665d3242728bdfd5_-united-states-new-jersey-hudson-county-jersey-city-651258-la-conchahtm.jpg",
      "40.7479063",
      "-74.0478941",
      "384 Central Ave, Jersey City"
    );
  } catch (e) {
    console.log(e);
  }

  console.log("Done seeding the Database");

  await dbConnection.closeConnection();
}

main();
