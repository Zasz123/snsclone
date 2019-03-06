const express = require('express');

const app = express();
const sequelize = require('../../../../database/connection');

app.get('/:id', (req, res) => {
    sequelize.models.feed.findAll({
	    include: [sequelize.models.user],
	    order: [['id', 'DESC']]
    }, {
    	where: {
		user_id: req.params.id
	}
    }).then((result) => {
    	res.json({
		result
	});
    }).catch((err) => {
    	if(err) {
		console.log('특정 유저 피드 에러');
		console.log(err);
		res.json({
			success: false,
			error: err
		});
	}
    });
});

module.exports = app;
