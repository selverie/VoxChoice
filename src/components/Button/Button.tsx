import React from 'react';

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button
      className="button w-full bg-blue-700 py-3 text-center text-white rounded-md"
    >
      <span>{label}</span>
    </button>
  );
};

export default Button;
