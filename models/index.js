var mongoose = require('mongoose');
var config = require('../config/database')

mongoose.set('debug',true)
mongoose.connect(config.url,{ useNewUrlParser: true });
mongoose.Promise=Promise;

module.exports.Todo=require('./todo')


