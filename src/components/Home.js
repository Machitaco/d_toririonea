import Popup from "./Popup.js";
import { Link } from "react-router";
import "../App.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="Title">Dトリ</p>
        <Link to="/game" className="button-link">
          GAME START
        </Link>
        <Popup />
      </header>
    </div>
  );
}

export default Home;
