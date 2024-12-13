import "./component.css";

function QuizTitle({ quizData }) {
  return (
    <>
      <div className="quizTitle">
        <p>{quizData.question}</p>
      </div>
    </>
  );
}

export default QuizTitle;
