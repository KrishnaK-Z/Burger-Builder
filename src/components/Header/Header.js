import React from 'react';
import logo from '../../assets/logo/fode.png';
import './Header.scss';
import {NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo}/>
                <p className="logo-title">Foode</p>
            </div>
            <nav className="menu">
                <ul className="menu_list">
                    <li className="menu_item">
                        <NavLink exact activeClassName="menu_item-current" to="/" className="menu_link">
                            Home
                        </NavLink >
                    </li>
                    <li className="menu_item">
                        <NavLink activeClassName="menu_item-current"  to="/products" className="menu_link">
                            Product
                        </NavLink >
                    </li>
                    <li className="menu_item">
                        <NavLink activeClassName="menu_item-current"  to="/my-burger" className="menu_link">
                            My Burger
                        </NavLink >
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;