const express = require('express');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const sequelize = require('../../../../database/connection');
const secretObj = require('../../../../config/jwt');

const app = express();
const storages = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../../../../uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}-${Date.now()}`);
  }
});

const upload = multer({ storage: storages });

const path = new Array();
let decoded;

app.post('/', upload.array('userfile', 10), (req, res) => {
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
  // file check
  const files = req.files;
  if (req.file) {
    for (let i = 0; i <= files.length; i++) {
      path[i] = `http://13.125.186.175:8080/static/${req.files[i].filename}`;
    }
  } else {
    path[0] = 'http://13.125.186.175:8080/static/image/1.jpg';
  }
  sequelize.models.feed.create({
    user_id: decoded.uid,
    feedContents: req.body.feedContents
  }).then((result) => {
    for (let u = 1; u <= path.length; u++) {
      sequelize.models.feedImage.create({
        feed_id: result.id,
        feedImage: path[u]
      });
    }
    res.json({
      success: true,
      error: false
    });
  }).catch((err) => {
    if (err) {
      console.log('게시물 삭제 에러');
      console.log(err);
      res.json({
        success: false,
        error: err
      });
    }
  });
});

module.exports = app;


router.post('/', (req, res) => {
  sequelize.models.user.create({
    userId: req.body.userId,
    userPw: req.body.userPw
  }).then(() => {
    console.log('성공');
  }).catch((err) => {
    if(err) {
      console.log(err);
      console.log('에러');
    }
  });
});