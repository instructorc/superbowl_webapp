const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://normal_user:dunwoody2017@ds117311.mlab.com:17311/nflapptest', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get all superbowls  -  coding convention 1
router.get('/superbowls', (req, res) => {
    connection((db) => {
        db.collection('superbowls')
            .find()
            .toArray()
            .then((superbowls) => {
                response.data = superbowls;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.get('/superbowls/:SB', (req, res) => {
    
    connection((db) => {
        db.collection('superbowls')
            .find({ SB:req.params.SB })
            .toArray()
            .then((superbowls) => {         //The .then() method returns a Promise.  It takes two arguments: callback functions for the success and failure cases of the Promise
                response.data = superbowls;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});


//Get a specific superbowl - coding convention 2
/*router.get('/superbowls/:SB', function(req, res) {
    console.log('Requesting a specific superbowl');
    superbowls.find(req.params.SB)
        .exec(function(err, superbowls) {
            if (err) {
                console.log('Error getting the superbowl');
            } else {
                response.data = superbowls;
                res.json(superbowls);
            }
        });
});*/

module.exports = router;