var  i = 1000;
j=100;
function createTask(){
    
    var task = document.getElementById("task").value;
    if(task === ""){
        alert("Enter some todo task");
        return 0;
    }
    var  x = document.createElement("li");
    x.setAttribute('id',i);
    x.setAttribute('onclick', "edit_task(this.id)");
    var t = document.createTextNode(task);
    x.appendChild(t);
    document.getElementById("todo-list").appendChild(x);
    document.getElementById("task").value = "";
    
        var span = document.createElement("SPAN");
        span.setAttribute('id',j);
        span.setAttribute('onclick', "hide_task(this.id)");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        x.appendChild(span);

        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            }
        }
        i++,j++;
}
function edit_task(id){
    alert(id);
    var inputs = document.getElementById(id).innerHTML;
    var button = document.getElementsByTagName(button);
    button.innerHTML= "Update";
    document.getElementById(task).value = inputs;
    
    // alert(inputs);
   
}
function hide_task(id){
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
}