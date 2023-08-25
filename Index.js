import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import HouseContextProvider from './components/HouseContext';

import App from './app/page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HouseContextProvider>
        <Router>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Router>
    </HouseContextProvider>,

);