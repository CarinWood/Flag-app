import './App.css';
import Navbar from './navbar/Navbar';
import { CountryPage } from './pages/countrypage/CountryPage';
import { Routes, Route } from 'react-router-dom'
import { SingelCountry } from './pages/SingelCountry';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/:code" element={<SingelCountry/>} />
      <Route path="/" element={<CountryPage/>} />
      </Routes>
    </div>
  );
}

export default App;
