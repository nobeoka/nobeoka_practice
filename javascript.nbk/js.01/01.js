"use  strict";
// 1-1 consoleタブに「Hello ,World」と表示しよう
console.log("Hello,World");

// 1-2「クリック！」というボタンを押したらボタンの下に「押したなー！」という文字を表示させる挙動を作ろう

const btn = document.getElementById("button");

btn.addEventListener("click", () => {
    const text = document.createElement("p");
    text.textContent = "押したなー！";
    document.body.appendChild(text);
    text.classList.add("custom-text");
});

//1-3.HTMLで入力欄を作成して、入力されるたびに入力された値が入力欄の下に表示されるようにしよう
const inputValue = document.getElementById("inputId");
const textInput = document.getElementById("inputText");

inputValue.addEventListener("change", (e) => {
    textInput.textContent = e.target.value;

    console.log(textInput.textContent);
});

// getElementByIdでid=buttonをとってきてbtn定数にする
// btnにクリックイベントでクリックしたら
// HTMLにPタグを作成(document.createElement)してtextを作成
// htmlにtextを追加してcssでつけたデザインを追加(text.classList.add)

// textContent は Node のプロパティで、ノードおよびその子孫のテキストの内容を表します。
// appendChild() は Node インターフェイスのメソッドで、指定された親ノードの子ノードリストの末尾にノードを追加します。
