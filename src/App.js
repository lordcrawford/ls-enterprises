import React from 'react'

import { 
  BrowserRouter, Routes, Route
} from "react-router-dom";

import Home from './components/home.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* will auto-route any wrong url to Home */}
        <Route path="*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
