var text = document.getElementById('newTask');
var date = document.getElementById('date');
var time = document.getElementById('time');
var li = document.createElement("li");
var a = document.getElementsByTagName('li');

document.getElementById('add').onclick = function(){

  document.getElementById("addNew").style.display = "block";

}


document.getElementById('addTask').onclick = function(){

  a.appendChild( date.value + " " + time.value + " " + text.value);
  document.getElementById('tasks').appendChild(a);
}
