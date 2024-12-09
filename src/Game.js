/*
quizSet.jsのデータ形式について
{
  "id": 問題番号。問題抽出の際に用いる。
  "question": 問題文。
  "options": [　回答の選択肢。ランダムにしない現仕様ではA,B,Cの順。
    "タワーオブテラー・メモラビアリ横",
    "ブロードウェイミュージックシアター横",
    "アーント・ペグズ・ヴィレッジストア横"
  ],
  "ans": 0,　答え。要素数を指定している。上記問題なら"タワーオブテラー・メモラビアリ横"
  "image": "none", 問題で使用する画像のパス。"none"なら画像不使用。
  "hint": true ヒントの仕様有無。trueならヒント有、falseならヒント無。
}

問題の出題形式について、image,hintプロパティを用いてまとめると...
image=パス, hint=true 画像はヒントとして実装。選択肢ごとの回答を初期表示。
image=パス, hint=false 画像は常時表示。選択肢ごとの回答を非表示(回答は画像内に挿入)。
image=none, hint=false 画像は非表示。選択肢ごとの回答を表示。

これはコピー用にでも使おうか。
"id": ,
      "question": "",
      "options": [
        "",
        "",
        ""
      ],
      "ans": ,
      "image": "",
      "hint": 
*/

import quizSet from "./data/quizSet.json";
import "./App.css";
import QuizTitle from "./components/QuizTitle.js";
import QuizText from "./components/QuizText.js";
import QuizHintImage from "./components/QuizHintImage.js";
import QuizUseImage from "./components/QuizUseImage.js";

function Game() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const selectId = getRandomInt(0, 3);
  const selectData = quizSet.data.find((data) => data.id === selectId);

  let selectComp;

  if (selectData.image === "none" && selectData.hint === false) {
    selectComp = <QuizText quizData={selectData} />;
  } else if (selectData.image !== "none" && selectData.hint === false) {
    selectComp = <QuizUseImage quizData={selectData} />;
  } else if (selectData.image !== "none" && selectData.hint === true) {
    selectComp = <QuizHintImage quizData={selectData} />;
  } else {
    selectComp = <p>error.</p>;
  }

  return (
    <>
      <QuizTitle quizData={selectData} />
      {selectComp}
    </>
  );
}

export default Game;
