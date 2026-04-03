var express = require('express');
var router = express.Router();
var dbUtil = require("./common/dbutil");

/* GET home page. */
router.post('/', function(req, res, next) {
    dbUtil.getMongodbConnection(req.body, 'usercredentials', 'find').then((response) => {
        if (response.length) {
            req.session.username = response[0].username; // Store username in session
            req.session.isUserLoggedIn = true; // Set a flag to indicate the user is logged in
            res.json({msg: 'Valid Credentials', success: true});
        } else {
            req.session.isUserLoggedIn = false;
            res.send(JSON.stringify({msg: 'Invalid Credentials'}));
        }
    }).catch((err) => {
        console.log(err)
    })
  
});


module.exports = router;
