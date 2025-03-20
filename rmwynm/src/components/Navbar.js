import React, { useState } from 'react';
import { when_you } from '../data';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
      <>
      <div className="hamburger" onClick={toggleNavbar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="nav-header text-2xl font-bold text-orange-500">
        <h2>READ ME WHEN YOU...</h2>
        </div>
        <ul className="nav-items">
        {Object.entries(when_you).map(([key, title]) => (
          <li key={key}>
            <Link to={`/message/${key.replace('_', '-')}`} onClick={toggleNavbar}>
              {title}
            </Link>
          </li>
        ))}
        </ul>
      </nav>
      <div
        className={`overlay ${isOpen ? 'show' : ''}`}
        onClick={toggleNavbar}
      />
      </>
    );
};

export default Navbar;
