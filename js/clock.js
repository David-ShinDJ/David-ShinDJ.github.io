
const clock = document.querySelector("h2#clock");


function getColck() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0")
    const minutes = String(date.getMinutes()).padStart(2,"0")
    const seconds = String(date.getSeconds()).padStart(2,"0")
    clock.innerText = `${hours}:${minutes}:${seconds}`
}
getColck();
setInterval(getColck, 1000);

// setTimeOut(function, ms후실행)


// 세상을 바꿀 수 있다고 생각하는 제대로 정신 나간 사람들이 세상을 변화시킨다. -스티브잡스-
// 네 운명을 사랑하라 -니체-
// 상상력은 지식보다 더 중요하다. 지식에는 한계가 있지만, 상상력은 세상의 모든 것을 포괄한다. -아인슈타인-
// 한 가지 최고의 조언은 어떻게 더 잘 해낼 수 있는지 끊임없이 생각하고 스스로에게 계속 질문을 던지세요. - 일론머스크-
// 성장하려면 무건 알을 깨야 한다. -헤르만헤세-
// 가장 적은 것으로도 만족하는 사람이 가장부유한 사람이다. -소크라테스-
// 나무는 꽃을 버려야 열매를 맺고 강물은 강을 버려야 바다에 이른다 -싯다르타-
// 작은 일도 시작해야 위대한 일도 생긴다. -주커버그-
// 당신을 다른 사람과 비교하지 말고 오직 어제의 당신하고만 비교하라 -조던피터슨-
// 말은 쉽지.코드를 보여줘. -리누스 토발즈-