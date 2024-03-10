import React from 'react';

interface InputProps {
  label: string;
  placeholder: string;
  name: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ label, placeholder, name, type = 'text', onChange }) => {
  const inputClassName = 'input border py-1 px-2 w-full rounded-md';
  const inputStyle =
    type === 'password' || type === 'date' 
      ? {
          width: '100%',
          padding: '0.6rem',
          borderRadius: '0.375rem',
          border: '2px solid rgb(29 78 216 / var(--tw-bg-opacity))',
        }
      : {};

  return (
    <div className="coolinput mt-3">
      <label htmlFor={name} className="text">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={`${inputClassName} ${type === 'date' ? 'border-blue-700' : ''}`}
        style={inputStyle}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
