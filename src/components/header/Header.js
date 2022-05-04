import React from 'react';
import './styles.css'

export const Header = () => {

  return (
    <header className='header-container'>
      <img className='logo-mage' src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="logo"></img>
      <form className='form-container'>
        <input className='city-button' type="button" id='1' value="Helsinki, Finland" />
        <input className='guests' type="button" id='2' value="Add guests" />
        <input className='search' type="button" id='6' value="x" />
      </form>
    </header>
  )

}