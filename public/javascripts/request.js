var input = document.getElementById("task");
var api='http://localhost:3000/';

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        axios.post(api+'todos', {
            name: input.value
          })
          .then(function (response) {
            window.location.reload(true);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  }); 

  function doneTask(id){
    axios.put(api+'todos/'+id,{
      completed: true
    })
    .then(function (response) {
      window.location.reload(true);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  function deleteTask(id){
    axios.delete(api+'todos/'+id)
    .then(function (response) {
      window.location.reload(true);
    })
    .catch(function (error) {
      console.log(error);
    });
  }