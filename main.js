
let inputItem = document.querySelector(".inputArea input")
let buttonAdd = document.querySelector(".inputArea button")
let todoItems = document.querySelector(".todos ul")


buttonAdd.addEventListener("click", function () {

    var currentItem = document.createElement("li");
    currentItem.innerText = inputItem.value;
    todoItems.appendChild(currentItem)
    inputItem.value = ""
    currentItem.addEventListener("click", function () {
        currentItem.style.textDecoration = "line-through";
    })
    currentItem.addEventListener("dblclick", function () {
        todoItems.removeChild(currentItem)
    })


})
    // currentItem.addEventListener("click", function () {
    //     currentItem.style.textDecoration = "line-through";
    // })





