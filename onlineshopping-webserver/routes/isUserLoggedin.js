var express = require('express');
const { Session } = require('express-session');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.send({ isLoggedIn: !!req.session.username, username: req.session.username || null });
res.send(JSON.stringify({sessionDetails: req.session}));
});

module.exports = router;
