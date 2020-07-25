function addItem() {
    var item = document.getElementById("inp1");
    if (item.value == "") {
        alert("Input field is empty!" + "\n" + "Please enter something");
    }
    else {
        var list = document.getElementById("list");
        var textField = document.createElement("li");
        textField.setAttribute("id", "li1");
        var text = document.createTextNode(item.value);
        textField.appendChild(text);
        list.appendChild(textField);
        item.value = "";
        var btn1 = document.createElement("button");
        textField.appendChild(btn1);
        btn1.setAttribute("id", "delete");
        btn1.setAttribute("onclick", "del(this)");
        btn1.setAttribute("class","fa fa-trash");
        var btn2 = document.createElement("button");
        textField.appendChild(btn2);
        btn2.setAttribute("id", "edit");
        btn2.setAttribute("onclick", "edit(this)");
        btn2.setAttribute("class","fa fa-pencil-square-o");
        var space = document.createElement("br");
        list.appendChild(space);
    }
}
function delAll(){
    var data = document.getElementById("list");
    data.innerHTML = "";
}
function del(e){
    e.parentNode.remove();
}
function edit(e){
    var editVal = prompt("Enter to-do item");
    e.parentNode.firstChild.nodeValue = editVal;
    console.log(e.parentNode.firstChild);
}