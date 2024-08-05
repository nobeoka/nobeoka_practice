"use  strict";
document.getElementById("jsonBtn").addEventListener("click", () => {
    fetch("/create-json")
        .then((response) => response.text())
        .then((data) => {
            console.log(data);
            alert(data);
        })
        .catch((error) => console.error("エラー:", error));
});

document.getElementById("loadJsonBtn").addEventListener("click", () => {
    fetch("/get-json")
        .then((response) => response.json())
        .then((data) => {
            const tbody = document.querySelector("#jsonTable tbody");
            tbody.innerHTML = ""; // 既存のデータをクリア

            data.forEach((item) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.Name}</td>
                    <td>${item.Protein}</td>
                    <td>${item.Iron}</td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch((error) => console.error("エラー:", error));
});
