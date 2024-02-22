import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './views/LoginPage/SignUpPage';
import SignInPage from './views/LoginPage/SignInPage';
import HomePage from './views/HomePage/HomePage';
import GetStarted from './views/GetStarted/GetStarted';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </React.StrictMode>
  </Router>,
);