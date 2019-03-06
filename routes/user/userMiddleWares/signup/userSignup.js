const express = require('express');

const app = express();
const sequelize = require('../../../../database/connection');

app.post('/', (req, res) => {
    sequelize.models.user.create({
        userId: req.body.userId,
        userPw: req.body.userPw,
        nickName: req.body.nickName,
        realName: req.body.realName
    }).then(() => {
        console.log('회원가입 성공');
        res.json({
            success: true,
            error: false
        });
    
    }).catch((err) => {
        if(err) {
            console.log('회원가입 실패');
            console.log(err);
            res.json({
                success: false,
                error: err
            });
        }
    });
});

module.exports = app;
