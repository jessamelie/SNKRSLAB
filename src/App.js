import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import"../src/style/Landing.css";
import Landing from "./pages/Landing";
import Popup from "./components/Popup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="*" element={<Landing/>}/>
        <Route path="/portal" element={<Popup/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
