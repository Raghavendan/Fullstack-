import React from 'react';
import './index.css';
import Login from './Login';
import Amazon from './amazon';
import {BrowserRouter,Routes,Route } from "react-router-dom";

function App(){
  return(
    <BrowserRouter>
       <div>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Amazon/>} />
        </Routes>
       </div>
    </BrowserRouter>
  )
}

export default App;