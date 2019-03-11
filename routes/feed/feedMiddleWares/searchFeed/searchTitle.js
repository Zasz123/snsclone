const express = require('express');

const app = express();
const sequelize = require('../../../../database/connection');

// query 값은 title
app.get('/', (req, res) => {
  sequelize.models.feed.findAll({
    where: {
      title: req.query.title
    },
    include: [sequelize.models.user]
  }).then((result) => {
    console.log('제목으로 찾기 성공');
    res.json(result);
  }).catch((err) => {
    if (err) {
      console.log('제목으로 찾기 에러');
      console.log(err);
      res.json({
        success: false,
        error: err
      });
    }
  });
});

module.exports = app;
