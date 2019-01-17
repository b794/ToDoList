var tasks = [];

document.getElementById("add").onclick = function(){
  if(document.getElementById('newtask').value == "")
  {
    var x = document.createElement("p");
    x.id = "warning";
    var y = document.createTextNode("Please add your task");
    x.appendChild(y);
    document.body.appendChild(x);
  }
  else {
    tasks.push(document.getElementById('newtask').value);
    var a = document.createElement("li");
    var b = document.createTextNode(document.getElementById('newtask').value);
    a.appendChild(b);
    document.body.appendChild(a);
    document.getElementById('warning').style.display = "none";
    }
}
