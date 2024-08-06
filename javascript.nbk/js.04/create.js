"use strict";

async function loadData() {
    try {
        const response = await fetch("data.json");

        // タイムアウトを設定する場合は、独自のタイムアウトロジックを実装する必要があります
        const timeout = new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Request timed out")), 5000)
        );

        const data = await Promise.race([response.json(), timeout]);

        if (!response.ok) {
            throw new Error(
                "Network response was not ok " + response.statusText
            );
        }

        // 読み込みが成功した場合の処理
        console.log(data);

        // データをテーブルに表示する
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = "";
        data.forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.color}</td>
                <td>${item.form}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        // 読み込みに失敗した場合の処理
        console.error("An error occurred while fetching the data:", error);
    }
}

// ボタンがクリックされたときにloadDataを実行
document.getElementById("btn").addEventListener("click", loadData);

// fetchはPromiseベースのAPIで、非同期リクエストを行います。
// response.okでレスポンスが成功したかどうかをチェックします。
// response.json()でレスポンスをJSONとしてパースします。
// タイムアウトを設定するためには、Promise.raceを使って、一定時間後にリジェクトするPromiseを組み合わせます。
// jQueryを使わずにJavaScriptだけで同様の機能を実装することができます。
