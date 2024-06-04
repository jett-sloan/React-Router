import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Soda from "./Soda";
import Chips from "./Chips";
import Home from "./Home"
import FreshSardins from "./FreshSardins";
import NavBar from "./NavBar"


function App() {
  return (
    <div className="App">
         
      <BrowserRouter>
      <NavBar />
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/soda" element={<Soda/>} />
          <Route path="/chips" element={<Chips/>} />
          <Route path="FreshSardins" element={<FreshSardins/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
