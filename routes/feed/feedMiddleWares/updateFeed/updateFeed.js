const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const sequelize = require('../../../../database/connection');
const secretObj = require('../../../../config/jwt');

let decoded;

app.post('/:id', (req, res) => {
  let token = req.body.token;
  let tokens = token.replace( /\"/gi, "" );
  // login check
  if (tokens) {
    const token = req.body.token;
    decoded = jwt.verify(token, secretObj.secret);
  } else {
    console.log('not logged in');
    res.status(403).json({
      success: false,
      error: 'not logged in'
    });
  }
  sequelize.models.feed.findOne({
    where: {
      id: req.params.id
    }
  }).then((feed) => {
    if (feed.dataValues.user_id === decoded.uid) {
      sequelize.models.feed.update({
        title: req.body.title,
        contents: req.body.contents
      },
      {
        where: {
          id: req.params.id
        }
      }).then(() => {
        res.json({
          success: true,
          error: false
        });
      });
    } else {
      console.log('게시글 수정 권한이 없습니다.');
      res.status(403).json({
        success: false,
        error: 'You do not have permission.'
      });
    }
  }).catch((err) => {
    if (err) {
      console.log('feed 수정 오류');
      console.log(err);
      res.json(err, {
        success: false
      });
    }
  });
});

module.exports = app;
