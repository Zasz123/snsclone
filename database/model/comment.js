const Sequelize = require('sequelize');

const reply = {
    feed_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    writer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    writerProfile: {
        type: Sequelize.STRING,
        allowNull: true
    },
    commentContent: {
        type: Sequelize.STRING,
        allowNull: false
    }
};

module.exports = reply;
