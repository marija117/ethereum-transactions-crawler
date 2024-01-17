import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/marija-kuveljic-4a7553129/">Linkedn</Link>
        </li>
        <li>
          <Link to="https://github.com/marija117">Github</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
