var express = require('express');
var router = express.Router();
const money_result = require('../models/money')

router.get('/', async function(req, res){
   let user = req.query.user
   result = await money_result.get_balance_by_id(user)
   
   var res_string = JSON.stringify(result);
   console.log(res_string)
   res.end(res_string)

});
router.post('/', function(req, res){
   res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;