
import './App.css';
import Navbar from "./Components/Navbar";
import Movies from "./Components/Pages/Movies";

import Home from './Components/Pages/Home';

import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Movies" element={<Movies/>}/>
        
        <Route path="Home" element={<Home/>}/>
        
        
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
