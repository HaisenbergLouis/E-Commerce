import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
  const baseStyle = 'px-4 py-2 rounded-lg font-semibold transition';
  const styles = {
    primary: `${baseStyle} bg-blue-600 text-white hover:bg-blue-700`,
    secondary: `${baseStyle} bg-gray-200 text-gray-800 hover:bg-gray-300`,
  };

  return (
    <button className={styles[variant]} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
