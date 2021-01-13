import logo from "./logo.svg";
import "./App.css";
import StateFull from "./Components/StateFull";
import StateLess from "./Components/StateLess";
import ExampleLayout from "./ExampleLayout";
import DemoDataBinding from "./DataBinding/DemoDataBinding";

function App() {
  return (
    <div className="App">
      <ExampleLayout></ExampleLayout>
      {/* <h1>Fix</h1>
      <StateFull />
      <StateFull />
      <StateLess></StateLess> */}
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
      <DemoDataBinding></DemoDataBinding>
    </div>
  );
}

export default App;
