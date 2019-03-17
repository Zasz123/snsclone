const epxress = require('express');

const app = epxress();
const sequelize = require('../../../../database/connection');

app.get('/', (req, res) => {
  sequelize.models.feed.findAll({
    order: [['id', 'DESC']],
    attributes: ['feedContents', 'heart', 'createdAt'],
    include: [{ model: sequelize.models.user, attributes: ['nickName', 'realName', 'profile'] },
      { model: sequelize.models.feedHeart, attributes: ['user_id'] },
      { model: sequelize.models.feedImage, attributes: ['feedImage'] }]
  })
    .then((result) => {
      res.json({
        result
      });
    }).catch((err) => {
      if (err) {
        console.log('글 리스트 조회 에러');
        console.log(err);
        res.json({
          success: false,
          error: err
        });
      }
    });
});

module.exports = app;
