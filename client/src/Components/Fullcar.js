
import React from 'react'
import Reviews from './Reviews'
import { Link } from 'react-router-dom'
function FullCar({ car }) {


    /// this is the component for rending a single car, here we can add reviews when we 
    if (!car) return <p> Loading</p>

    return (

        <div className="car-card" style={{ "height": "fit-content"}}  >
            <img src={car.photo} alt="" className="car-pic" />
            <p>{car.model}</p>
            <p>{car.year}</p>
            <p>{car.description}</p>
            {<Reviews reviews={car.reviews} /> }
        </div>
   
   
   )
}

export default FullCar
