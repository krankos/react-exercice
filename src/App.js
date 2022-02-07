import logo from "./logo.svg";
import "./App.css";
import Firstcomp from "./components/Firstcomp";
import Form from "./components/Form";
import Red from "./components/Red";
import Media from "./components/Media";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Red />
        <Firstcomp />
        <Form />
        <Media />
      </header>
    </div>
  );
}

export default App;
