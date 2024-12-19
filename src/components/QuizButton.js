import "./component.css";

function QuizButton({ quizData, onAnswerSelect }) {
  const ansA = 0;
  const ansB = 1;
  const ansC = 2;

  return (
    <div className="ansButton">
      <button onClick={() => onAnswerSelect(ansA)}>A</button>
      <button onClick={() => onAnswerSelect(ansB)}>B</button>
      <button onClick={() => onAnswerSelect(ansC)}>C</button>
    </div>
  );
}

export default QuizButton;
