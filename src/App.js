// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes} from 'react-router-dom';

import Home from './componenents/Home';
import About from './componenents/About';


function App() {
  return (
    <div className="App">
    


      {/* <Routes path="/buy" element={<Hiome />} /> */}
      <Routes path="/sell" element={<About />} />

      <Home />
      
    {/* const Hiome =() => "hello world"; */}
   
    </div>
  );
}

export default App;
