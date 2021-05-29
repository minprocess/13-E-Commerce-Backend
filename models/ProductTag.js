const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

// This is a third table for the many-to-many relationships of products and tags
// A product can have many tags and a tag can have many products

ProductTag.init(
  {
  	//ProductTag`
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
	  },
    tag_id: {
      type: DataTypes.INTEGER,
	    references: {
        model: 'tag',
        key: 'id',
      },
	  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
