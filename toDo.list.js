document.addEventListener('DOMContentLoaded', function() {
    var field = document.getElementById('todo_list');

    document.getElementById('add').onclick=function () {
        var new_todo =document.getElementById('new_todo').value;
        if (new_todo === '') {
            alert("Вот ты ленивый !У тебя что вообще нет дел!");
        } else {
        document.getElementById("new_todo").value = "";
        builder(new_todo);
    }};
    function builder(new_todo) {
        var li = document.createElement("li");
        field.appendChild(li);
        li.innerHTML =new_todo;
    }
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');

    }
}, false);
// for ( )
document.getElementById("delete").onclick=function () {
alert("минус дело !");
var elements = document.getElementsByClassName('checked');
    for (var i = elements.length - 1; i >= 0; i--) {

       elements[i].parentNode.removeChild(elements[i]);
    }
}

});
