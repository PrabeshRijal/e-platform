import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ScrollToTop from './components/fragment/ScrollToTop';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <HashRouter>
        <Provider store={store}>
        <ScrollToTop />
            <Routes>
                <Route path="/*" element={<App />} exact />
            </Routes>
        </Provider>
    </HashRouter>
)