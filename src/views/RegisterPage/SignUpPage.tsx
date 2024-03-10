import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import 'react-datepicker/dist/react-datepicker.css';
import '../../App.css';
import '../../styles/login_register_page.css';
import Input from '../../components/Input/Input';
import Button from "../../components/Button/Button";
import BackgroundImage from '../../components/Background/BackgroundImage';
import { backend } from '../../../backend/declarations';
import { IUser } from '../../interfaces/user.interfaces';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [user, setUser] = useState<IUser>();

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)
  const handleBirth = (e: React.ChangeEvent<HTMLInputElement>) => setBirth(e.target.value)
  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)

  const register = async () => {
    try {
      const UserPayload = {
        name: name,
        email: email,
        address: address,
        birth: birth,
        phone: phone
      }
      const response = await backend.registerUser(UserPayload);
      if ('Ok' in response) {
        setUser(response.Ok);
        localStorage.setItem('user', JSON.stringify(UserPayload));
        navigate('/');
      } else {
        localStorage.setItem('user', JSON.stringify(UserPayload));
        navigate('/');
      }
    }
    catch (err) {
      console.log(err);
    }
  } 

  const handleRegister = () => {
    register();
  }

  useEffect(() => {
    controls.start({ opacity: 1 });
  }, [controls]);

  return (
    <BackgroundImage imageUrl="https://imagetolink.com/ib/s4wqA5ekAM.png">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-gray-100 rounded-xl mx-auto shadow-lg overflow-hidden"
        >
          <div className="w-full lg:w-1/2 py-8 px-12">
            <h2 className="text-3xl mb-2 font-bold text-blue-700">Sign Up with Internet Computer</h2>
            <p className="mb-4 font-semibold text-gray-600">
              Already have an account? <Link to="/signin" className="text-blue-700 font-semibold">Let's sign in!</Link>
            </p>
            <div>
              <Input label="Name" placeholder="Write here..." name="name" onChange={handleName}/>
              <Input label="Email" placeholder="Write here..." name="email" onChange={handleEmail}/>
              <Input label="Address" placeholder="Write here..." name="address" onChange={handleAddress}/>
              <Input label="Birth" placeholder="Write here..." name="birth" type="date" onChange={handleBirth}/>
              <Input label="Phone" placeholder="Write here..." name="phone" onChange={handlePhone}/>

              <div className="mt-3 flex flex-row items-center justify-center gap-2">
                <span className="text-xs font-semibold">
                  I accept the <a href="#" className="text-blue-700 font-semibold">Terms of Use</a> & <a href="#" className="text-blue-700 font-semibold">Privacy Policy</a>
                </span>
                <input type="checkbox" className="border rounded-md" />
              </div>

              <div className="mt-3">
                <Button label="Sign Up" onClick={handleRegister}/>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: 'url("https://imagetolink.com/ib/tRGc1uUQLz.jpg")' }}
          >
          </motion.div>
        </motion.div>
      </div>
    </BackgroundImage>
  );
};

export default SignUpPage;
