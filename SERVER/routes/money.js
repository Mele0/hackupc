var express = require('express');
var router = express.Router();
const money_result = require('../models/money')

router.get('/', function(req, res){
   let user = req.query.user
   res = money_result.get_money_by_id(user)

});
router.post('/', function(req, res){
   res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;