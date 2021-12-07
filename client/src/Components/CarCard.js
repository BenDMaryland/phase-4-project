import React from 'react'

function CarCard({car}) {
    return (
        <div className="car-card">
            <img src={car.photo} alt="" className="car-pic"/>
            <p>{car.model}</p>
            <p>{car.year}</p>
            <p>{car.description}</p>
        </div>
    )
}

export default CarCard
