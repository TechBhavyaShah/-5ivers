const dbConnection = require("../config/mongoConnection");
const data = require("../data");
const user = data.users;
const ObjectId = require("mongodb").ObjectId;

async function main() {
  const db = await dbConnection.connectToDb();
  // await db.dropDatabase();

  try {
    let user1 = await user.createUser(
      "moyGIyDRseQwhEi94mR1VdPIkD12",
      "Alexander Moore",
      "amoore@stevens.edu",
      "My name is Alexander!",
      "123 Cherry St Hoboken, NJ 99999 United States",
      "https://cs554-final-project-group5.s3.amazonaws.com/albert-dera-ILip77SbmOE-unsplash.jpg"
    );

    let user2 = await user.createUser(
      "IFDN7QBq7gMJrwoUmnQ5b48YGRH3",
      "Mark Lee",
      "mlee@stevens.edu",
      "My name is Mark!",
      "456 Apple Road Houston, Texas 12345 United States",
      "https://cs554-final-project-group5.s3.amazonaws.com/austin-wade-X6Uj51n5CE8-unsplash.jpg"
    );

    let user3 = await user.createUser(
      "qVdNvYTUAOZucRQG9OvfGzuui7L2",
      "Janice Smith",
      "jsmith@stevens.edu",
      "My name is Janice!",
      "789 Walnut Boulevard Saint Louis, MO 54321 United States",
      "https://cs554-final-project-group5.s3.amazonaws.com/brooke-cagle-k9XZPpPHDho-unsplash.jpg"
    );

    let user4 = await user.createUser(
      "3L5P9mk4NldmNkPdSt8RdEyH7wx1",
      "Maria Garcia",
      "mgarcia@stevens.edu",
      "My name is Maria!",
      "85 S. Sugar Dr. Apt 933 Danvers, MA 01923",
      "https://cs554-final-project-group5.s3.amazonaws.com/brooke-cagle-WHWYBmtn3_0-unsplash.jpg"
    );

    let user5 = await user.createUser(
      "ce1zCfyGypN2uVKXC8iHX1bwJHU2",
      "Mary Rodriguez",
      "mrodriguez@stevens.edu",
      "My name is Mary!",
      "81 Jones Ave. Hampton, VA 23666",
      "https://cs554-final-project-group5.s3.amazonaws.com/daria-pimkina-tYaccl19A3Q-unsplash.jpg"
    );

    let user6 = await user.createUser(
      "qHQ5dih7pfMxVrsGmfxwCzOVeBo1",
      "Sarah Perez",
      "sperez@stevens.edu",
      "My name is Sarah!",
      "9320 Delaware Dr. York, PA 17402",
      "https://cs554-final-project-group5.s3.amazonaws.com/edward-cisneros-_H6wpor9mjs-unsplash.jpg"
    );

    let user7 = await user.createUser(
      "Iylajo3UJDaDjmKeLQOfMB9SwmI2",
      "Nancy Thompson",
      "nthompson@stevens.edu",
      "My name is Nancy!",
      "63 Southampton Drive Painesville, OH 44077",
      "https://cs554-final-project-group5.s3.amazonaws.com/jason-goodman-0K7GgiA8lVE-unsplash.jpg"
    );

    let user8 = await user.createUser(
      "HDiAFY76BTQ0jkBNFlxWP6qKoxG3",
      "Anne White",
      "awhite@stevens.edu",
      "My name is Anne!",
      "9894 University Ave. Crofton, MD 21114",
      "https://cs554-final-project-group5.s3.amazonaws.com/jimmy-fermin-bqe0J0b26RQ-unsplash.jpg"
    );

    let user9 = await user.createUser(
      "Y938EvhgDLPZsSA1fOrgtMW7Acv2",
      "Catherine Sanchez",
      "csanchez@stevens.edu",
      "My name is Catherine!",
      "250 Linda Street Woodstock, GA 30188",
      "https://cs554-final-project-group5.s3.amazonaws.com/jeffery-erhunse-BQMZ5ligqps-unsplash.jpg"
    );

    let user10 = await user.createUser(
      "rK20HNJgRuTpbhzHzw1jQxZhTJH3",
      "Margaret Clark",
      "mclark@stevens.edu",
      "My name is Margaret!",
      "95 Pilgrim Street Lakeland, FL 33801",
      "https://cs554-final-project-group5.s3.amazonaws.com/svyatoslav-romanov-BrEAp01_m5w-unsplash.jpg"
    );

    let user11 = await user.createUser(
      "Ib6Hg0EeUMO8OyMxGzwvrTtoB8J2",
      "Thomas Ramirez",
      "tramirez@stevens.edu",
      "My name is Thomas!",
      "118 Studebaker Drive Hazleton, PA 18201",
      "https://cs554-final-project-group5.s3.amazonaws.com/ben-blennerhassett-ZXfUUM_LR0k-unsplash.jpg"
    );

    let user12 = await user.createUser(
      "53ggbdhfp0XExzGIGP3WW2wxG6U2",
      "George Lewis",
      "glewis@stevens.edu",
      "My name is George!",
      "477 Tower Ave. Indian Trail, NC 28079",
      "https://cs554-final-project-group5.s3.amazonaws.com/gift-habeshaw-ImFZSnfobKk-unsplash.jpg"
    );

    let user13 = await user.createUser(
      "13PutnfiGeOEmJJBfmfqDmyUW902",
      "Joseph Robinson",
      "jrobinson@stevens.edu",
      "My name is Joseph!",
      "597 Franklin St. Concord, NH 03301",
      "https://cs554-final-project-group5.s3.amazonaws.com/juan-encalada-WC7KIHo13Fc-unsplash.jpg"
    );

    let user14 = await user.createUser(
      "xcjuqJY6ucc95Wixasuxq044w512",
      "Henry Walker",
      "hwalker@stevens.edu",
      "My name is Henry!",
      "495 Glenholme St. Gloucester, MA 01930",
      "https://cs554-final-project-group5.s3.amazonaws.com/karina-carvalho-fKTKVrNqXQQ-unsplash.jpg"
    );

    let user15 = await user.createUser(
      "4QrX43tBAZhNGDGVj4ub1JbWrOc2",
      "Samuel Young",
      "syoung@stevens.edu",
      "My name is Samuel!",
      "847 Nut Swamp Ave. Christiansburg, VA 24073",
      "https://cs554-final-project-group5.s3.amazonaws.com/nick-karvounis-JyO_szjGvUw-unsplash.jpg"
    );
  } catch (e) {
    console.log(e);
  }

  console.log("Done seeding the Database");

  await dbConnection.closeConnection();
}

main();
