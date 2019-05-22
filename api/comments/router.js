const express = require('express');
const Present = require('./model')
const router = express.Router();

router.get('/presents', (req, res, next) => {
    console.log('GET');
    Present.find()
        .then(present => {
            res.json({present})
        })
        .catch(next)
});

router.post('/present', (req, res, next) => {
  console.log('POST');
    new Present(req.body.present)
        .save()
        .then(function (presents) {
            res.json({presents})
        })
        .catch(next)
});

router.put('/presents/:id', function(req, res){
	console.log(1111, req.body, res);
});

module.exports = router;
