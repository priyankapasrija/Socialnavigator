import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'; 
import {NextUIProvider} from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </NextUIProvider>
);