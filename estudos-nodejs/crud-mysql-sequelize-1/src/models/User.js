const { sequelize } = require('../database/database');
const { DataTypes } = require('sequelize');

const User = sequelize.define(
  'user',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name is required',
        },
        len: {
          args: [6, 20],
          msg: 'Name must be between 6 and 20 characters',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Email invalid',
        },
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    underscored: true,
  }
);

module.exports = {
  User,
};
