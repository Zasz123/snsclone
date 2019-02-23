const Sequelize = require('sequelize');

const user_group = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    group_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false
    }
};

module.exports = user_group;
