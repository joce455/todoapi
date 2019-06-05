var express = require('express');
var router = express.Router();
const axios = require('axios');
var config = require('../config/api');

/* GET home page. */
router.get('/', function(req, res, next) {

  axios.get(config.url+'todos')
  .then(response => {
    res.render('index',{"todos": response.data});
  })
  .catch(error => {
    console.log(error);
  });
});

module.exports = router;
