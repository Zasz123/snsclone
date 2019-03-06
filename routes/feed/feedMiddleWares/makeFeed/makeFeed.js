const express = require('express');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const sequelize = require('../../../../database/connection');
const secretObj = require('../../../../config/jwt');

const app = express();
console.log('0');
let _storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/home/ubuntu/snsclone/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + '-' + Date.now());
    }
});
console.log('1');

const upload = multer({ storage: _storage });

let path;
let decoded;

app.post('/', upload.single('userfile'), (req, res) => {
    // file check
	console.log('2');
    if(req.file) {
        path = 'http://13.125.186.175/static/' + req.file.filename
    } else {
        path = 'http://13.125.186.175/static/image/1.jpg'
    }
    // login check
    if(req.body.token) {
        let token = req.body.token;
        decoded = jwt.verify(token, secretObj.secret);
    } else {
        res.status(403).json({
            success: false,
            error: "not logged in"
        });
    }
    sequelize.models.feed.create({
        user_id: decoded.uid,
        userProfile: decoded.pro,
        feedImage: path,
        feedContents: req.body.feedContents
    }).then(() => {
        res.json({
            success: true,
            error: false
        });
    }).catch((err) => {
        if(err) {
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
