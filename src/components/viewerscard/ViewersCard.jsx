import React from 'react'
import viewersCardImg1 from "../../assets/images/viewers-disney.png"
import viewersCardImg2 from "../../assets/images/viewers-pixar.png"
import viewersCardImg3 from "../../assets/images/viewers-marvel.png"
import viewersCardImg4 from "../../assets/images/viewers-starwars.png"
import viewersCardImg5 from "../../assets/images/viewers-national.png"
import './ViewersCard.scss'

function ViewersCard() {
    const images = [viewersCardImg1, viewersCardImg2, viewersCardImg3, viewersCardImg4, viewersCardImg5]
    return (
        <div className="viewersCard">
            {images.map(img => (
                <div className="card" key={img} >
                    <img src={img} alt={img} />
                </div>
            ))}
        </div>
    )
}

export default ViewersCard