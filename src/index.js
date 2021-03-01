import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import ReactServiceContext from './components/resto-service-context';
import ErrorBoundry from './components/error-boundry';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store';
import './index.scss';
import RestoService from './services/resto-service';

const restoService = new RestoService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <ReactServiceContext.Provider value={restoService}>
                <Router>
                    <App/>
                </Router>
            </ReactServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));

