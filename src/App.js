import React,{useState} from 'react'
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import PlaceToStay from './pages/place-to-stay/PlaceToStay';

function App() {
  const [showPop,setShowPop] = useState(true);
  const handlePop = () =>{
    setShowPop(!showPop);
    }

  
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Layout handlePop={handlePop} showPop={showPop}/>}>
          <Route index element={<Home handlePop={handlePop} showPop={showPop}/>}/>
          <Route path={'/placetostay'} element={<PlaceToStay handlePop={handlePop} showPop={showPop}/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
