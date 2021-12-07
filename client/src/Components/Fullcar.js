
import React from 'react'
import Reviews from './Reviews'
import { Link } from 'react-router-dom'
function FullCar({ car, user, setDOMUpdater }) {


    /// this is the component for rending a single car, here we can add reviews when we 
    if (car == undefined || car.length === 0) return <p>No comments </p>

    else if (car.length >= 1) {

        return ( <p>one</p>)}



    else {
        console.log(car.length)

        return (

            <div className="car-card" style={{ "height": "fit-content" }}  >
                <img src={car.photo} alt="" className="car-pic" />
                <p>{car.model}</p>
                <p>{car.year}</p>
                <p>{car.description}</p>
                {car.owned_by.id === user.id ?  <button>Update</button> :  null }
                {<Reviews reviews={car.reviews} />}
            </div>


        )
    }
}

export default FullCar


// setDOMUpdater(Math.random())