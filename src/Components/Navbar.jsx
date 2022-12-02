import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { routes } from '../routes'


const Navbar = () => {
    const navigate = useNavigate()

  return (
    <nav>
        {/* Aqui deberan agregar los Links */}
        <h3 onClick={()=> navigate(-1)}>BACK</h3>
        <Link to={routes.home}>Home</Link>{""}
      <Link to={routes.beer}>Beer</Link>{""}
      <Link to={routes.contacto}>Contacto</Link>
    </nav>
  )
}

export default Navbar