import React from 'react'
import { Link } from 'react-router-dom'

function CarCard({car}) {
  



    return (
   
        <div className="car-card">
            <img src={car.photo} alt="" className="car-pic"/>
            <p>{car.model}</p>
            <p>{car.year}</p>
            <p>{car.description}</p>
            <Link className="nav-link" to={"/cars/"+car.id} ><button color="inherit">More info</button></Link>
        </div>
    )
}

export default CarCard
