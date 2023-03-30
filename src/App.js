import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Modules from './Components/Modules';
import Instructor from './Components/Instructor';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar/>} />
      <Route path="/home" element={<Homepage/>} />
      <Route path="/module" element={<Modules/>} />
      <Route path="/instructor" element={<Instructor/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
