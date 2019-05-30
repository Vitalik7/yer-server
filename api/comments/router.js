const express = require('express');
const Comment = require('./model')
const _ = require('lodash')
const router = express.Router();


router.get('/presents', (req, res, next) => {
    console.log('GET');
    Comment.find()
        .then(present => {
            res.json({present})
        })
        .catch(next)
});

router.get('/presents/:index', (req, res, next) => {
    let id = req.params.index;
    console.log(req.params)
    Comment.findOne({ index: id })
        .then(function (comment) {
        res.json({comment})
    }).catch(next)
});

router.put(`/presents/:id`, function (req, res, next) {
    Comment.findByIdAndUpdate(req.params.id, req.body.present, function (err, place) {
        console.log('place', place)
        res.send(place);
      })
})

router.post('/presents', (req, res, next) => {
  console.log('POST');
    new Comment(req.body.present)
        .save()
        .then(function (presents) {
            res.json({presents})
        })
        .catch(next)
});

// router.get('/comment/:id', (req, res, next) => {
//     let id = req.params._id;
//     Comment.findOne({ id: id })
//         .then(function (comment) {
//         res.json({comment})
//     }).catch(next)
// });

// router.post('/comment/:id', function (req, res) {
//     Comment.findById(req.params.id, function (err, theUser) {
//         if (err) {
//             console.log(err);
//         } else {
//             theUser.likes += 1;
//             theUser.save();
//             console.log(theUser.likes);
//             res.send({likeCount: theUser.likes}); //something like this...
//         }
//     });
// });

// router.get('/category/:category', (req, res, next) => {
//     Comment
//         .find({category: req.params.category})
//         .then(comments => {
//             res.json({comments})
//         })
//         .catch(next)
// });

module.exports = router;
