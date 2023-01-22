import React, {useState} from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import './navbar.scss';

const Navbar = () =>{
    const [isMobile, setIsMobile] = useState(false);
    return (
        <>
            <div className="container">
                <nav className="navbar">
                    <Link className="d-flex align-items-center" to='/'>
                        <img className="logo" src={Logo} alt="logo"/>
                    </Link>

                    <ul id="navbar-nav" className={isMobile ? "nav-links-mobile" : "navbar-nav"}
                        onClick={() => setIsMobile(false)}
                    >
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

                    <button className="mobile-menu-icon"
                        onClick={() => setIsMobile(!isMobile)}>
                    
                        {isMobile? (
                            <i class="fas fa-bars"></i>
                        ) : (
                            <i class="fas fa-bars"></i>
                        )}
                    </button>
                </nav>    
            </div>
        </>
    );
};

export default Navbar;