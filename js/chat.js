
const sendButton = document.querySelector("#send")
sendButton.addEventListener("click", sendMessage)


// 답장을 받아올수있는 API만들기

function sendMessage() {
  const input = document.querySelector('#input').value
  var template = `<div class="line">
  <span class="chat-box mine">${input}</span>
  </div>`
  document.querySelector('.chat-content').insertAdjacentHTML('beforeend', template);
  let koreanPattern = /^[가-힣]+$/;
  if (koreanPattern.test(input)) {
    let q = 'http://localhost:3000/translate?q=' + input.value;
    axios.get(q).then(r => {
      var 결과 = JSON.parse(r.data).message.result.translatedText;
      console.log(결과);

      let template2 = `<div class="line">
  <div class="chat-box">${결과}</div>
</div>`;
document.querySelector('.chat-content').insertAdjacentHTML('beforeend', template2);
    }).catch((error) => {
      console.log('실패',error)
    })

  } else {

  fetch(`http://localhost:3000/english/${input}`)
  .then((response) => response.json())
  .then((data) => {
    let result = data.AIAnswer

    let template2 = `<div class="line">
  <div class="chat-box">${result}</div>
</div>`;
document.querySelector('.chat-content').insertAdjacentHTML('beforeend', template2);

})
  }
  document.querySelector('#input').value = ""
}
