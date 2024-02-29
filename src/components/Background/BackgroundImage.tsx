import React from 'react';

interface BackgroundImageProps {
  imageUrl: string;
  children: React.ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ imageUrl, children }) => {
  const styles = {
    backgroundImage: `url("${imageUrl}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="min-h-screen py-16 flex items-center justify-center" style={styles}>
      {children}
    </div>
  );
};

export default BackgroundImage;
