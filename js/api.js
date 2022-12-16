
const apiSection = document.getElementById("api-section")
const apiInput = apiSection.querySelector("input")
const apiResponse = document.getElementById("api-response")
const apiRequest = document.getElementById("api-button")


apiRequest.addEventListener("click", callAPI)

function callAPI() {
    const input = apiInput.value
    fetch(`http://localhost:3000/${input}`)
    .then((response) => response.json())
    .then((data) => {
        apiResponse.innerText = data.response
    });
}


