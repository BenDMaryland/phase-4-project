import React from 'react'

function CardContainer({carData}) {
    return (
        <div>
           {carData.map((car) => {
               return ( 
                <div>
                    <p>{car.description}</p>
                     <img src={car.photo} alt="" />
                </div>
               )
           })}
        </div>
    )
}


export default CardContainer



