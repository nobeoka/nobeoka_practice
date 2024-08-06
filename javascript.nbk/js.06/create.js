// 1-1.　1,2,3,4,5の数字を格納した配列を作成して下さい
const array = [1, 2, 3, 4, 5];

//1-2. for文を使用して作成した配列内の数値を全て足し合わせて、足し合わせた数値をコンソールに出力して下さい ※コンソールに「15」と表示されればOK

let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]; // 配列のi番目の要素を加算する
}
console.log(sum);

console.log(array[0]); // 1
console.log(array[1]); // 2
console.log(array[2]); // 3
console.log(array[3]); // 4
console.log(array[4]); // 5

// ++iは i = i + 1 と同じ

// for of文を使う方法
const numbers = [1, 2, 3, 4, 5];
let sum2 = 0;
for (const number of numbers) {
    sum2 += number;
}
console.log(sum2); //15

// !sumが正しく計算されない原因は、sum = sum + i;という部分で、
// !配列の値を加算する代わりにループインデックスiを加算しているためです。
// !ループインデックスiは0から始まり、配列のインデックスを指しているので、sumに加算されるのはインデックスの値だけです。
//  sum = sum + i;は１０になってしまう

// sum = sum + array[i];：配列の各要素array[i]をsumに加算します。

// 1-3.forEachメソッドを使用して作成した配列内の数値を全て足し合わせて、足し合わせた数値をコンソールに出力して下さい ※forEachを使い、コンソールに「15」と表示されればOK

const array3 = [1, 2, 3, 4, 5];
let sum3 = 0;
array3.forEach(function (number) {
    sum += number;
});
console.log(sum3);

// 2-1.　 1,2,3,4,5の数字を格納した配列を作成して下さい
const mapArray = [1, 2, 3, 4, 5];

// 2-2.　 for文を使用して、作成した配列内のそれぞれの数値を2倍にした新しい配列を作成してコンソールに表示して下さい　※コンソールに[2, 4, 6, 8, 10]と表示されればOK

// 2-3.　mapメソッドを使用して、作成した配列内のそれぞれの数値を2倍にした新しい配列を作成してコンソールに表示して下さい　※mapを使って、コンソールに[2, 4, 6, 8, 10]と表示されればOK
