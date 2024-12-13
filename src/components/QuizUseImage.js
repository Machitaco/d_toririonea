import "./component.css";

function QuizUseImage({ quizData }) {
  return (
    <div className="quizUseImage">
      <img
        src={quizData.image}
        alt={quizData.alt}
        style={{ width: "auto", height: "250px" }}
      />
    </div>
  );
}

export default QuizUseImage;
