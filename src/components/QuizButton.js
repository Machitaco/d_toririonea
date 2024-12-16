import Popup from "./Popup.js";
import "./component.css";

function QuizButton({ quizData }) {
  function checkAns({ quizData }, ans) {
    if (quizData.ans === ans) {
      return <p>正解</p>;
    } else {
      return <p>不正解</p>;
    }
  }

  let ansA = 0;
  let ansB = 1;
  let ansC = 2;

  return (
    <div className="ansButton">
      <Popup content={checkAns({ quizData }, ansA)} buttonName={"A"} />
      <Popup content={checkAns({ quizData }, ansB)} buttonName={"B"} />
      <Popup content={checkAns({ quizData }, ansC)} buttonName={"C"} />
    </div>
  );
}

export default QuizButton;
