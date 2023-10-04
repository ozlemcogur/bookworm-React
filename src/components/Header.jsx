import React from 'react'
import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <nav className='navbar bg-body-tertiary'>
            <div className='container-fluid '>
                <span className='navbar-brand mb-0 h1'>
                    <Link to={"/"}> Kitap Kurdu</Link>
                </span>
                <div className='d-flex gap-2'>
                    <NavLink to="/"> Anasayfa</NavLink>
                    <NavLink to="/ürünler"> Ürünler</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header
