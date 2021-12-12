import React from 'react'
import CarCard from './CarCard'

function CardContainer({ handleDeleteCar, carData, user, setDOMUpdater}) {

//// Stops this function from running if carData is not correct.     
if (carData.length == undefined || carData.length <= 1) return <p> Loading Please Wait</p>


        return (
        <div>
           <div>{carData.map((car) => {
               return (
                   <CarCard setDOMUpdater={setDOMUpdater} key={car.id} user={user} car={car} onDeleteCar={handleDeleteCar}/>
               )
           })}
           </div>
        </div>
    )
}


export default CardContainer



