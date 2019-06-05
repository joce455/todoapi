var db = require('../models')

exports.getTodos= function (req, res, next){
    db.Todo.find().then(function (todos){
        res.status(201).json(todos)
    }). catch (e =>{
        console.log("Not todos finded");
    })
}

exports.createTodo=  function(req, res, next) {
    db.Todo.create(req.body).then(function (newTodo){
        res.status(201).json(newTodo)
    }). catch (e =>{
        console.log("bad insert");
    })
}

exports.getTodo=  function(req, res, next) {
    db.Todo.findById(req.params.id).then( (todoFinded) =>{
     res.status(200).json(todoFinded)
    } ) . catch (e =>{
     res.status(400).json("Todo Not found")
 })
 }

 exports.editTodo= function(req, res, next) {
    
    db.Todo.findOneAndUpdate({_id:req.params.id},req.body).then( (todoEdited) =>{
        res.status(200).json(todoEdited)
      
       } ) . catch (e =>{
        res.status(400).json("Todo Not could be edited")
    })
 }

 exports.deleteTodo= function(req, res, next) {
    
    db.Todo.findOneAndRemove({_id:req.params.id}).then( () =>{
        res.status(200).json("Deleted todo")
      
       } ) . catch (e =>{
        res.status(400).json("Todo Not could be deleted")
    })
 }

module.exports= exports;

