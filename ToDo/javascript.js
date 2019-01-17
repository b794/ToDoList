var tasks = [];
var close = document.getElementsByClassName('list');

document.getElementById("add").onclick = function(){
  if(document.getElementById('newtask').value == "" || document.getElementById('time').value =="")
  {
    alert('You must write something!')

  }
  else {
    tasks.push(document.getElementById('newtask').value+ " " + document.getElementById('time').value );
    var a = document.createElement("li");
    var b = document.createTextNode(document.getElementById('newtask').value);
    a.appendChild(b);
    document.body.appendChild(a);
    var span = document.createElement("span");
    var txt = document.createTextNode( document.getElementById('time').value);
    span.appendChild(txt);
    a.appendChild(span);
    document.getElementById('newtask').value ="";
    document.getElementById('time').value = "";
    a.className = "list";
    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function(){
        var li = this;
        li.style.display = "none";
      }
    }
}}
