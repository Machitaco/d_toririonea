import "./component.css";

function QuizText({ quizData }) {
  return (
    <>
      <div className="quizText">
        <p>A:{quizData.options[0]}</p>
        <p>B:{quizData.options[1]}</p>
        <p>C:{quizData.options[2]}</p>
      </div>
    </>
  );
}

export default QuizText;
