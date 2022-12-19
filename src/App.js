import "./Weather.css";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Stockholm" />
        <p className="footer">
          This project is coded by
          <a
            href="https://github.com/RanaMohammadi/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rana Mohammadi
          </a>
        </p>
      </div>
    </div>
  );
}
