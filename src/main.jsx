import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterRafa } from './CounterApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterRafa value={0} />
    </React.StrictMode>
);