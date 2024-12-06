import React from "react";
import Home from "./pages/Home.jsx";
import Merchandise from "./pages/Merchandise.jsx";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/merchandise" element = {<Merchandise />} />
    </Routes>
    </BrowserRouter>
    <Home/>
    </>
  );
}

export default App
