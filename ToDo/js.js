var text = document.getElementById('newTask');
var date = document.getElementById('date');
var time = document.getElementById('time');
var a = document.getElementsByTagName('li');


document.getElementById('addTask').onclick = function(){

  var node = document.createElement("li");
  var x = document.createTextNode(date.value + " " + time.value + " " + text.value);
  node.appendChild(x);
  document.getElementById('tasks').appendChild(node);
	document.getElementById('tasks').style.display = "block";

}
