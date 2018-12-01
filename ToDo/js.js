var text = document.getElementById('newTask');
var date = document.getElementById('date');
var time = document.getElementById('time');

document.getElementById('addTask').onclick = function(){

  var node = document.createElement("li");
  node.className = "list";
  var x = document.createTextNode(date.value + " " + time.value + " " + text.value);
  node.appendChild(x);
  document.getElementById('tasks').appendChild(node);

  for (var i = 0; i < node.length; i++) {
    var span = document.createElement("span");
    var y = document.createTextNode("x");
    span.appendChild(y);
    node.appendChild(span);
  }
	document.getElementById('tasks').style.display = "block";
}
