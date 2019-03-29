const express = require('express');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const sequelize = require('../../../../database/connection');
const secretObj = require('../../../../config/jwt');

const app = express();
const storages = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/home/ubuntu/snsclone/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}-${Date.now()}`);
  }
});

const upload = multer({ storage: storages });

const path = new Array();
let decoded;

app.post('/', upload.any('userfile', 10), (req, res) => {
	console.log(req.body);  
  if(req.body.token) {
    let token = req.body.token;
    let tokens = token.replace( /\"/gi, "" );
    decoded = jwt.verify(tokens, secretObj.secret);
  } else {
    console.log('not logged in');
    res.status(403).json({
      success: false,
      error: 'not logged in'
    });
  }
  // file check
  if (req.files && req.files.length) {
    const files = req.files;
    for (let i = 1; i <= files.length; i++) {
	    console.log(i);
      path[i-1] = 'http://13.125.186.175:8080/static/'+req.files[i-1].filename;
    }
  } else {
    path[0] = 'http://13.125.186.175:8080/static/image/1.jpg';
  }
  sequelize.models.feed.create({
    user_id: decoded.uid,
    feedContents: req.body.feedContents
  }).then((result) => {
	  console.log(path.length);
    for (let u = 1; u <= path.length; u++) {
      sequelize.models.feedImage.create({
        feed_id: result.id,
        feedImage: path[u-1]
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
