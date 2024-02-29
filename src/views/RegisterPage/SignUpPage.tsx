import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import '../../App.css';
import '../../styles/login_register_page.css';
import Input from '../../components/Input/Input';
import Button from "../../components/Button/Button";
import BackgroundImage from '../../components/Background/BackgroundImage';

const SignUpPage: React.FC = () => {
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const controls = useAnimation();

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
            <h2 className="text-3xl mb-2 font-bold text-blue-700">Sign Up</h2>
            <p className="mb-4 font-semibold text-gray-600">
              Already have an account? <Link to="/signin" className="text-blue-700 font-semibold">Let's sign in!</Link>
            </p>
            <form action="#">
              <Input label="Name" placeholder="Write here..." name="name" />
              <Input label="Email" placeholder="Write here..." name="email" />
              <Input label="Password" placeholder="Write here..." name="password" type="password"/>
              <Input label="Address" placeholder="Write here..." name="address" />
              <Input label="Birth" placeholder="Write here..." name="birth" type="date"/>
              <Input label="Phone" placeholder="Write here..." name="phone" />

              <div className="mt-3 flex flex-col items-center">
                <span className="text-xs font-semibold">
                  I accept the <a href="#" className="text-blue-700 font-semibold">Terms of Use</a> & <a href="#" className="text-blue-700 font-semibold">Privacy Policy</a>
                </span>
                <input type="checkbox" className="border rounded-md mt-2" />
              </div>

              <div className="mt-3">
                <Button label="Sign Up" />
              </div>
            </form>
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
