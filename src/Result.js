import { Link } from "react-router";

function Result() {
  return (
    <>
      <p>GAME OVER</p>
      <p>ホーム画面に戻る場合はこちら</p>
      <Link to="/">Home</Link>
      <p>新しいゲームを始める場合はこちら</p>
      <Link to="/game">Restart</Link>
    </>
  );
}

export default Result;
