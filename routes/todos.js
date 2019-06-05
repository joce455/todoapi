var express = require('express');
var router = express.Router();
var helpers = require('../helpers/todos')

router.get('/',helpers.getTodos)
.post('/',helpers.createTodo)
.get('/:id', helpers.getTodo)
.put('/:id', helpers.editTodo)
.delete('/:id', helpers.deleteTodo);

module.exports = router;
