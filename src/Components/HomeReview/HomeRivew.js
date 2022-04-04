import React from 'react';
import './HomeRivew.css'

const HomeRivew = ({cart}) => {
    const {name,feedback,ratings} = cart;
    return (
        <div className='cart-details'>
            <h3>Name: {name}</h3>
            <p><b>Feedback</b>: {feedback}</p>
            <b>Ratings: {ratings}</b>
        </div>
    );
};

export default HomeRivew;