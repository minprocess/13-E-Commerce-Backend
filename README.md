# 13-E-Commerce-Backend
Backend for an e-commerce website using Sequelize

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