import React from 'react';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Bebop } from './Components/Bebop';
import { NaturalModes } from './Components/NaturalModes';
import Home  from './Components/Home';

function App() {
  return (
    <div>

  <BrowserRouter>
  
    <Link to="/" component={Link}>
       Home
     </Link>    
     <br />
     <Link to="/bebop" component={Link}>
       Practice bebop
     </Link>    
    <br />
     <Link to="/natural" component={Link}>
       Practice natural modes
     </Link>   
  
    <Routes>
    <Route exact path="/" element={<Home />} />
      <Route exact path="/bebop" element={<Bebop />} />
      <Route exact path="/natural" element={ <NaturalModes /> } />
      
    </Routes>
   </BrowserRouter>   
 </div>
  );
}

export default App;
