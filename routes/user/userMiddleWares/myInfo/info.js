const express = require('express');
const jwt = require('jsonwebtoken');

const sequelize = require('../../../../database/connection');
const secretObj = require('../../../../config/jwt');

const app = express();


let decoded;

app.post('/', (req, res) => {
  // login check
  if (req.body.token) {
    const token = req.body.token;
    decoded = jwt.verify(token, secretObj.secret);
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
