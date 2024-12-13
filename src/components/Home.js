import Popup from "./Popup.js";
import { Link } from "react-router";
import "../App.css";

function Home() {
  const HowtoContent = (
    <>
      <p>How To Play</p>
      <p>ディズニーのトイレについて答える3択クイズです。</p>
      <p>様々なシチュエーション、形式の問題に答えて</p>
      <p>トイレに関する知識をムキムキつけていきましょう。</p>
      <p>未来のカリスマトイレガイドはあなたです。</p>
    </>
  );

  const HowtoButtonName = "How to Play";

  return (
    <div className="App">
      <header className="App-header">
        <p className="Title">Dトリ</p>
        <Link to="/game" className="button-link">
          GAME START
        </Link>
        <Popup content={HowtoContent} buttonName={HowtoButtonName} />
      </header>
    </div>
  );
}

export default Home;
