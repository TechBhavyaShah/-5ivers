# Group 5: The -5ivers
Food Waste Management

## Project Description
According to the Environmental Protection Agency (EPA), over 103 million tons (206 billion pounds) of food was wasted in the United States in 2018. Globally, we waste a third of all food produced for human consumption, according to the Food and Agriculture Organization (FAO) of the United Nations. Food waste is the #1 source of garbage in landfills and it is responsible for 17% of U.S. methane emissions. Some of the current solutions to this problem simply include educating people on how to prevent food waste via lifestyle changes and only buying what you need, while also paying attention to expiration dates before throwing food out. However, this seems to be an overly idealistic solution which brings us to the idea of our platform.

Food waste management is a web application that allows groceries/small food businesses in Hoboken to sell food that is close to its expiration date for a discounted (or free) rate in order to avoid food waste. Features for the customers include finding nearby stores to their location/proximity while also being able to check out these food items for purchase. On the other hand, store owners would be able to list their items on our application for purchase by others. Both parties would benefit from this in order to avoid food waste on the business side, while also providing affordable rates for the customers (E.g. for students who are on a budget, or perhaps charities looking to provide food for the homeless). 

## Technologies used
Node.js, React, MongoDB Atlas, Express, Firebase Authentication, Redux, ImageMagick, AWS S3

## How to Setup
The environment files are already included in our project submission (There's one for both the client side and server side).

But for good measure and completion, you would need to create a file called `.env` in the root directory of both `/client` and `/server` and paste in the corresponding secret keys, which are included in a Canvas Submission comment.

### Package and data setup
Navigate to `/client` and `/server` and run `npm install` to install the required dependencies on both the client and server-side of our project.

Then run `npm run seed`, `node /task/item_seed`, `node /task/users_seed` to run the various seed files for our database. (Since we are using MongoDB Atlas, we cleared out the database prior to submitting so it has a clean slate for you to work with)

### ImageMagick Setup
The next step is to install ImageMagick on your machine since it will be needed locally for one of our image upload features to work...
Download ImageMagick for your specific operating system at this link: https://imagemagick.org/script/download.php

#### Windows
- You can download an executable directly at this link: https://download.imagemagick.org/ImageMagick/download/binaries/ImageMagick-7.1.0-33-Q16-HDRI-x64-dll.exe
- Choose all default options, however, when on the "Select Additional Tasks" page, be sure to check off `Install legacy utilities (e.g. convert)`.
- ![image](https://user-images.githubusercontent.com/32401608/168448400-07058a9f-c842-4be3-8d3c-d0c36986dbec.png)

#### MacOS
- Assuming you have homebrew installed, you can install ImageMagick with `brew install imagemagick` and `brew install ghostscript` (A dependency).

## Run the application 
From here, you can run 'npm start' in the `/client` folder to start the react app (http://localhost:3000/) and `npm start` in the `/server` folder to begin the server (http://localhost:3001/)

We also have seeded both user accounts and restaurant admin accounts (so you can update the food items offered for a particular restaurant)...

### Restaurant Admin Accounts
Access the Admin login page using http://localhost:3000/admin/signin  (Note: There is no button to go to admin page. We need to manually type the url)
The username and password follow the same format for each restaurant... 

Username: restaurant{number}

Password: restaurant{number}.123

|        Restaurant         |  Username  | Password |
|----------------------|------------|----------|
| La Casa    | restaurant1  | restaurant1.123 |
| Mexiterraneo Grill       | restaurant2      | restaurant2.123   |
| The Franklin     | restaurant3      | restaurant3.123   |
| Mike's   | restaurant4      | restaurant4.123   |
| Chango Kitchen    | restaurant5      | restaurant5.123   |
| Ricky's  | restaurant6      | restaurant6.123   |
| Ali Baba  | restaurant7      | restaurant7.123   |
| Mision Burrito    | restaurant8      | restaurant8.123   |
| El Sabroso | restaurant9      | restaurant9.123   |
| Elysian Cafe   | restaurant10      | restaurant10.123   |
| Dark Side Of The Moo   | restaurant11      | restaurant11.123   |
| Corto  | restaurant12      | restaurant12.123   |
| Amanda's   | restaurant13      | restaurant13.123   |
| La Boheme Restaurant  | restaurant14      | restaurant14.123   |
| Margherita's  | restaurant15      | restaurant15.123   |
| Zack's  | restaurant16      | restaurant16.123   |
| Empanadas Cafe   |    restaurant17      | restaurant17.123   |
| Mamoun's Falafel  |    restaurant18      | restaurant18.123   |
| Los Tres Chilitos  | restaurant19      | restaurant19.123   |
| Shaka Kitchen  | restaurant20      | restaurant20.123   |
| The Hutton | restaurant21      | restaurant21.123   |
| Heavenly Chicken and Ribs   |restaurant22      | restaurant22.123   | 
| Ujala  | restaurant23      | restaurant23.123   |
| Northern Soul   | restaurant24      | restaurant24.123   |
| Anna Maria Pizzeria & Restaurant   | restaurant25      | restaurant25.123   |
| Corkscrew Bar   | restaurant26      | restaurant26.123   |
| Garden State   | restaurant27      | restaurant7.123   |
| Hollywood Fried Chicken  | restaurant28      | restaurant28.123   |
| NYC GYROS   | restaurant29      | restaurant29.123   |
| Good Year  | restaurant30      | restaurant30.123   |
| Tommy's Family Restaurant   | restaurant31      | restaurant31.123   | 
| Sophia’s Kitchen  | restaurant32      | restaurant32.123   |
| Los Amigos Restaurant, LLC   | restaurant33      | restaurant33.123   |
| Rumba's Cafe   | restaurant34      | restaurant34.123   |
| La Concha   | restaurant35      | restaurant35.123   |
