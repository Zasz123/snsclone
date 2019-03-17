const express = require('express');
const jwt = require('jsonwebtoken');

const sequelize = require('../../../../database/connection');
const secretObj = require('../../../../config/jwt');

const app = express();

let decoded;

app.post('/:id', (req, res) => {
  let token = req.body.token;
  let tokens = token.replace( /\"/gi, "" );
  // login check
  if (tokens) {
    const token = req.body.token;
    decoded = jwt.verify(token, secretObj.secret);
  } else {
    res.status(403).json({
      success: false,
      error: 'not logged in'
    });
  }
  sequelize.models.comment.create({
    feed_id: req.params.id,
    user_id: decoded.uid,
    commentContent: req.body.commentContent
  }).then(() => {
    res.json({
      success: true,
      error: false
    });
  }).catch((err) => {
    if (err) {
      console.log('게시물 작성 에러');
      console.log(err);
      res.json({
        success: false,
        error: err
      });
    }
  });
});

module.exports = app;
