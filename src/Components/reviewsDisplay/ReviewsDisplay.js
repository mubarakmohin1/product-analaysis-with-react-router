import React from 'react';
import './ReviewsDisplay.css'

const ReviewsDisplay = ({cart}) => {
    const {name,feedback,ratings} = cart;
    return (
        <div className='cart-display'>
            <h3>Name: {name}</h3>
            <p>Feedback: {feedback}</p>
            <b>Ratings: {ratings}</b>
            
        </div>
    );
};

export default ReviewsDisplay;