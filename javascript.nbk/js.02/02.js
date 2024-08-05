"use  strict";
function randanBtn() {
    const rand = Math.floor(Math.random() * 98) + 1;
    document.getElementById("rand").innerHTML = rand;
    console.log(rand);
}

const dateInput = document.getElementById("date");
console.log(date.value);

dateInput.addEventListener("change", () => {
    let date1 = new Date(dateInput.value);
    date1.setFullYear(date1.getFullYear());
    date1.setMonth(date1.getMonth() + 1);
    date1.setDate(date1.getDate());

    let y = date1.getFullYear();
    let m = date1.getMonth() + 1; // getMonthは0から11の値を返すため、1を加える
    let d = date1.getDate();

    let dd = date1.getDay();
    let dayList = ["日", "月", "火", "水", "木", "金", "土"];
    dd = dayList[dd];
    console.log(date1);
    console.log(`曜日${dd}`);
    const nextDate = `${y}年${m}月${d}日${dd}曜日`;
    document.querySelector(`#output`).innerHTML = nextDate;
});

// 三本線のボタンを取得
const hBtn = document.querySelector(".sp-nav_js");
console.log(hBtn);

// 三本線を取得
const firstLine = document.querySelector(".first-line_js");
console.log(firstLine);
const centerLine = document.querySelector(".center-line_js");
console.log(centerLine);
const lastLine = document.querySelector(".last-line_js");
console.log(lastLine);

// メニューを取得
const overlay = document.querySelector(".overlay_js");
console.log(overlay);

hBtn.addEventListener("click", () => {
    // メニューを条件によりクラスのつけ外しをする
    if (overlay.classList.contains("swing")) {
        overlay.classList.remove("swing");
        console.log("CLOSE!!");
    } else {
        overlay.classList.add("swing");
        console.log("OPEN!!");
    }

    // 三本線に条件によりクラスのつけ外しをする
    firstLine.classList.toggle("swing");
    centerLine.classList.toggle("swing");
    lastLine.classList.toggle("swing");
});
