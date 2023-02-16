import React from 'react';
import {Link} from 'react-router-dom';
import "./Header.css";
export default function Header() {
  return (
      <header>
          <nav className="nav">
              <Link to='/'><img src="logo.png" alt="" /></Link>
              <Link to="/">Home</Link>
              <Link to="whatson">What's On</Link>
              <Link to="signup">Sign Up</Link>
          </nav>
    </header>
  )
}
