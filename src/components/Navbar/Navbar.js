import React from 'react';
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav>
        <Link to='/'>  Home </Link>
        <Link to='/about'>  About </Link>
        <Link to='/services'>  Services </Link>
        <Link to='/skills'>  Skills </Link>
        <Link to='/team'>  Team </Link>
        <Link to='/contacts'>  Contacts </Link>
        
    </nav>
  )
}
