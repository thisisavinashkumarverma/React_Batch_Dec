var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  // res.json({responseData: req.session});
  console.log("session deils");
  console.log(req.session);
  res.send(JSON.stringify( req.session));
});

module.exports = router;
