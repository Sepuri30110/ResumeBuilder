import React from 'react';
import '../globalStyles.css';
import Logo from '../assets/Logo.png';
const Header = () => {
  return (
    <header className="header bg-black flex justify-between items-center absolute">
        <img src={Logo} alt="logo" className="h-12 mr-5 mx-5" />
      <div className="text-white text-3xl translate-x-10 font-bold font-serif">
        <p>Resume Builder</p>
      </div>
      <div className="flex justify-center items-center text-gray-400 text-sm">
        <p className="mx-5 border-b-4 border-black hover:border-white py-6 cursor-pointer uppercase hover:animate-ping">
          Home
        </p>
        <p className="mx-5 border-b-4 border-black hover:border-white py-6 cursor-pointer uppercase hover:animate-ping">
          My Savings
        </p>
        <p className="mx-5 border-b-4 border-black hover:border-white py-6 cursor-pointer uppercase hover:animate-ping">
          Templates
        </p>
        <p className="mx-5 border-b-4 border-black hover:border-white py-6 cursor-pointer uppercase hover:animate-ping">
          About
        </p>
      </div>
      <div className="flex justify-center items-center text-white text-lg register_login">
        <p className="px-5 uppercase cursor-pointer hover:font-bold hover:animate-pulse">
          Log Out
        </p>
      </div>
    </header>
  );
};

export default Header;
