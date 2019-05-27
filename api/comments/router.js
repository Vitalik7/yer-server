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


    // Comment.findOneAndUpdate(req.params.id, req.body, (err, doc) => {
    //     if (err) {
    //         console.log("Something wrong when updating data!");
    //     }
    //     console.log(req.body);
    //     console.log(doc);
    //     return res.json(doc)
    //     // return res.status(200).send(doc)
    // })


    Comment.findByIdAndUpdate(
        // the id of the item to find
        req.params.id,
        
        // the change to be made. Mongoose will smartly combine your existing 
        // document with this change, which allows for partial updates too
        req.body,
        
        // an option that asks mongoose to return the updated version 
        // of the document instead of the pre-updated one.
        {new: false},
        
        // the callback function
        (err, todo) => {
            console.log('req.body', req.body)
            console.log('todo', todo)
        // Handle any possible database errors
            if (err) return res.status(500).send(err);
            return res.send(todo);
        }
    )


    // Comment.findById(req.params.id, (err, comm) => {
    //     console.log('comm', comm)
    //     if (err) return res.status(500).send(err)
    //     return res.status(200).send(comm)
    // });


    // console.log(req.body)
    // req.params.update(req.body, (err, result) => {
    //     if (err) return next(err);
    //     res.json(result);
    //   });

    // Comment.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(upd) {
    //     Comment.findOne({_id: req.params.id}).then(function(comm) {
    //         console.log('comm', req.body)
    //         // comm.checked = true
    //         res.json(req.body)
    //         // res.send(req.body)
    //     })
    // })
    


    // var present = req.present;
    // console.log('req', req)
    // console.log('res', res)

    // present = _.extend(present, req.body);

    // console.log('present', present)
    // res.send(present)

    // present.save(function(err) {
    //     if (err) {
    //         console.log('err', err)
    //         return res.send('/presents', {
    //             errors: err.errors,
    //             present: present
    //         });
    //     } else {
    //         res.jsonp(present);
    //         console.log('seccess', present)
    //     }
    // })
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
