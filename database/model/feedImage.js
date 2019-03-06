const Sequelize = require('sequelize');

const feedImage = {
    feed_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    feedImage: {
        type: Sequelize.STRING,
        allowNull: true,
	    defaultValue: "http://13.125.186.175/static/image/1.jpg"
    }
};

module.exports = feedImage;