const epxress = require('express');
const jwt = require('jsonwebtoken');

const sequelize = require('../../../../database/connection');
const secretObj = require('../../../../config/jwt');

const app = epxress();

let decoded;

app.post('/:id', (req, res) => {
    // login check
    if(req.body.token) {
        let token = req.body.token,
        decoded = jwt.verify(token, secretObj.secret);
    } else {
        res.status(403).json({
            success: false,
            error: "not logged in"
        });
    }
    sequelize.models.heart.delete({
        where: {
            post_id: req.params.id,
            user_id: decoded.uid
        }
    }).then(() => {
        res.json({
            success: true,
            error: false
        });
    }).catch((err) => {
        if(err) {
            console.log('좋아요 삭제 에러');
            console.log(err);
            res.json({
                success: false,
                error: err
            });
        }
    });
});

module.exports = app;
