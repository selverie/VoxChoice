import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './views/LoginPage/SignUpPage';
import SignInPage from './views/LoginPage/SignInPage';
import HomePage from './views/HomePage/HomePage';
import GetStarted from './views/GetStarted/GetStarted';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
