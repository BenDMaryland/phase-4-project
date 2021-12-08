
import React, { useState } from 'react'
import Reviews from './Reviews'
import { Rating } from '@mui/material'
import { Link } from 'react-router-dom'
import ReviewAdder from './ReviewAdder'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function FullCar({ car, user, setDOMUpdater }) {

    const [UpdateRequested, setUpdateRequested] = useState(false)
    const [carUpdateObject, setcarUpdateObject] = useState({
    })

    function updateChangeHandler(e) {
        setcarUpdateObject(data => data = { ...data, [e.target.name]: e.target.value })
        console.log(carUpdateObject)
    }

    function updateSubmitHandler(e) {
        e.preventDefault()

        if (carUpdateObject.model === undefined) { carUpdateObject.model = car.model }
        if (carUpdateObject.model === "") { carUpdateObject.model = car.model }
        if (carUpdateObject.description === undefined) { carUpdateObject.description = car.description }
        if (carUpdateObject.description === "") { carUpdateObject.model = car.model }
        if (carUpdateObject.year === undefined) { carUpdateObject.year = car.year }
        if (carUpdateObject.year === "") { carUpdateObject.model = car.model }
        if (carUpdateObject.photo === undefined) { carUpdateObject.photo = car.photo }
        if (carUpdateObject.photo === "") { carUpdateObject.model = car.model }
      
        fetch(`${car.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                description: carUpdateObject.description,
                year: carUpdateObject.year,
                model: carUpdateObject.model,
                photo: carUpdateObject.photo
            }),
        }).then(setUpdateRequested(!UpdateRequested))
            .then(setDOMUpdater(Math.random()));
    }




    /// this is the component for rending a single car, here we can add reviews when we 
    if (car == undefined || car.length === 0) return <p>No comments </p>
    else if (car.length >= 1) {
        return (<p>one</p>)
    }
    else {
        console.log(car)
        return (

            <div className="car-card" style={{ "maxHeight": "fit-content" }}  >

                <img src={car.photo} alt="" className="car-pic" />
                <Rating name="read-only" value={car.average_score} readOnly />
                <br/>
                <p>Number of reviews: {car.total_reviews}</p>
                {UpdateRequested ? <> <br /> <label>Car photo url: </label>   <input value={carUpdateObject.photo} onChange={updateChangeHandler} placeholder={car.photo} name='photo'  ></input> </> : null}
                {UpdateRequested ? <> <br /> <label>{car.owned_by.name}'s  </label>   <input value={carUpdateObject.model} onChange={updateChangeHandler} placeholder={car.model} name='model'  ></input> </> : <p>{car.owned_by.name}'s   {car.model}</p>}
                {UpdateRequested ? <> <br /> <label>Car year: </label>   <input value={carUpdateObject.year} onChange={updateChangeHandler} placeholder={car.year} name='year'  ></input> </> : <p>Year: {car.year}</p>}
                {UpdateRequested ? <> <br /> <label>Car description: </label>   <textarea value={carUpdateObject.description} onChange={updateChangeHandler} placeholder={car.description} name='description'  ></textarea> </> : <p>Description: {car.description}</p>}
                {car.owned_by.id === user.id ? UpdateRequested ? <button onClick={updateSubmitHandler} > UPDATE!!!!</button> : <button type="button" onClick={() => setUpdateRequested(!UpdateRequested)} >Would You like to update?</button> : null}
                <p>Reviews</p>
                <p>_____________</p>
                <ReviewAdder setDOMUpdater={setDOMUpdater} car={car} user={user}  />
                {<Reviews reviews={car.reviews} />}
                <Link lassName="nav-link" to={"/cars"}><ArrowBackIcon onClick={() => setDOMUpdater(Math.random())}id="more-btn"/></Link>
            </div>


        )
    }
}

export default FullCar


