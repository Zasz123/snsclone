const Sequelize = require('sequelize');

const feedHeart = {
    feed_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    user_id : {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}

module.exports = feedHeart;