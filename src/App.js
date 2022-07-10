import React from 'react';
import Home from './components/Home';
import NasaFetchPhoto from './components/NasaFetchPhoto';
import NasaFetchMarsPhoto from './components/NasaFetchMarsPhoto';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className='App-header'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nasaFetchPhoto" element={<NasaFetchPhoto />} />
            <Route path="/nasaFetchMarsPhoto" element={<NasaFetchMarsPhoto />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}
 