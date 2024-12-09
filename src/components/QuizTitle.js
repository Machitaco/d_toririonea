import "./component.css";

function QuizTitle({ quizData }) {
  return (
    <>
      <div className="quizTitle">
        <h1>{quizData.question}</h1>
      </div>
    </>
  );
}

export default QuizTitle;
