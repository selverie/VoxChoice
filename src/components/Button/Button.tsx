import React from 'react';
import icpLogo from '../../assets/icp-logo.svg'

interface ButtonProps {
  label: string;
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="button w-full bg-blue-700 py-3 text-center text-white rounded-md"
      onClick={onClick}
    >
      <div className='flex justify-center items-center gap-2'>
        <img className='w-6' src={icpLogo} alt="Internet Computer Logo" />
        {label} 
      </div>
    </button>
  );
};

export default Button;
