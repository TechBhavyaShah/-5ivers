const dbConnection = require("../config/mongoConnection");
const data = require("../data");
const user = data.users;
const ObjectId  = require('mongodb').ObjectId;


async function main() {
    const db = await dbConnection.connectToDb();
    // await db.dropDatabase();

    try{
    
    let user1 = await user.createUser("123", "Tia Patel", "tpatel@gmail.com", "helloo12", "Hello I am Tia Patel. I am a student at NYU. My favoraite place to visit is Central Park.", "12 hutton st, Jersey city, NJ, 09876")

    let user2 = await user.createUser("345", "Krina Shah", "kshah@gmail.com", "true1234", "Hello I am Krina. I love Apple products. Iphone 3 was my first phone.", "34 cherry st, Gau, MA, 23422")

    let user3 = await user.createUser("564", "Ross Geller", "rg123@gmail.com", "friends1234", "Hello I am Ross. My favorite show is Friends.", "332 manhattan ave, Newark, NJ, 21232")
 
    let user4 = await user.createUser("1234", "Moneka Bing", "moneka03@gmail.com", "friends09", "Hello I am Moneka. I am a Chef and owner of Chicago Burgers restaurant.", "87 bloom st, Chicago, IL, 82543")

    let user5 = await user.createUser("5467", "Lee Min Ho", "dhfjf@gmail.com", "flowers74", "Hello I am Lee. I like to watch college football. My favorite team is Georgia Bulldogs.", "56 cherry st, Atlanta, GA, 43542")

    let user6 = await user.createUser("3453", "Terry Smith", "terry8989@yahoo.com", "terryuser06", "Hello I am Terry. I like to skate. I want to go on a trip.", "90 fig st, loui, DE, 23512")

    let user7 = await user.createUser("9887", "Lyle Autin", "lyle09@rocket.co", "lyleuser@07", "Hello I am Lyle. I work at a construction company. We construct bridges.", "54 rain st, Tulsa, OK, 54342")

    let user8 = await user.createUser("8971", "Laura Langstass", "langstass67@mail.com", "laurauser@87", "Hello I am Laura. I like to workout and remain healthy. I am very health consious.", "78 Bloomfield rd, Norman, OK, 21972 ")

    let user9 = await user.createUser("7876", "John Wick", "wick8989@mail.com", "wickuser@09", "Hello I am John. I am an actor. I like dogs.", "554 Zebulan Rd, Perry, FL, 88665")
 
    let user10 = await user.createUser("2311", "Kate Williams", "katew43@mail.com", "kateuser@10", "Hello I am Kate. I like travelling and sightseeing.", "90 MLK Rd, Savannah, GA, 12321 ")

    let user11 = await user.createUser("7866", "Maria Hernandez", "mher9090@hotspot.edu", "heruser@11", "Hello I am Maria. I like to socialize. My goal is to work for Google.", "121 Vivia Rd, Jacksonville, FL, 86271")

    let user12 = await user.createUser("5644", "Allie Parker", "alliep12@bits.edu", "alluser@12", "Hello I am Allie. I like to play volleyball. Also, I want to explore the world as much as I can", "87 Montgomery st, Huntsville, Al, 34211")

    let user13 = await user.createUser("6744", "Shang Lee", "leeshang12@shanghaiu.edu", "shanguser@13", "Hello I am Shang. I want to explore the world as much as I can. I like to read books", "101 Foresthill Rd, Hoover, Al, 32311")

    let user14 = await user.createUser("3421", "Maya Moore", "mmoore43@gmail.com", "muser@14", "Hello I am Maya. I love adventurous sports. I like to read books too", "67 North st, Gray, AZ, 43211")
  
    let user15 = await user.createUser("2123", "Sarah Kyler", "sarahk@yahoo.com", "sarahuser@15", "Hello I am Sarah. I am a college student. I like computers", "52 Jackson st, Florence, MA, 32134")

    }catch(e){
        console.log(e);
    }

    console.log("Done seeding the Database")

    await dbConnection.closeConnection();
}

main();