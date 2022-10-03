import { ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppLayout from 'pages/App/AppLayout';
import StoreProvider from 'store/StoreProvider';

import './App.css';

const App = (): ReactElement => {
    return (
        <StoreProvider>
            <Router>
                <AppLayout />
            </Router>
        </StoreProvider>
    );
};

export default App;
