const Sequelize = require('sequelize');

const feed = {
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    userProfile: {
        type: Sequelize.STRING,
        allowNull: false
    },
    feedContents: {
        type: Sequelize.STRING,
        allowNull: false
    },
    heart: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
    }
};

module.exports = feed;
