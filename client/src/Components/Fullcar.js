
import React, { useState } from 'react'
import Reviews from './Reviews'
import { Rating } from '@mui/material'
import { Link } from 'react-router-dom'
import ReviewAdder from './ReviewAdder'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteIcon from '@mui/icons-material/Favorite';


function FullCar({ updateCar, car, user, setDOMUpdater }) {
    console.log(car)
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


    const handleLikeClick = (e) => {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: user.id,
                favorite: !car.favorite
            })
        };
        fetch(`/cars/${car.id}`, options)
            .then(resp => resp.json())
            .then(data => {
                if (data.success) {
                    updateCar(data.data);
                } else {
                    console.log(data);
                }
                (setDOMUpdater(Math.random()))

            });
    }


    // this is the component for rending a single car, here we can add reviews when we 
    if (car == undefined || car.length === 0) return <p>No comments </p>
    else if (car.length >= 1) {
        return (<p>one</p>)
    }
    else {
        console.log(car)
        return (
            <>
                <div id="side-nav">

                    <h3 id="favorite">Favorite Cars</h3>
                    <hr id="hr-line" />
                    {car.favorite_car.map((car) => <p id="nav-car-model">{car.model} <br /> <img id="nav-pic" src={car.photo} alt="" /></p>)}
                </div>

                <div id="more-card" >
                    {<FavoriteIcon onClick={handleLikeClick} id={car.favorite ? "like-color" : null} />}
                    

                    {UpdateRequested ? <> <br /> <label>Car model: </label>   <input value={carUpdateObject.model} onChange={updateChangeHandler} placeholder={car.model} name='model'  ></input> </> : <h2 className="more-car-model">{car.model}</h2>}
                    <Link to={"/car-pics"}><img src={car.photo} alt="" className="more-car-pic" /></Link>
                    <Rating name="read-only" value={car.average_score} readOnly />
                    <br />
                    <p>Number of reviews: {car.total_reviews}</p>
                    {UpdateRequested ? <> <br /> <label>Car photo url: </label>   <input value={carUpdateObject.photo} onChange={updateChangeHandler} placeholder={car.photo} name='photo'  ></input> </> : null}
                    {UpdateRequested ? <> <br /> <label>{car.owned_by.name}'s  </label>   <input value={carUpdateObject.model} onChange={updateChangeHandler} placeholder={car.model} name='model'  ></input> </> : <p>{car.owned_by.name}'s   {car.model}</p>}
                    {UpdateRequested ? <> <br /> <label>Car year: </label>   <input value={carUpdateObject.year} onChange={updateChangeHandler} placeholder={car.year} name='year'  ></input> </> : <p>Year: {car.year}</p>}
                    {UpdateRequested ? <> <br /> <label>Car description: </label>   <textarea value={carUpdateObject.description} onChange={updateChangeHandler} placeholder={car.description} name='description'  ></textarea> </> : <p>Description: {car.description}</p>}
                    {car.owned_by.id === user.id ? UpdateRequested ? <button onClick={updateSubmitHandler} > UPDATE!!!!</button> : <button type="button" onClick={() => setUpdateRequested(!UpdateRequested)} >Would You like to update?</button> : null}
                    <Link to={"/cars"}><ArrowBackIcon onClick={() => setDOMUpdater(Math.random())} id="more-btn" /></Link>
                    <ReviewAdder setDOMUpdater={setDOMUpdater} car={car} user={user} />

                </div>
                <div className="review_container">
                    {<Reviews reviews={car.reviews} />}

                </div>

            </>


        )
    }
}

export default FullCar



















