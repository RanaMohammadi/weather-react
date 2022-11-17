import logo from "./logo.svg";
import "./App.css";
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World</p>
        <Weather city="Tokyo" />
      </header>
    </div>
  );
}

export default App;
