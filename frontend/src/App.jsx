import "./App.css";
import WeatherCard from "./components/WeatherCard";
import CurrencyCard from "./components/CurrencyCard";
import GoldCard from "./components/GoldCard";
import TransportCard from "./components/TransportCard";
import MatchesCard from "./components/MatchesCard";

function App() {
  return (
    <div className="app">
      <h1 className="app-title">📊 لوحة المعلومات اليومية</h1>
      <div className="cards-grid">
        <WeatherCard />
        <CurrencyCard />
        <GoldCard />
        <TransportCard />
        <MatchesCard />
      </div>
    </div>
  );
}

export default App;
