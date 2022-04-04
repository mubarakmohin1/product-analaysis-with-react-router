 import React from 'react';
import useCart from '../../CustomHook/CustomHook';
import ReviewsDisplay from '../reviewsDisplay/ReviewsDisplay';
import './Reviews.css'
 
 const Reviews = () => {
     const [reviewCart,setReviewCart] = useCart();
     return (
         <div className='cart-display-container'>
             {
                 reviewCart.map(cart =><ReviewsDisplay key={cart._id} cart={cart}></ReviewsDisplay>)
             }
         </div>
     );
 };
 
 export default Reviews;