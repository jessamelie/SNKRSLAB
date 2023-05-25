import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import"../src/style/Landing.css";
import Landing from "./pages/Landing";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="*" element={<Landing/>}/>
        <Route path="/homepage" element={<Homepage/>}/>
    
      </Routes>
    </BrowserRouter>
  );
};

export default App;
