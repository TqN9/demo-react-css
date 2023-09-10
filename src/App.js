import logo from './logo.svg';
import './App.css';
import "./input.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from './page/LandingPage';
import DetailPage from './page/DetailsPage';
import Navbar from './companants/Navbar';

 

function App() {
  return (
  <div className='bg-gradient-to-b from-[#FF0000] to-[#FFFF00] h-screen'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/details" element={<DetailPage />} />
    </Routes>
</div>
  );
}

 

export default App;
