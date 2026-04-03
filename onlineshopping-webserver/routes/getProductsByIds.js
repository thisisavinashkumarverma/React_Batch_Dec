var express = require('express');
const dbUtil = require('./common/dbutil');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log("getProductsByIds api called")
    var productIds = req.body.productIds;
    productIds = productIds.map(id => parseInt(id)); // Convert string IDs to integers
    dbUtil.getMongodbConnection({productIds}, 'productDetails', 'findProducts').then((response) => {
        console.log('response')
        console.log(response)   
        res.send(JSON.stringify({data: response, success: true}));  
    }).catch((err) => {
        console.log(err)
    });            
});

module.exports = router;
