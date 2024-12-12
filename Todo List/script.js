function add(){
    event.preventDefault();
    let lii = document.getElementById("data");
    let btn = document.createElement("button");
    btn.textContent = "Delete Task";
    lii.appendChild(btn);
    let list = document.getElementById("list");
    let task = document.getElementById("task").value;
    let item = document.createElement("li");
    item.textContent = task;
    list.appendChild(item);





    // let list = document.getElementById("list");
    // let task = document.getElementById("task").value;
    // let items = document.createElement("li");
    // let li = document.getElementById("data");
    // let btn = document.createElement("button");
    // btn.textContent = "Delete Task";
    // li.appendChild(btn);
    // items.textContent = task;
    // list.appendChild(items);

}