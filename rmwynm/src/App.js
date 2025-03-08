import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Home from "./pages/Home";
import styles from './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<p className="text-center mt-4">Page not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
