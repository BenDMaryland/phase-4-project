import React from 'react'
import { Link } from 'react-router-dom'

function CarCard({ car, user, onDeleteCar }) {

    function handleDeleteCar() {
    fetch(`/cars/${car.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        onDeleteCar(car);
      }
    });
  }

    return (

        <div className="car-card">
            <img src={car.photo} alt="" className="car-pic" />
            {car.owned_by.id === user.id ? <p>You own</p> : <p>You dont't own!</p>}
            <p>Model: {car.model}</p>
            <p>Year: {car.year}</p>
            <p>Description: {car.description}</p>
            <p> Average score: {car.average_score}</p>
            <Link className="nav-link" to={"/cars/" + car.id} ><button color="inherit">More info</button></Link>
            <button onClick={handleDeleteCar} color="inherit">Delete</button>

        </div>
    )
}

export default CarCard
