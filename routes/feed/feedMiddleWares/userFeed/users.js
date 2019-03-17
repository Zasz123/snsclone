const express = require('express');

const app = express();
const sequelize = require('../../../../database/connection');

app.get('/:id', (req, res) => {
  sequelize.models.feed.findAll({
    order: [['id', 'DESC']],
    attributes: ['feedContents', 'heart', 'createdAt'],
    include: [
    //   { model: sequelize.models.user, attributes: ['realName', 'nickName']},
    { model: sequelize.models.feedHeart, attributes: ['user_id'], include: [{model: sequelize.models.user, attributes: ['realName', 'nickName', 'profile']}] },
    { model: sequelize.models.feedImage, attributes: ['feedImage'] }],
    order: [['id', 'DESC']]
  }, {
    where: {
      user_id: req.params.id
    }
  }).then((result) => {
    sequelize.models.follow.findAll({
      where: { followed_id: req.params.id },
      attributes: ['follower_id'],
      include: [{
        model: sequelize.models.user,
        attributes: ['realName', 'nickName', 'profile']
      }]
    }).then((follower) => {
      sequelize.models.user.findOne({
        attributes: ['realName', 'nickName', 'profile'],
        where: {
          id: req.params.id
        }
      }).then((users) => {
        res.json({
          users,
          follower,
          feeds: result
        });
      });
    });
  }).catch((err) => {
    if (err) {
      console.log('특정 유저 피드 에러');
      console.log(err);
      res.json({
        success: false,
        error: err
      });
    }
  });
});

module.exports = app;
