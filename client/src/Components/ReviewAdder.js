
import React from 'react'

function ReviewAdder({user, car }) {
console.log(user)
 if (!user)   return <p></p> ///// Error handling 
 else if (user.error) return (< p > Please sign up to leave a review!</p >)   // Handles if a user is nor signed in 
 else if (!car) return <p></p> ///// Error handling 
 else if (user.all_reviewed_ids.includes(car.id)) {   // Handles if a user has left a review 
      return (
         <div>
             <br />
<p> Would you like to update  your review </p>
             <br />
         </div>
     )
}
 else {   // Handles if a user has not left a review 

    return (
        <div>
            <br />
            <p>Please leave a review !</p>
            <br />
        </div>
    )
}}

export default ReviewAdder
