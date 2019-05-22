const express = require('express');
const Comment = require('./model')
const router = express.Router();

router.get('/presents', (req, res, next) => {
    console.log('GET');
    Comment.find()
        .then(presents => {
            res.json({presents})
        })
        .catch(next)
});

// router.post('/comment', (req, res, next) => {
//   console.log('POST');
//     new Comment(req.body.comment)
//         .save()
//         .then(function (comments) {
//             res.json({comments})
//         })
//         .catch(next)
// });

module.exports = router;
