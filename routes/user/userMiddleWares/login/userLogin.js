const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const sequelize = require('../../../../database/connection');
const secretObj = require('../../../../config/jwt');

app.post('/', (req, res) => {
  sequelize.models.user.findOne({
    where: { userId: req.body.userId }
  }).then((result, err) => {
    if (result) {
      const token = jwt.sign({
        uid: result.dataValues.id,
        userName: result.dataValues.userName,
      }, secretObj.secret, {
        expiresIn: '7d'
      });

      res.json({
        token
      });
    } else {
      console.log('회원가입 해주세요');
      console.log(err);
      res.json({
        success: false,
        error: 'signup please'
      });
    }
  }).catch((err) => {
    if (err) {
      console.log('로그인 에러');
      console.log(err);
      res.json({
        success: false,
        error: err
      });
    }
  });
});

module.exports = app;
