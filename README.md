# 13-E-Commerce-Backend
## Description
Backend for an e-commerce website using Sequelize. Database is mySql on localhost and JawsDB on Heroku. The database has 3 tables: Category, Product and Tags. A category can has many products. A product can belong to only one category. Thus there is a one-to-many relationship between categoy and product. A product can have many tags. Thus there is a many-to-many relationship between product and tags.<br>


Deployment to Heroku
https://frozen-plains-09933.herokuapp.com/


PS C:\Users\wtpat\repos\Homework\13-E-Commerce-Backend> git remote -v
heroku  https://git.heroku.com/frozen-plains-09933.git (fetch)
heroku  https://git.heroku.com/frozen-plains-09933.git (push)
origin  git@github.com:minprocess/13-E-Commerce-Backend.git (fetch)
origin  git@github.com:minprocess/13-E-Commerce-Backend.git (push)


https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql

### Seed the Database

After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes.

### Sync Sequelize to the Database on Server Start

Create the code needed in `server.js` to sync the Sequelize models to the MySQL database on server start.


## Usage
The following commands deploy to Heroku. The heroku CLI has to be deployed to the PC with the project
`heroku create`
`git push heroku main`

Heroku has a JawsDB addon that is mySQL compatible. This backend works with mySQL on the PC used for development or on Heroku.<br>

To seed the database on the development PC use
`node seeds/index.js`

To seed the database on Heroku use this command
`heroku run node seeds/index.js`

Insomnia can be used to perform CRUD operations with the database. Below are the 3 routes that can be used in Insomnia
https://frozen-plains-09933.herokuapp.com/api/categoriesgit /
https://frozen-plains-09933.herokuapp.com/api/products/
https://frozen-plains-09933.herokuapp.com/api/tags/

The following mp4 file is a video of several api operations in Insomnia
(https://github.com/minprocess/13-E-Commerce-Backend/blob/main/video/demonstration_of_backend_on_heroku_using_insomnia.mp4)



# <Your-Project-Title>
## Description
Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?
## Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
## Usage
Provide instructions and examples for use. Include screenshots as needed.
To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    ```md
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