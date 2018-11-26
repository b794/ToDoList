var text = document.getElementById('newTask');
var date = document.getElementById('date');
var time = document.getElementById('time');
var tasks = [];


document.getElementById('addTask').onclick = function(){


  tasks.push(text.value + " " + time.value + " " + date.value);
  
  document.getElementById('tasks').innerHTML = tasks;


}
