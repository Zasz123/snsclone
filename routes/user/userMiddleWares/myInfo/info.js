const express = require('express');
const jwt = require('jsonwebtoken');

const sequelize = require('../../../../database/connection');
const secretObj = require('../../../../config/jwt');

const app = express();


let decoded;

app.post('/', (req, res) => {
  // login check
  if (req.body.token) {
    let token = req.body.token;
    let tokens = token.replace( /\"/gi, "");
    decoded = jwt.verify(tokens, secretObj.secret);
  } else {
    console.log('not logged in');
    res.status(403).json({
      success: false,
      error: 'not logged in'
    });
  }
  sequelize.models.user.findOne({
    where: {
      id: decoded.uid
    }
  }).then((result) => {
    res.json({
      result
    });
  }).catch((err) => {
    if (err) {
      console.log('내 정보 에러');
      console.log(err);
      res.json({
        success: true,
        error: err
      });
    }
  });
});

module.exports = app;
