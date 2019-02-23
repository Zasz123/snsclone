const epxress = require('express');

const app = epxress();
const sequelize = require('../../../../database/connection');

// query 값은 userName
app.get('/', (req, res) => {
    sequelize.models.feed.findAll({
        include: [{
            model: sequelize.models.user,
            where: {
                userName: req.query.userName
            }
        }]
    }).then((result) => {
        res.json(result);
    }).catch((err) => {
        if(err) {
            console.log('글쓴이로 찾기 에러');
            console.log(err);
            res.json({
                success: false,
                error: err
            });
        }
    });
});

module.exports = app;
