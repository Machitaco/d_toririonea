import "./App.css";
import Popup from "./Popup.js";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="Title">Dトリ</p>
        <Popup />
      </header>
    </div>
  );
}

export default App;

/* 2024/11/18 チュートリアル時のApp()
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
