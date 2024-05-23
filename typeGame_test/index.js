const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random";
const typeDisplay = document.getElementById("typeDisplay");
const typeInput = document.getElementById("typeInput");
const timer = document.getElementById("timer");

typeInput.addEventListener("input", () => {
    const sentenceArray = typeDisplay.querySelectorAll("span");
    const arryValue = typeInput.value.split("");
    // console.log(arryValue);
    let correct = true;
    sentenceArray.forEach((characterSpan, index) => {
        if (arryValue[index] == null) {
            characterSpan.classList.remove("correct");
            characterSpan.classList.remove("incrrect");
        } else if (characterSpan.innerText == arryValue[index]) {
            characterSpan.classList.add("correct");
            characterSpan.classList.remove("incrrect");
            correct = false;
        } else {
            characterSpan.classList.add("incrrect");
            characterSpan.classList.remove("correct");
            correct = false;
        }
    });

    if (correct == true) {
        RenderNextSentence();
    }
});
//非同期でランダムな文章を取得する
function GetRandomSentence() {
    return fetch(RANDOM_SENTENCE_URL_API)
        .then((response) => response.json())
        .then((data) => data.content);
}

async function RenderNextSentence() {
    const sentence = await GetRandomSentence();
    console.log(sentence);

    typeDisplay.value = "";
    let oneText = sentence.split("");
    // console.log(text);
    oneText.forEach((character) => {
        const characterSpan = document.createElement("span");
        characterSpan.innerHTML = character;
        // console.log(characterSpan);
        typeDisplay.appendChild(characterSpan);
        // characterSpan.classList.add("correct");
    });

    // テキストボックスの中身を消す
    typeInput.innerText = "";

    StartTimer();
}
let startTime;
let originTime = 30;
function StartTimer() {
    timer.innerText = originTime;
    startTime = new Date();
    // console.log(startTime);
    setInterval(() => {
        timer.innerText = originTime - getTimerTime();
        if (timer.innerText <= 0) TimeUp();
    }, 1000);
}
function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000);
}
function TimeUp() {
    RenderNextSentence();
}
RenderNextSentence();
