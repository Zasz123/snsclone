const Sequelize = require('sequelize');

const comHeart = {
  comment_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
};

module.exports = comHeart;
