
const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"
let toDos = [];


function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos()
}

function paintToDo(newToDo) {
    const li = document.createElement("li")
    li.id = newToDo.id
    const span = document.createElement("span")
    span.innerText = newToDo.text;
    const button = document.createElement("button")
    button.innerText = "X";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li)
}
function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    };
    toDos.push(newToDoObj)
    paintToDo(newToDoObj);
    saveToDos()

}

toDoForm.addEventListener("submit", handleToDoSubmit)



const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if (savedToDos !== null) {
    const paresedToDos = JSON.parse(savedToDos);
    toDos = paresedToDos
    paresedToDos.forEach(paintToDo)
}


// Array Filter 적용시 기존의 Array 수정하는게 아니라 새로운 Array 생성됨
// Filter(함수) 각각의 배열요소에 함수를 실행함 함수결과값이 true경우 해당요소를 가져오고 false 경우 무시함
// function sexyFilter() {

// }

// [1, 2, 3, 4].filter(sexyFilter)