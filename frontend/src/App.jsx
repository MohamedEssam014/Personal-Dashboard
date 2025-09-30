import "./App.css";
import WeatherCard from "./components/WeatherCard";
import CurrencyCard from "./components/CurrencyCard";
import GoldCard from "./components/GoldCard";
import TransportCard from "./components/TransportCard";
import MatchesCard from "./components/MatchesCard";

function App() {
  return (
    <div className="app-container">
      <WeatherCard />
      <CurrencyCard />
      <GoldCard />
      <TransportCard />
      <MatchesCard />
    </div>
  );
}

export default App;
