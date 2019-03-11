const Sequelize = require('sequelize');

const reply = {
  feed_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  commentContent: {
    type: Sequelize.STRING,
    allowNull: false
  },
  heart: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: 0
  }
};

module.exports = reply;
