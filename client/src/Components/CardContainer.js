import React from 'react'
import CarCard from './CarCard'

function CardContainer({ carData, user}) {

//// Stops this function from running if carData is not correct.     
if (carData.length == undefined || carData.length <= 1) return <p> Loading</p>


        return (
        <div>
           <div>{carData.map((car) => {
               return (
                   <CarCard key={car.id} user={user} car={car}/>
               )
           })}
           </div>
        </div>
    )
}


export default CardContainer



