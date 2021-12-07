import { cardClasses } from '@mui/material'
import React from 'react'
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
            <div> Reviews
                 {car.reviews.map((review) => {
                return (
                    <>
                        <p> Review</p>
                        <p>{review.name}</p>
                        <p>{review.comment}</p>
                        <p>{review.rating}</p>
                    </>
                )})}
            </div>
        </div>
    )
}

export default FullCar
