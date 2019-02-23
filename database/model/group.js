const Sequelize = require('sequelize');

const group = {
    groupName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    host_id : {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}

module.exports = group;