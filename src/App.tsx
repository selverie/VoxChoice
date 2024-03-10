import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './views/RegisterPage/SignUpPage';
import SignInPage from './views/LoginPage/SignInPage';
import HomePage from './views/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
