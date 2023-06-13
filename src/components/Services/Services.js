import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Services() {
  return (
    <div>
        <h1> Mes Services</h1>
        <nav>
          <Link to='/services/blockchain'>Blockchain</Link>
          <Link to='/services/dapps'>DApps</Link>
          <Link to='/services/developpement'>Développement</Link>
          <Link to='/services/others'>Autres</Link>
        </nav>
        <Outlet/>
    </div>
  )
}
