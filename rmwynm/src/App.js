import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";
import MessagePage from "./pages/MessagePage";
import styles from './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/message/:messageId" element={<MessagePage />} />
        <Route path="*" element={<p className="text-center mt-4">Page not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
