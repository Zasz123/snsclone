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
    feedImage: {
        type: Sequelize.STRING,
        allowNull: true,
	defaultValue: "http://13.125.186.175/static/image/1.jpg"
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
