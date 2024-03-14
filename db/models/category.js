'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Question}) {
      this.belongsTo(User, {foreignKey:"userID"})
      this.hasMany(Question, {foreignKey:"categoryID"})
    }
  }
  Category.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.TEXT
    },
    img: {
      type: DataTypes.TEXT
    },
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
        },
        onDelete: "cascade",
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};