"use strict";
const arr = [0];
let array = [...arr];
let count = 0;

const btn = document.getElementById("button");

btn.addEventListener("click", () => {
    array = [...array, ++count];
    console.log(array);
});

// 初期状態で、countは0です。
// ボタンがクリックされるたびに、countがインクリメントされてから、arrayに追加されます。
//arrayは毎回新しい配列を生成しており、countの値が連続して追加されます。
// 初回クリック時：

// countが1にインクリメントされ、arrayに追加されます。
// arrayの内容は [0, 1] です。
// 2回目のクリック時：

// countが2にインクリメントされ、arrayに追加されます。
// arrayの内容は [0, 1, 2] です。
// 3回目のクリック時：

// countが3にインクリメントされ、arrayに追加されます。
// arrayの内容は [0, 1, 2, 3] です。

// !これだと同じ数が続くよ！！
// btn.addEventListener("click", () => {
//     console.log(`Count before increment: ${count}`);
//     array = [...array, ++count];
//     console.log(`Array after click: ${array}`);
// });
