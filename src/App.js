import './App.css';
import Navbar from './navbar/Navbar';
import { CountryPage } from './pages/countrypage/CountryPage';
import { Routes, Route } from 'react-router-dom'
import { SingleCountry } from './pages/singleCountry/SingleCountry';
import Search from './pages/search/Search';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<CountryPage/>} />
      <Route path="/:code" element={<SingleCountry/>} />
      <Route path="/search" element={<Search/>} />

      </Routes>
    </div>
  );
}

export default App;
