const Sequelize = require('sequelize');

const user = {
    userId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userPw: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nickName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    realName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    profile: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "13.125.186.175/static/image/1.jpg"
    }
};

module.exports = user;
