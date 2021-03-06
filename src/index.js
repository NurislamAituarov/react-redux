import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import ErrorBoundary from './components/error-boundry';
import RestoService from './services/resto-service';
import RestoServiceContext from './components/resto-service-context';
import store from './store';

const restoService = new RestoService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <RestoServiceContext.Provider value={restoService}>
                <Router>
                    <App />
                </Router>
            </RestoServiceContext.Provider>
        </ErrorBoundary>
    </Provider>
    , document.getElementById('root'));

