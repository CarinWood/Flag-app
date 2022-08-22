import './App.css';
import Navbar from './navbar/Navbar';
import { CountryPage } from './pages/countrypage/CountryPage';
import { Routes, Route } from 'react-router-dom'
import { SingleCountry } from './pages/singleCountry/SingleCountry';
import Search from './pages/search/Search';
import { Game } from './pages/game/Game';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<CountryPage/>} />
      <Route path="/:code" element={<SingleCountry/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/game" element={<Game/>} />

      </Routes>
    </div>
  );
}

export default App;
