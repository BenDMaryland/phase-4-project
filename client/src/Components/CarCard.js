import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import DeleteIcon from '@mui/icons-material/Delete';
import ReadMoreIcon from '@mui/icons-material/ReadMore';


function CarCard({ setDOMUpdater, car, user, onDeleteCar }) {

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
            <p id="car-model">{car.model}</p>
            <p id="car-year"> Year: {car.year}</p>
            <img src={car.photo} alt="" className="car-pic" />
            {car.owned_by.id === user.id ? <p>You own</p> : <p>You dont't own!</p>}
            <p>{car.description}</p>
            <Rating id="star-rating" name="half-rating" defaultValue={car.average_score} precision={0.5}>
            </Rating>
            <DeleteIcon id="delete-btn" onClick={handleDeleteCar}/>
            <Link lassName="nav-link" to={"/cars/" + car.id}><ReadMoreIcon onClick={() => setDOMUpdater(Math.random())}id="more-btn"/></Link>
        </div>
    )
}
    
export default CarCard
            
            
            
            
            
            
            

            
            
            
            
        
        
        



