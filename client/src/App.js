import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import"../src/style/Landing.css";
import Landing from "./pages/Landing";
import Homepage from "./pages/Homepage";
import News from "./pages/News";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Inscription from "./pages/Inscription";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="*" element={<Landing/>}/>
        <Route path="/signup" element={<Inscription/>}/>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
