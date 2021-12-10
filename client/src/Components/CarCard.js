import { useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import DeleteIcon from '@mui/icons-material/Delete';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Avatar } from '@mui/material';





function CarCard({  setDOMUpdater, car, user, onDeleteCar }) {
  const [counter, setcounter] = useState(0)
  // const [like, setlike] = useState(false)

  function ratingAddHandler(e) {
    if (counter == 0) { setcounter(1) }
    else {
      fetch(`/reviews/`, {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({
          car_id: car.id,
          user_id: user.id,
          rating: e.target.value
        }),
      }).then((r) => {
        if (r.ok) {
          r.json()
            .then(setDOMUpdater(Math.random()))
            .then(alert("thank you "))
            .then(setcounter(0))
        }
      });
    }
  }

  function handleDeleteCar() {
    fetch(`/cars/${car.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        onDeleteCar(car);
      }
    });
  }

  //  const handleLikeClick = (e) => {
  //       const options = {
  //           method: 'PATCH',
  //           headers: {
  //               'Content-Type': 'application/json'
  //           },
  //           body: JSON.stringify({
  //               user_id: user.id,
  //               favorite: !car.favorite
  //           })
  //       };
  //         fetch(`/cars/${car.id}`, options)
  //           .then(resp => resp.json())
  //           .then(data => {
  //               if (data.success) {
  //                   updateCar(data.data);
  //               } else {
  //                   console.log(data);
  //               }
  //           (setDOMUpdater(Math.random()))
                
  //           });
  //   }
 


  return (
    <div className="car-card">
      {/* <Avatar/> */}
      {/* {<FavoriteIcon onClick={handleLikeClick} id={ car.favorite ? "like-color" : null}/>} */}
      <p id="car-model">{car.model}</p>
      <p id="car-year"> Year: {car.year}</p>
      <img src={car.photo} alt="" className="car-pic" />
      {car.owned_by.id === user.id ? <p>You own</p> : <p>You dont't own!</p>}
      <p>{car.description}</p>
      <p>Number of reviews: {car.total_reviews}</p>
      <Rating id="star-rating" name="half-rating" defaultValue={car.average_score} onClick={ratingAddHandler} precision={0.5}>
      </Rating>
      {car.owned_by.id === user.id? <DeleteIcon id="delete-btn" onClick={handleDeleteCar} />: null}
      <Link  to={"/cars/" + car.id}><ReadMoreIcon onClick={() => setDOMUpdater(Math.random())} id="more-btn" /></Link>
    </div>
  )
}

export default CarCard


















