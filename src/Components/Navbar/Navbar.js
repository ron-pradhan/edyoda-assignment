import React from 'react';
import './Navbar.css';
import Logo from '../../assests/logo.svg';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';

function Navbar() {
  return (
    <div className='navbar__container'>
      <div className='navLeft'>
        <img src={Logo} alt='logo' />
        <a href='#' className='menu__item'>
          Courses <RiArrowDropDownLine />
        </a>
        <a href='#' className='menu__item'>
          Programs <RiArrowDropDownLine />
        </a>
      </div>
      <div className='navRight'>
        <AiOutlineSearch />
        <a href='#' className='menu__item'>
          Login
        </a>
        <button text='JOIN NOW' className='btn'>
          Join Now
        </button>
      </div>
    </div>
  );
}

export default Navbar;
