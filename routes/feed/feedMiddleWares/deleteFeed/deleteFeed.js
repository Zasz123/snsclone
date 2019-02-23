const express = require('express');
const jwt = require('jsonwebtoken');

const sequelize = require('../../../../database/connection');
const secretObj = require('../../../../config/jwt');

const app = express();

let decoded;

app.post('/:id', (req, res) => {
    console.log('1');
    // login check
    if(req.body.token) {
        console.log('1')
        let token = req.body.token;
        decoded = jwt.verify(token, secretObj.secret);
    } else {
        res.status(403).json({
            success: false,
            error: "not logged in"
        });
    }
    sequelize.models.feed.findOne({
        where: { id: req.params.id }
    }). then((feed) => {
            if(feed.dataValues.user_id === decoded.uid) {
                sequelize.models.feed.destroy({
                    where: {id: req.params.id}
                }).then(() => {
                    console.log('게시물 삭제에 성공하셧습니다.');
                    res.json({
                        success: true,
                        error: false
                    });
                }).catch((err)=> {
                    console.log(err);
                })
            } else {
                res.status(403).json({
                    success: false,
                    error: "You do not have permission."
                })
            }
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
