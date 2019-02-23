const Sequelize = require('sequelize');

const heart = {
    feed_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    user_id : {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}

module.exports = heart;