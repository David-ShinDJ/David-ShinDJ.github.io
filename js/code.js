const codeForm = document.querySelector("#code-form");
const codeInput = codeForm.querySelector("#code-form input");
const toDoListView = document.getElementById("todo-form");

const HIDDEN_CLASSNAME = "hidden"
const CODEVALUE_KEY = "codeValue"

function onCodeCheck(arguement) {
    arguement.preventDefault();
    const codeValue = codeInput.value; 
    codeInput.value = ""
    checkCodeValue(codeValue)
}
 
function showingToDo() { 
    toDoListView.classList.remove(HIDDEN_CLASSNAME)
}
// CodeValue 값은 Code + Date의 요일값의 숫자값 일요일 -> Code7
function checkCodeValue(codeValue) {

    // Case 처음로그인 localstorage == null TodoLIst hidden 상태

    // Case 이전로그인 localstorage != null Code값 정상상태 TodoList no hidden

    // Case 이전로그인 localstorage != null Code값 틀린상태 ToDOlist no Hidden

    const date = new Date();
    const days = String(date.getDay())
    console.log(days)
    if (codeValue === `code${days}`) {
        showingToDo(codeValue);
        localStorage.setItem(CODEVALUE_KEY, codeValue)
        codeForm.classList.add(HIDDEN_CLASSNAME)
    } else {
        codeForm.classList.remove(HIDDEN_CLASSNAME)
        codeForm.addEventListener("submit", onCodeCheck)
    }
    
}

const codeValue = localStorage.getItem(CODEVALUE_KEY)

if (codeValue === null) {
    codeForm.classList.remove(HIDDEN_CLASSNAME)
    codeForm.addEventListener("submit", onCodeCheck)
} else {
    checkCodeValue(codeValue)
}

