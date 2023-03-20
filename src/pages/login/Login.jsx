import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Login.scss'
import hulu from '../../assets/images/hulu.png'
import disnep from '../../assets/images/disnep.png'
import espn from '../../assets/images/espn.png'
import streamingSites from '../../assets/images/streamingsites.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="login">
      <Navbar />
      <div className="container">
        <div className="logos">
          <img src={hulu} alt="" />
          <img src={disnep} alt="" />
          <img src={espn} alt="" />
        </div>
        <Link to='/' className="link">
          <button className="getAllThereBtn">
            GET ALL THERE
          </button>
        </Link>
        <p className="descText">
          Disney+ is asubscription video on-demand streaming service operated by the Media and Entertainment Distribution division of The Walt Disney Company.
        </p>
        <img src={streamingSites} className="sites" alt="" />
      </div>
    </div>
  )
}

export default Login