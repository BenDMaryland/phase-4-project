import React from 'react'
import { Rating } from '@mui/material'
function Reviews({ reviews }) {




    if (reviews == undefined || reviews.length === 0) return <p>No comments </p>

    else if (reviews.length === 1) {

        return (
            <>
                <p>Name: {reviews[0].name}</p>
                <p> Comment: {reviews[0].comment}</p>
                <Rating name="read-only" value={reviews[0].rating} readOnly />
            </>
        )
    }
    else {
        return (
            reviews.map((review) => {
                console.log(review.comment)
                return (
                    <div key={Reviews.id}>
                      
                        <p >{review.name}</p>
                        <Rating name="read-only" value={review.rating} readOnly />
                        {review.comment == null ? null : <p> Comment: {review.comment}</p>}

                    <br/>

                        <br />
                    </div>
                )
            }
            ))



    }






}

export default Reviews
