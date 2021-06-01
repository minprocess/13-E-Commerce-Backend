// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// One-To-Many: Category can have many products.

// Products belongsTo Category
// The association can also be created from the Product side
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products, creating a foreignKey in the Product table
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// See the following for many-to-many associations in Sequelize
// https://bezkoder.com/sequelize-associate-many-to-many/
// https://medium.com/@tonyangelo9707/many-to-many-associations-using-sequelize-941f0b6ac102

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: 'product_tag',
  // Define an alias for when data is retrieved
  as: 'tags',
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: 'product_tag',
  as: 'products',
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
