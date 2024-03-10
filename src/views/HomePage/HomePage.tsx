// GetStarted.tsx
import { useEffect, useState } from 'react';
import '../../App.css';
import '../../styles/getstarted.css';
import 'react-datepicker/dist/react-datepicker.css';
import { ICandidate } from '../../interfaces/candidate.interfaces';
import { backend } from '../../../backend/declarations';
import BackgroundImage from '../../components/Background/BackgroundImage';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../interfaces/user.interfaces';
import Swal from 'sweetalert2'

const GetStarted: React.FC = () => {
  const [candidates, setCandidates] = useState<ICandidate[]>([]);
  const [user, setUser] = useState<IUser>();
  const navigate = useNavigate();

  useEffect(() => {
    const existUser = localStorage.getItem('user');
    if (existUser) setUser(JSON.parse(existUser));

    getAllCandidates();
  }, []);

  const getAllCandidates = async () => {
    try {
      const response = await backend.getAllCandidate();
      if ('Ok' in response) setCandidates(response.Ok);
      console.log(user);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogin = () => {
    navigate('/signin');
  }

  const handleVoting = () => {
    if(user === undefined) {
      Swal.fire({
        title: 'Failed Vote',
        text: 'Please login to vote the candidate',
        icon: 'error',
        confirmButtonText: 'Okay'
      })
    }
    if(user?.isRegistered) {
      Swal.fire({
        title: 'Failed Vote',
        text: 'You already vote the candidate',
        icon: 'error',
        confirmButtonText: 'Okay'
      })
    }
  }

  return (
    <BackgroundImage imageUrl="https://imagetolink.com/ib/s4wqA5ekAM.png">
      <div className="container mx-auto text-white text-center relative">
        <button className='absolute right-0 bg-blue-700 px-20 py-2 rounded-full font-semibold cursor-pointer' onClick={handleLogin}>
          { user !== undefined ? user.name : 'Login'}
        </button>
        <h1 className="text-4xl md:text-6xl font-bold mt-28 md:mt-20 mb-4 md:mb-12">VoxChoice</h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8 ml-2 mr-2">VoxChoice is a prominent voting platform, providing space <br></br> for voice expression and choice.</p>
        <div className="flex gap-10 justify-center items-center">
          {candidates.map((candidate: ICandidate) => (
            <div className='cursor-pointer' onClick={handleVoting}>
              <div className="card">
                <div className='card__body'>
                  <img className='max-h-full max-w-full' src={candidate.image} alt="" />
                </div>
                <span>Choose</span>
              </div>
              <div className='text-xl flex justify-around bg-[#A5ADD4] py-2 rounded-b-md'>
                <p>{candidate.name}</p>
                <p>{candidate.vote.toString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BackgroundImage>
  );
};

export default GetStarted;
