var express = require('express');
var router = express.Router();
const biblio_result = require('../models/biblio')

router.get('/', async function(req, res){
   let user = req.query.user
   let date = req.query.date
   result = await biblio_result.get_hours_by_id(user, date)
   
   var res_string = JSON.stringify(result);
   console.log(res_string)
   res.end(res_string)

});
router.post('/', async function(req, res){
   let user = req.body.user
   result = await biblio_result.update_hours(user)
   res.end(result)
});

//export this router to use in our index.js
module.exports = router;