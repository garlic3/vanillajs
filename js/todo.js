const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos"

function deleteToDo(){
    const li =event.target.parentElement;
    toDos = toDos.filter(toDo =>toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintTodo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("sapn");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.style.width = "20px";
    button.style.height = "20px";
    button.style.backgroundColor = "white";
    button.addEventListener("click",deleteToDo)

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDosubmit(evnet) {
    evnet.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: `${newToDo}  `,
        id: Date.now(),
    };

    toDos.push(newToDoObj);
    paintTodo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDosubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if(savedToDos !== null ){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}

