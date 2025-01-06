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

import quizSet from "./quizSet.json";
import React, { useState } from "react";
import { Link } from "react-router";
import "./App.css";
import QuizTitle from "./components/QuizTitle.js";
import QuizText from "./components/QuizText.js";
import QuizHintImage from "./components/QuizHintImage.js";
import QuizUseImage from "./components/QuizUseImage.js";
import QuizButton from "./components/QuizButton.js";

function Game() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const [selectId, setSelectId] = useState(getRandomInt(0, 3));
  const [score, setScore] = useState(100);
  const [message, setMessage] = useState(null);
  const [life, setLife] = useState(3);

  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const triggerPopup = () => {
    setPopUpVisible(!isPopUpVisible);
  };

  const selectData = quizSet.data.find((data) => data.id === selectId);

  // コンポーネント分岐
  let selectComp = null;
  if (selectData.image === "none" && selectData.hint === false) {
    selectComp = <QuizText quizData={selectData} />;
  } else if (selectData.image !== "none" && selectData.hint === false) {
    selectComp = <QuizUseImage quizData={selectData} />;
  } else if (selectData.image !== "none" && selectData.hint === true) {
    selectComp = <QuizHintImage quizData={selectData} />;
  } else {
    selectComp = <p>error.</p>;
  }

  function handleAnswer(selectedAns) {
    triggerPopup();
    console.log(selectData.ans);
    console.log(selectedAns);
    //成否判定、スコア加算
    if (selectData.ans === selectedAns) {
      setScore(score + 100);
      setMessage(<p>正解!</p>);
    } else {
      setScore(score - 50);
      setLife(life - 1);
      setMessage(<p>不正解...</p>);
      if (life === 1) {
        setMessage(
          <>
            <p>不正解。lifeは0です。</p>
            <Link to="/result">結果発表へ</Link>
            <p>閉じるを押さないで...</p>
          </>
        );
      }
    }
  }

  function nextQuestion() {
    triggerPopup();
    //次の問題に進む処理

    let newId;
    do {
      newId = getRandomInt(0, 3);
    } while (newId === selectId); // 同じ問題を出題しない
    setSelectId(newId);
    setMessage(null);
  }

  return (
    <>
      {selectData ? (
        <>
          <QuizTitle quizData={selectData} />
          {selectComp}
          <p>score : {score}</p>
          <p>life : {life}</p>
          <QuizButton quizData={selectData} onAnswerSelect={handleAnswer} />

          {isPopUpVisible && (
            <div className="answerPop">
              {/* ポップアップの中身 */}
              {message}
              <button onClick={nextQuestion}>次の問題へ</button>
            </div>
          )}
        </>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}

export default Game;
