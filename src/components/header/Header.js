import React, { useState } from 'react';
import './styles.css'

export const Header = () => {
  const [toggle, setToggle] = useState(false)


  return (
    <>
      <header className={`header-${!toggle ? "container" : "hidden"}`}>
        <img className='logo-mage' src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="logo"></img>
        <div className='form-container'>
          <button className='city-button' onClick={() => setToggle(!toggle)}>Helsinki, Finland</button>
          <button className='guests'>Add guests</button>
          <input className='search' type="image" alt='search button' src={process.env.PUBLIC_URL + "/images/search.svg"} />
        </div>
      </header>
      {toggle && <form className='toggle-form'>
        <div className='search-bar'>
          <div className='location-container'>
            <p className='location-title'>LOCATION</p>
            <input value="Helsinki, Finland" className='location-open' />
          </div>
          <div className='guests-container'>
            <p className='location-title'>GUESTS</p>
            <input value="Add guests" className='guests-open' />
          </div>
          <div className='search-container'>
            <img className='search-img-open' src={process.env.PUBLIC_URL + "/images/search-open.svg"} alt="search" />
            <button onClick={() => setToggle(toggle)} className='search-open'>Search</button>
          </div>
        </div>
        <ul>
          <li>Helsinki, Finland</li>
          <li>Turku, Finland</li>
          <li>Oulu, Finland</li>
          <li>Vaasa, Finland</li>
        </ul>
      </form>
      }
    </>
  )

}