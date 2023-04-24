import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/img/logo.svg"

const Header = () => {
  return <header className='py-6 border-b mb-12'>
    <div className="container mx-auto flex jusify-between items-center ">
     
      <Link to="/">
        <img src={[Logo]} alt='logo'/>
      </Link>

      <div className='flex items-center gap-6'>
      <Link className='hover:text-voilet-900 transition' to="">Log In</Link>
      <Link className='bg-violet-700 hover:bg-voilet-800 text-white px-4 py-3 rounded-lg transition' to="">Sign Up</Link>
      </div>

    </div>
  </header>;
};

export default Header;