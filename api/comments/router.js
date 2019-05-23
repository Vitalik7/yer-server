const express = require('express');
const Comment = require('./model')
const router = express.Router();

router.get('/presents', (req, res, next) => {
    console.log('GET');
    Comment.find()
        .then(present => {
            res.json({present})
        })
        .catch(next)
});

router.put('/presents/:index', function (req, res) {
    var present = req.present;
    console.log('req', req)
    console.log('res', res)

    present = _.extend(present, req.body);

    console.log('present', present)

    present.save(function(err) {
    if (err) {
        console.log('err', err)
        return res.send('/presents', {
            errors: err.errors,
            present: present
        });
    } else {
        res.jsonp(present);
        console.log('seccess', present)
    }

});

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
