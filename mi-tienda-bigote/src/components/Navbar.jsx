import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
    <nav className="navbar">
        <Link to="/" className='logo'><h1>Tienda de los Bigotes</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos">Productos</Link></li>
            <li><Link className="menu-link" to="/productos/cuchas">Cuchas</Link></li>
            <li><Link  className="menu-link" to="/productos/regaleria">Regaleria</Link></li>
            <li><Link  className="menu-link" to="/productos/agendas">Agendas</Link></li>
            <li><Link  className="menu-link" to="/contacto">Contacto </Link></li>
            <li><CartWidget /></li>

        </ul>
    </nav>
    )
}

export default Navbar