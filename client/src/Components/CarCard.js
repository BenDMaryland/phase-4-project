import React from 'react'

function CarCard({car}) {
    return (
        <div className="car-card">
            <img src={car.photo} alt="" className="car-pic"/>
            <p>Model: {car.model}</p>
            <p>Year: {car.year}</p>
            <p>Description: {car.description}</p>
        </div>
    )
}

export default CarCard
