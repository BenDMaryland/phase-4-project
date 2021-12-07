import React from 'react'
import CarCard from './CarCard'

function CardContainer({carData}) {
    return (
        <div>
           <div>{carData.map((car) => {
               return (
                <CarCard key={car.id} car={car}/>
               )
           })}
           </div>
        </div>
    )
}


export default CardContainer



