import './App.css';

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import Memes from './Memes'
import Todos from './Todos'

function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route 
              path='/'
              element={<Layout />} 
            >
              <Route
                index element={<Home />}
              />
              <Route 
                path='todos' 
                element={<Todos />} 
              />
              <Route
                path='memes'
                element={<Memes />} 
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
