function QuizHintImage({ quizData }) {
  return (
    <>
      <p>この問題は画像ヒント付き問題だよん。</p>
      {quizData.id}
    </>
  );
}

export default QuizHintImage;
