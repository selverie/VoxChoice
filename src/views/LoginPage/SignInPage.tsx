import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';
import '../../styles/login_register_page.css';
import 'react-datepicker/dist/react-datepicker.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import BackgroundImage from '../../components/Background/BackgroundImage';
import { backend } from '../../../backend/declarations';
import { IUser } from '../../interfaces/user.interfaces';
import icpLogo from '../../assets/icp-logo.svg'

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    controls.start({ opacity: 1 });
  }, [controls]);

  const login = async () => {
    try {
      const response = await backend.loginUser();
      if ('Ok' in response) {
        localStorage.setItem('user', JSON.stringify(response.Ok));
        navigate('/');
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  const handleLogin = () => {
    login();
  }

  return (
    <BackgroundImage imageUrl="https://imagetolink.com/ib/s4wqA5ekAM.png">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-gray-100 rounded-xl mx-auto shadow-lg overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: 'url("https://imagetolink.com/ib/U30UJ1liNH.jpg")' }}
          >
          </motion.div>
          <div className="w-full lg:w-1/2 py-8 px-12">
            <h2 className="text-3xl mb-2 font-bold text-blue-700">Sign In with Internet Computer</h2>
            <p className="mb-4 font-semibold text-gray-600">
              Don't have an account? <Link to="/signup" className="text-blue-700 font-semibold">Sign up now!</Link>
            </p>
            <p className='font-semibold text-gray-600 my-10 text-center'>
            <span className='text-blue-700 font-bold'>VoxChoice </span>is a prominent voting platform, providing space for voice expression and choice.
            </p>
            <div className="mt-4 flex flex-row items-center justify-center gap-2">
                <span className="text-xs font-semibold text-gray-600">
                  By continuing, you agree to our <a href="#" className="text-blue-700 font-semibold">Terms of Use</a> & <a href="#" className="text-blue-700 font-semibold">Privacy Policy</a>
                </span>
                <input type="checkbox" className="border rounded-md" />
              </div>
            <div className="mt-3">
              <Button label="Sign In" onClick={handleLogin} />
            </div>
          </div>
        </motion.div>
      </div>
    </BackgroundImage>
  );
};

export default SignInPage;
