var express = require('express');
var router = express.Router();

router.post('/account/create',(req, res, next) => {
console.log(req.body)
  res.send("tianjia")
})
module.exports = router;
