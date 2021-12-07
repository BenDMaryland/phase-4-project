import React from 'react'
import CarCard from './CarCard'

function CardContainer({carData}) {
console.log(!carData)

    if (!carData) return <p>loading </p>
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



