import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/issues'>Issues</Link>
      </li>
    </ul>
  )
}

export default Navbar
