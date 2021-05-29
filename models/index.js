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

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'products_for_a_tag'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'tags_for_a_product'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
