import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <>
     <div class="navbar">

        <Link to='/'> <h2>The Movie Search</h2></Link>
          
            <div class="pages">
                <Link to='/'>Home</Link>
                <Link to='/search'>Search</Link>

            </div>

        </div>
    </>
  )
}
