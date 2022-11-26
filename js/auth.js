
const authSection = document.querySelector(".auth-section");
const toolSection = document.querySelectorAll(".tool-section")
const codeForm = document.querySelector("#code-form");
const codeInput = codeForm.querySelector("#code-form input");
const HIDDEN_CLASSNAME = "hidden"
const CODEVALUE_KEY = "saveValue"

function authfication() {
    hidding()
    console.log("AuthStart")
    const saveValue = localStorage.getItem(CODEVALUE_KEY)
    console.log(saveValue)
    authCheck(saveValue)
    
}

function authCheck(saveValue) {
    const date = new Date();
    const days = String(date.getDay())
    if (saveValue === `code${days}`) {
        showing();
    } else {
        codeForm.addEventListener("submit", inputCheck)
    }
}

function inputCheck(arguement) {
    arguement.preventDefault();
    const inputValue = codeInput.value; 
    const date = new Date();
    const days = String(date.getDay())
    if (inputValue === `code${days}`) {
        showing();
        localStorage.setItem(CODEVALUE_KEY, inputValue)

        codeInput.value = ""
    } else {
        codeInput.value = ""
        alert("Wrong Code")
    }

}

function hidding() { 
    authSection.classList.remove(HIDDEN_CLASSNAME)
    toolSection.forEach((item) => {
        item.classList.add(HIDDEN_CLASSNAME)
    });
}
function showing() { 
    authSection.classList.add(HIDDEN_CLASSNAME)
    toolSection.forEach((item) => {
        item.classList.remove(HIDDEN_CLASSNAME)
    });
}
// CodeValue 값은 Code + Date의 요일값의 숫자값 일요일 -> Code7
    // Case 처음로그인 localstorage == null TodoLIst hidden 상태

    // Case 이전로그인 localstorage != null Code값 정상상태 TodoList no hidden

    // Case 이전로그인 localstorage != null Code값 틀린상태 ToDOlist no Hidden


authfication()
