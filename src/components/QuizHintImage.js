import Popup from "./Popup.js";
import "./component.css";

function QuizHintImage({ quizData }) {
  const HintContent = (
    <div className="quizUseImage">
      <img
        src={quizData.image}
        alt={quizData.alt}
        style={{ width: "auto", height: "250px" }}
      />
    </div>
  );

  const HintButtonName = "Hintを表示";

  return (
    <>
      <div className="quizText">
        <p>A:{quizData.options[0]}</p>
        <p>B:{quizData.options[1]}</p>
        <p>C:{quizData.options[2]}</p>
      </div>
      <Popup content={HintContent} buttonName={HintButtonName} />
    </>
  );
}

export default QuizHintImage;
