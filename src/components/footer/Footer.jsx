import React from 'react'
import './Footer.scss'
import logo from '../../assets/images/logo.svg'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer">
            <h3 className="footer_label">
                Follow us on social media
            </h3>
            <div className="social_icons">
                <span className="icon">
                    <FaFacebookSquare />
                </span>
                <span className="icon">
                    <FaInstagramSquare />

                </span>
                <span className="icon">

                    <FaYoutubeSquare />
                </span>
                <span className="icon">
                    <FaTwitterSquare />
                </span>
            </div>
            <img src={logo} alt="" />
        </div>
    )
}

export default Footer