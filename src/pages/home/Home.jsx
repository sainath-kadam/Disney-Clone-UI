import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Home.scss'

import slide1 from "../../assets/images/slider-badag.jpg"
import slide2 from "../../assets/images/slider-badging.jpg"
import slide4 from "../../assets/images/slide4.png"
import slide5 from "../../assets/images/slide5.png"
import slide6 from "../../assets/images/slide6.png"
import ViewersCard from '../../components/viewerscard/ViewersCard';
import MovieCard from '../../components/moviecard/MovieCard';
import { moviesImages1, moviesImages2, moviesImages3, moviesImages4 } from '../../data/Movies';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';



function Home() {
  const [centerPadding,setCenterPadding] = useState(window.innerWidth > 600 ? "90px" : "30px")
 
  window.onresize = ()=> {
    setCenterPadding(window.innerWidth > 600 ? "90px" : "30px")
  console.log("sds")
  }
  useEffect(()=>{
    
    
  },[centerPadding])
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding,
    slidesToShow: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
  };
  return (
    <div className="home">
        <Navbar/>
      <Slider {...settings} className="slider">
          <div className="slide">
            <img src={slide1} alt="" />
          </div>
          <div className="slide">
            <img src={slide2} alt="" />
          </div>
          <div className="slide">
            <img src={slide4} alt="" />
          </div>
          <div className="slide">
            <img src={slide5} alt="" />
          </div>
          <div className="slide">
            <img src={slide6} alt="" />
          </div>
        </Slider>

        <ViewersCard/>
        <MovieCard title="Recommended for You" movies={moviesImages1}/>
        <MovieCard title="Continue Watching" movies={moviesImages2}/>
        <MovieCard title="Most Popular in your country" movies={moviesImages3}/>
        <MovieCard title="Geeked: Sci-fi, Fantasy, Superhero & More" movies={moviesImages4}/>
        <Footer/>
    </div>
  )
}

export default Home