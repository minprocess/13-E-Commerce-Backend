# 13-E-Commerce-Backend
## Description
This project is a server/backend for a ficticious e-commerce website using Sequelize. The database is mySql on localhost and JawsDB on Heroku. The database has 3 tables: Category, Product and Tag. A category can have many products (one-to-many). A product can belong to only one category. A product can have many tags (many-to-many).

The api routes can be tested with Insomnia. The following mp4 file is a video of several api operations in Insomnia.  
(https://github.com/minprocess/13-E-Commerce-Backend/blob/main/video/demonstration_of_backend_on_heroku_using_insomnia.mp4)  
Note that the video is in a folder names Video.

Most of the code was written by the company that runs the Univeristy of Pennsylvania coding boot camp.

This app was deployment to Heroku as the following  
https://frozen-plains-09933.herokuapp.com/

The mySQL and JawsDB databases can be seeded with this app. See the Usage section below.

On server start the Sequelize models are synced to either the MySQL database or the JawsDB.  

## Installation
This project has repositories on Heroku and on GitHub. The git command to show remote repositories is  
`git remote -v`  
Git returned the following  
```
heroku  https://git.heroku.com/frozen-plains-09933.git (fetch)  
heroku  https://git.heroku.com/frozen-plains-09933.git (push)  
origin  git@github.com:minprocess/13-E-Commerce-Backend.git (fetch)  
origin  git@github.com:minprocess/13-E-Commerce-Backend.git (push)  
```
This project has the following dependencies in `package.json`.
```
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "mysql2": "^2.1.0",
    "sequelize": "^5.21.7"
```

## Usage
The following commands deploy to Heroku. Note that the Heroku CLI has to be installed on the PC with source code for this project.  
`heroku create`
`git push heroku main`

This server/backend works with mySQL on the PC used for development or on Heroku.

To seed the database on the development PC use one of the following commands  
`node seeds/index.js`  
`npm start seeds/index.js`

To seed the database on Heroku use this command  
`heroku run node seeds/index.js`

Insomnia can be used to perform CRUD operations with the database. Below are the 3 routes that can be used in Insomnia  
```
https://frozen-plains-09933.herokuapp.com/api/categoriesgit /
https://frozen-plains-09933.herokuapp.com/api/products/
https://frozen-plains-09933.herokuapp.com/api/tags/
```
The following mp4 file is a video of several api operations in Insomnia  
(https://github.com/minprocess/13-E-Commerce-Backend/blob/main/video/demonstration_of_backend_on_heroku_using_insomnia.mp4)


| SQL | Method | API | Data |
| --- | --- | --- | --- |
| Read categories | GET | https://frozen-plains-09933.herokuapp.com/api/categories |  |
Create a category | POST | https://frozen-plains-09933.herokuapp.com/api/categories | { "category_name":"Sports" } |
| Read products | GET | https://frozen-plains-09933.herokuapp.com/api/products |   |
| Create a product | POST | https://frozen-plains-09933.herokuapp.com/api/products | { "product_name":"Basketball", "price":200.00, "stock":3, "category_id":6, "tagIds":[1,2]} |
| Update a product | PUT | https://frozen-plains-09933.herokuapp.com/api/products/6 | { "tagIds":[3,4] }} |
| Delete a prodUct | DELETE | https://frozen-plains-09933.herokuapp.com/api/products/6 |   |


```
![alt text](assets/images/screenshot.png)
```
## Credits
List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
If you followed tutorials, include links to those here as well.
## License
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
---
🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
## Badges
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
## Features
If your project has a lot of features, list them here.
## How to Contribute
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
## Tests
Go the extra mile and write tests for your application. Then provide examples on how to run them here.