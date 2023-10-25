import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AppProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <React.StrictMode>
      <ToastContainer position="top-center" autoClose={2000} />
      <App />
    </React.StrictMode>
  </AppProvider>
);
