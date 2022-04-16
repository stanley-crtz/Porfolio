import { ThemeProvider } from '@mui/material';
import { theme } from 'Config/Material';
import Porfolio from 'Porfolio';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'Styles/CSS/index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Porfolio /> 
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();