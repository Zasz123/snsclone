const epxress = require('express');

const app = epxress();
const sequelize = require('../../../../database/connection');

app.get('/', (req, res) => {
    sequelize.models.feed.findAll({
        include: [sequelize.models.user]
    })
    .then((result) => {
        res.json({
            des: result
        });
    }).catch((err) => {
        if(err) {
            console.log('글 리스트 조회 에러');
            console.log(err);
            res.json({
                success: false,
                error: err
            });
        }
    });
});

module.exports = app;
