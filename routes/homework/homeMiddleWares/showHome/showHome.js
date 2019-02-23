const express = require('express');

const sequelize = require('../../../../database/connection');

const app = express();


app.get('/list/:id', (req, res) => {
    sequelize.models.home.findAll({
        group_id: req.params.id
    })
    .then((result) => {
        res.json({
            success: true,
            error: false,
            result
        })
    }).catch((err) => {
        if(err) {
            console.log('숙제 조회 에러');
            console.log(err);
            res.json({
                success: false,
                error: err
            });
        } 
    });
});

module.exports = app;