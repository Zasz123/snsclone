const express = require('express');
const jwt = require('jsonwebtoken');

const sequelize = require('../../../../database/connection');
const secretObj = require('../../../../config/jwt');

const app = express();

let decoded;

// group id
app.post('/:id', (req, res) => {
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
    sequelize.models.home.create({
        group_id: req.params.id,
        task: req.body.task
    }).then(() => {
        res.json({
            success: true,
            error: false
        });
    }).catch((err) => {
        if(err) {
            console.log('홈워크 만들기 에러');
            console.log(err);
            res.json({
                success: false,
                error: err
            });
        }
    });
});

module.exports = app;
