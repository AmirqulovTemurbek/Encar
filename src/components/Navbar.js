import React from "react";
import Logo from "../images/Logo.png";
import './navbar.scss';

const Navbar = () =>{

    return (
        <>
            <div className="container">
                <nav className="navbar">
                    <a className="d-flex align-items-center">
                        <img className="logo" src={Logo} alt="logo"/>
                    </a>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link">Авто из Кореи</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Авто из Казахстана</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Авто из ОАЭ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Авто из Китая</a>
                        </li>   
                        <li className="nav-item">
                            <a className="nav-link">О нас</a>
                        </li>  
                        <li className="nav-item">
                            <a className="nav-link">Контакты</a>
                        </li>
                        <button className="btn">
                        <i class="fas fa-phone"></i>
                            +7 (800) 011-11-11
                        </button>  
                    </ul>
                </nav>    
            </div>
        </>
    );
};

export default Navbar;