const Sequelize = require('sequelize');

const feedHeart = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
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
