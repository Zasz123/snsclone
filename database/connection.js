require('dotenv').config();
const Sequelize = require('sequelize');

const model = require('./model');

const sequelize = new Sequelize('yang', 'root', 'root', {
  host: '127.0.0.1',
  port: '3306',
  dialect: 'mysql',
});

sequelize.authenticate()

  .then(() => {
    console.log('DB연결 성공');
  }).catch((err) => {
    if (err) {
      console.log('DB연결 실패');
      console.log(err);
    }
  });

const User = sequelize.define('user', model.user);
const Feed = sequelize.define('feed', model.feed);
const Comments = sequelize.define('comment', model.comment);
const FeedHeart = sequelize.define('feedHeart', model.feedHeart);
const ComHeart = sequelize.define('comHeart', model.comHeart);
const FeedImages = sequelize.define('feedImage', model.feedImage);
const Follow = sequelize.define('follow', model.follow);

User.hasMany(Feed, { foreignKey: 'user_id' });
Feed.belongsTo(User, { foreignKey: 'user_id' });

Feed.hasMany(Comments, { foreignKey: 'feed_id' });
Comments.belongsTo(Feed, { foreignKey: 'feed_id' });

User.hasMany(Comments, { foreignKey: 'user_id' });
Comments.belongsTo(User, { foreignKey: 'user_id' });

// User.hasMany(Feed, { foreignKey: 'user_id' });
// Feed.belongsTo(User, { foreignKey: 'user_id' });

Feed.hasMany(FeedImages, { foreignKey: 'feed_id' });
FeedImages.belongsTo(Feed, { foreignKey: 'feed_id' });

Feed.hasMany(FeedHeart, { foreignKey: 'feed_id' });
FeedHeart.belongsTo(Feed, { foreignKey: 'feed_id' });

User.hasMany(FeedHeart, { foreignKey: 'user_id' });
FeedHeart.belongsTo(User, { foreignKey: 'user_id' });

Comments.hasMany(ComHeart, { foreignKey: 'comment_id' });
ComHeart.belongsTo(Comments, { foreignKey: 'comment_id' });

User.hasMany(ComHeart, { foreignKey: 'user_id' });
ComHeart.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Follow, { foreignKey: 'follower_id' });
Follow.belongsTo(User, { foreignKey: 'follower_id' });

// User.belongsToMany(Feed, {
//   through: FeedHeart, foreignKey: 'user_id'
// });
// Feed.belongsToMany(User, {
//   through: FeedHeart, foreignKey: 'feed_id'
// });


sequelize.sync({ force: false }).then(() => {
  console.log('table created');
}).catch((err) => {
  if (err) {
    console.log('table create error');
    console.log(err);
  }
});

module.exports = sequelize;
