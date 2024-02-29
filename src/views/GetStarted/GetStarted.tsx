// GetStarted.tsx
import React, { useEffect } from 'react';
import '../../App.css';
import '../../styles/getstarted.css';
import 'react-datepicker/dist/react-datepicker.css';
import { ICandidate } from '../../interfaces/candidate.interfaces';
import { backend } from '../../../backend/declarations';
import Button from '../../components/GetStarted/Button';
import BackgroundImage from '../../components/Background/BackgroundImage';

const GetStarted: React.FC = () => {
  const [candidate, setCandidate] = React.useState<ICandidate[]>([]);
  const [loading, setLoading] = React.useState(false);

  const getAllCandidates = async () => {
    try {
      setLoading(true);
      const response = await backend.getAllCandidate();
      console.log(response);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCandidates();
  }, []);

  return (
    <BackgroundImage imageUrl="https://imagetolink.com/ib/s4wqA5ekAM.png">
      <div className="container mx-auto text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mt-28 md:mt-20 mb-4 md:mb-12">VoxChoice</h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-32 ml-2 mr-2">VoxChoice is a prominent voting platform, providing space <br></br> for voice expression and choice.</p>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="mt-6 mb-3 md:mb-0">
            <Button to="/signin" text="Get Started" />
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default GetStarted;
