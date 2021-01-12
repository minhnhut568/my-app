import logo from "./logo.svg";
import "./App.css";
import StateFull from "./Components/StateFull";
import StateLess from "./Components/StateLess";

function App() {
  return (
    <div className="App">
      <h1>Fix</h1>
      <StateFull />
      <StateLess></StateLess>
      {/* Cach 2 */}
      {/* <StateFull></StateFull> */}

      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
