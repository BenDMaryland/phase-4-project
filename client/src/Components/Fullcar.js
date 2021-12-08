
import React, { useState } from 'react'
import Reviews from './Reviews'
import { Link } from 'react-router-dom'
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

        console.log(carUpdateObject)
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
        return (
            <div className="car-card" style={{ "height": "fit-content" }}  >
                <img src={car.photo} alt="" className="car-pic" />
                {UpdateRequested ? <> <br /> <label>Car photo url: </label>   <input value={carUpdateObject.photo} onChange={updateChangeHandler} placeholder={car.photo} name='photo'  ></input> </> : null}
                {UpdateRequested ? <> <br /> <label>Car model: </label>   <input value={carUpdateObject.model} onChange={updateChangeHandler} placeholder={car.model} name='model'  ></input> </> : <p>Model: {car.model}</p>}
                {UpdateRequested ? <> <br /> <label>Car year: </label>   <input value={carUpdateObject.year} onChange={updateChangeHandler} placeholder={car.year} name='year'  ></input> </> : <p>Year: {car.year}</p>}
                {UpdateRequested ? <> <br /> <label>Car description: </label>   <textarea value={carUpdateObject.description} onChange={updateChangeHandler} placeholder={car.description} name='description'  ></textarea> </> : <p>Description: {car.description}</p>}
                {car.owned_by.id === user.id ? UpdateRequested ? <button onClick={updateSubmitHandler} > UPDATE!!!!</button> : <button type="button" onClick={() => setUpdateRequested(!UpdateRequested)} >Would You like to update?</button> : null}
                {<Reviews reviews={car.reviews} />}
            </div>


        )
    }
}

export default FullCar


