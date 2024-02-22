import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/tailwind.css';
import '../../styles/loginpage.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { motion, useAnimation } from 'framer-motion';

const SignUpPage: React.FC = () => {
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1 });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-16 flex items-center justify-center"
      style={{ backgroundImage: 'url("../../assets/images/Login-Background.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
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

              <div className="coolinput mt-3">
                <label htmlFor="input" className="text">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Write here..."
                  name="input"
                  className="input border py-1 px-2 w-full rounded-md"
                />
              </div>

              <div className="coolinput mt-3">
                <label htmlFor="input" className="text">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Write here..."
                  name="input"
                  className="input border py-1 px-2 w-full rounded-md"
                />
              </div>

              <div className="coolinput mt-3">
                <label htmlFor="input" className="text">
                  Password
                </label>
                <input
                  type="text"
                  placeholder="Write here..."
                  name="input"
                  className="input border py-1 px-2 w-full rounded-md"
                />
              </div>

              <div className="coolinput mt-3">
                <label htmlFor="input" className="text">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Write here..."
                  name="input"
                  className="input border py-1 px-2 w-full rounded-md"
                />
              </div>

              <div className="coolinput mt-3">
                <label className="text">
                  Birth
                </label>
                <DatePicker
                  selected={birthDate}
                  onChange={(date: Date | null) => setBirthDate(date)}
                  placeholderText="Write here..."
                  className="input border py-1 px-2 w-full rounded-md"
                />
              </div>

              <div className="coolinput mt-3">
                <label htmlFor="input" className="text">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Write here..."
                  name="input"
                  className="input border py-1 px-2 w-full rounded-md"
                />
              </div>

              <div className="mt-3 flex flex-col items-center">
                <span className="text-xs font-semibold">
                  I accept the <a href="#" className="text-blue-700 font-semibold">Terms of Use</a> & <a href="#" className="text-blue-700 font-semibold">Privacy Policy</a>
                </span>
                <input type="checkbox" className="border rounded-md mt-2" />
              </div>

              <div className="mt-3">
                <button
                  className="button w-full bg-blue-700 py-3 text-center text-white rounded-md"
                >
                  <span>Sign Up</span>
                </button>
              </div>

            </form>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: 'url("../../assets/images/SignUp-Form.jpg")' }}
          >
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SignUpPage;