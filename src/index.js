import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { AppProvider } from './context/AppContext';
// import { ReviewProvider } from './context/ReviewsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    {/* <ReviewProvider> */}
    <Router>
      <App />
    </Router>
    {/* </ReviewProvider> */}
  </AppProvider>
);
