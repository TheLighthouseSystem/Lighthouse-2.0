import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router";
// -------------------------------------- //
import {NavBar} from './Components/NavBar.js';
import {AboutPage} from './About.js';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <>
  <NavBar/>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </BrowserRouter>
  </>
);

reportWebVitals();
