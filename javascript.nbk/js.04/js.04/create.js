"use  strict";
const express = require("express");
const fs = require("fs");
const stuff = require("./seed/sampleStuff");
const daily = require("./seed/sampleDaily");

const app = express();
const port = 3000;

//新たに追加した関数
const createObj = () => {
    const objArray = [],
        directArr = ["id", "Name"],
        divisionArr = ["Protein", "Iron"];

    stuff.map((stuffObj) => {
        const singleObj = {};
        directArr.map((keyName) => {
            singleObj[keyName] = stuffObj[keyName];
        });
        divisionArr.map((keyName) => {
            const dailyObj = daily.find((item) => keyName === item.name);
            const { volume: denomi } = dailyObj, //分割代入したvolumeの名前をdenomi(分母)にしている
                molecule = stuffObj[keyName], //molecleは分子
                ratio = Math.round((molecule / denomi) * 1000) / 1000;
            singleObj[keyName] = ratio;
        });
        objArray.push(singleObj);
    });

    return objArray;
};

const createFile = (pathName) => {
    const isExist = dupliCheck(pathName);
    if (isExist) return console.log("既存のパスが見つかりました");
    const targetObj = createObj();
    const toJSON = JSON.stringify(targetObj, null, 4); //行数が多いのでオプション指定して改行しておく
    fs.writeFile(pathName, toJSON, (err) => {
        if (err) throw err;
        if (!err) {
            console.log("JSONファイルを生成しました");
        }
    });
};

const dupliCheck = (pathName) => {
    try {
        fs.statSync(pathName);
        return true;
    } catch (err) {
        if (err.code === "ENOENT") return false;
    }
};

// APIエンドポイントを作成
app.get("/create-json", (req, res) => {
    createFile("dailyRatioSample.json");
    res.send("JSONファイルを生成しました");
});

// JSONファイルの内容を返すエンドポイント
app.get("/get-json", (req, res) => {
    const filePath = path.join(__dirname, "dailyRatioSample.json");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            res.status(500).send("ファイルの読み込みに失敗しました");
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`サーバーがポート${port}で起動しました`);
});

createFile("dailyRatioSample.json");
