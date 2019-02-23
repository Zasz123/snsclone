const Sequelize = require('sequelize');

const home = {
    group_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    task: {
        type: Sequelize.STRING,
        allowNull: false
    },

}
module.exports = home;