require('dotenv').config();
const Sequelize = require('sequelize');

const model = require('./model');

const sequelize = new Sequelize('yang', 'root', 'root', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql'
});

sequelize.authenticate()

    .then(() => {
        console.log('DB연결 성공');
    }).catch((err) => {
        if(err) {
            console.log('DB연결 실패');
            console.log(err);
        }
    });

const User = sequelize.define('user', model.user);
const Feed = sequelize.define('feed', model.feed);
const Comments = sequelize.define('comment', model.comment);
const FeedHeart = sequelize.define('feedHeart', model.feedHeart);
const ComHeart = sequelize.define('comHeart', model.comHeart);
// const Home = sequelize.define('home', model.home);
// const Group = sequelize.define('group', model.group);
// const User_Group = sequelize.define('user_group', model.user_group);

User.hasMany(Feed, {foreignKey: 'user_id'});
Feed.belongsTo(User, {foreignKey: 'user_id'});

Feed.hasMany(Comments, {foreignKey: 'feed_id'});
Comments.belongsTo(Feed, {foreignKey: 'feed_id'});

Feed.hasMany(FeedHeart, {foreignKey: 'feed_id'});
FeedHeart.belongsTo(Feed, {foreignKey: 'feed_id'});

User.hasMany(Feed, {foreignKey: 'user_id'});
Feed.belongsTo(User, {foreignKey: 'user_id'});

// Group.hasMany(Home, {foreignKey: 'group_id'});
// Home.belongsTo(Group, {foreignKey: 'group_id'});

// User.belongsToMany(Group, {
//     through: User_Group, foreignKey: 'user_id'
// });
// Group.belongsToMany(User, {
//     through: User_Group, foreignKey: 'group_id'
// });

sequelize.sync({force: true}).then(() => {
    console.log('table created');
}).catch((err) => {
    if(err) {
        console.log('table create error');
        console.log(err);
    }
});

module.exports = sequelize;
