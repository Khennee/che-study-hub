import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Important: this triggers Tailwind
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
