import "./styles.css";
import Search from "./Search";
export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>

      <Search />
      <p>
        Coded by
        <a
          href="https://github.com/RanaMohammadi/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rana Mohammadi
        </a>
      </p>
    </div>
  );
}
