var express = require('express');
var router = express.Router();
var dbUtil = require("./common/dbutil");

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log("frm w\eb service")
    console.log("from product details")
    console.log(req.session);
      dbUtil.getMongodbConnection({}, 'productDetails', 'find').then((response) => {
        if (response.length) {
            res.send(JSON.stringify({data: response, success: true}));
        } else {
            res.send(JSON.stringify({msg: 'Error whiel fetching data from DB', success: false}));
        }
    }).catch((err) => {
        console.log(err)
    });
});

module.exports = router;
