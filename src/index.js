import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import searchImages from './api';

searchImages(); //This is just for testing

const el = document.getElementById('root');
const root = ReactDom.createRoot(el);

root.render(<App />);
