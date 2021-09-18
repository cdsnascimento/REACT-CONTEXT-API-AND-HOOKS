import React from 'react';
import ReactDOM from 'react-dom';
import { CounterContextProvider } from './contexts/CounterContext';
import { Home2 } from './pages/Home2';
import './styles/global-styles.css';

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <Home2 />
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
