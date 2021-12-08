import React from 'react'

function Reviews({ reviews }) {
 



    if (reviews == undefined || reviews.length === 0) return <p>No comments </p>

    else if (reviews.length === 1) {

        return (
            <>
                <p> Review</p>
                <p>Name: {reviews[0].name}</p>
                <p> Comment: {reviews[0].comment}</p>
                <p>Rating: {reviews[0].rating}</p>
            </>
        )
    }

    else {
        return (
            reviews.map((review) => {
                return (
                    <div key={Reviews.id}>
                 <p> Review</p>
                <p>Name: {review.name}</p>
                <p> Comment: {review.comment}</p>
                <p>Rating: {review.rating}</p>
                </div>
                )
            }
            ))



    }






}

export default Reviews
