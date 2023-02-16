import React from 'react'
import "./Header.css"
export default function Header() {
  return (
      <header>
          <nav className="nav">
              <a href='/'><img src="logo.png" alt="" /></a>
              <a href="/">Home</a>
              <a href="/">What's On</a>
              <a href="/">Sign Up</a>
          </nav>
    </header>
  )
}
