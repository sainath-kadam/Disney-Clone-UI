import React from 'react'
import './Navbar.scss'
import logo from '../../assets/images/logo.svg'
import homeIcon from '../../assets/images/home-icon.svg'
import movieIcon from '../../assets/images/movie-icon.svg'
import originalIcon from '../../assets/images/original-icon.svg'
import searchIcon from '../../assets/images/search-icon.svg'
import seriesIcon from '../../assets/images/series-icon.svg'
import detailsIcon from '../../assets/images/details-icon.svg'
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="navbar">
            <div className="right">
                <Link to='/' className="logo">
                    <img src={logo} alt="" />
                </Link>
                <ul className="menu">
                    <Link to='/' className="link">
                        <li>
                            <img src={homeIcon} className="icon" alt="" />
                            <span>Home</span>

                        </li>
                    </Link>
                    <li>
                        <img src={searchIcon} className="icon" alt="" />
                        <span>Search</span>
                    </li>
                    <li>
                        <img src={detailsIcon} className="icon" alt="" />
                        <span>Details</span>
                    </li>
                    <li>
                        <img src={originalIcon} className="icon" alt="" />
                        <span>Originals</span>
                    </li>
                    <li>
                        <img src={movieIcon} className="icon" alt="" />
                        <span>Movies</span>
                    </li>
                    <li>
                        <img src={seriesIcon} className="icon" alt="" />
                        <span>Series</span>
                    </li>
                </ul>
            </div>

            <div className="left">
                <Link to='/login' className="link">
                    <button className="login">Login</button>
                </Link>
            </div>

        </div>
    )
}

export default Navbar