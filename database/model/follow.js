const Sequelize = require('sequelize');

const follow = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  follower_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  followed_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
};

module.exports = follow;
