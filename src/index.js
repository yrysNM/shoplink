import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import DataContextProvider from './context/DataContext';
import "./styles/style.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataContextProvider>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </DataContextProvider>
);
