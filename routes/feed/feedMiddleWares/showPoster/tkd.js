const express = require('express');

const sequelize = require('../../../../database/connection');

const app = express();


app.get('/:id', (req, res) => {
  sequelize.models.feed.findOne({
    where: { id: req.params.id },
    attributes: ['feedContents', 'heart', 'createdAt'],
    include: [{ model: sequelize.models.user, attributes: ['nickName', 'realName', 'profile'] },
      { model: sequelize.models.feedHeart, attributes: ['user_id'], include: [{model: sequelize.models.user, attributes: ['realName', 'nickName', 'profile']}] },
      { model: sequelize.models.feedImage, attributes: ['feedImage'] }]
  }).then((feed) => {
    sequelize.models.comment.findAll({
      attributes: ['commentContent', 'heart', 'createdAt'],
      where: { feed_id: req.params.id },
      include: [{ model: sequelize.models.user, attributes: ['nickName', 'realName', 'profile'] },
      { model: sequelize.models.comHeart, attributes: ['user_id'], include: [{model: sequelize.models.user, attributes: ['realName', 'nickName', 'profile']}] }]
    }).then((comment) => {
      res.json({
        feed,
        comment
      });
    });
  }).catch((err) => {
    if (err) {
      console.log('게시글 상세조회 에러');
      console.log(err);
      res.json({
        success: false,
        error: err
      });
    }
  });
});

module.exports = app;
