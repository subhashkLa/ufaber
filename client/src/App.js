import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './routes/MainRouter';

const App = () => (
  <div>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
    </div>
);

export default App;
