import Popup from "./Popup.js";
import { NavLink } from "react-router";
import "../App.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="Title">Dトリ</p>
        <NavLink to="/game" end>
          GAME START
        </NavLink>
        <Popup />
      </header>
    </div>
  );
}

export default Home;
