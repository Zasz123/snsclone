const express = require('express');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const sequelize = require('../../../../database/connection');
const secretObj = require('../../../../config/jwt');

const app = express();

let _storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/home/ubuntu/dbguss/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + '-' + Date.now());
    }
});

let upload = multer({storage: _storage});

let path;
let decoded;

app.post('/', upload.single('userfile'), (req, res) => {
    // file check
    if(req.file) {
        path = '13.125.186.175/static/' + req.file.filename
    } else {
        path = '13.125.186.175/static/image/1.jpg'
    }
    // login check
    if(req.body.token) {
        let token = req.body.token;
        decoded = jwt.verify(token, secretObj.secret)
    } else {
        res.status(403).json({
            success: false,
            error: "not logged in"
        });
    }
    sequelize.models.user.update({
        profile: path
    },
    {
        where: {
            id: decoded.uid
        }
    }).then(() => {
        res.json({
            success: true,
            error: false
        });
    }).catch((err) => {
        if(err) {
            console.log('피로필 추가 에러');
            console.log(err);
            res.json({
                success: true,
                error: err
            });
        }
    });
});

module.exports = app;
