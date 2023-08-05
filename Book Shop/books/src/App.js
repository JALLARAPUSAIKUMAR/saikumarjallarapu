import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import Books from './Components/Pages/Books';
import Pens from './Components/Pages/Pens';
import Gifts from './Components/Pages/Gifts';
import Papers from './Components/Pages/Papers';
import Charts from './Components/Pages/Charts';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Gifts" element={<Gifts/>}/>
        <Route path='Pens' element={<Pens/>}/>
        <Route path="Books" element={<Books/>}/>
        <Route path="Papers" element={<Papers/>}/>
        <Route path="Charts" element={<Charts/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
