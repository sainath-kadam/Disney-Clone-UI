import React from 'react'
import logo from '../../assets/images/logo2.svg';
import './Details.scss';
import { BsPlayFill, BsPlusCircle } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';


function Details() {
  return (
    <>
      <Navbar />
      <div className="details">
        <div className="content">
          <img className="logo" src={logo} alt="" />
          <div className="row">
            <Link to='/' className="link">
            <button>
              <span className="icon"><BsPlayFill /></span> <span>Play</span>
              </button>
              </Link>
            <button><span className="icon"><BsPlayFill /></span> <span>Trailer</span></button>
            <span className="iconOutside">
              <BsPlusCircle />
            </span>
            <span className="iconOutside">
              <FaRegUserCircle />
            </span>
          </div>
          <span className="info">
            2021 - 1H 30MINS - 18+, Horror, Movie
          </span>
          <p className="descText">
            Disney+ is an American subscription video on-demand over-the-top streaming service owned and operated by the Media and Entertainment Distribution division of The Walt Disney Company.
          </p>
        </div>
      </div>
    </>
  )
}

export default Details