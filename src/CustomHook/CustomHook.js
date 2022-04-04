import { useEffect, useState } from "react";

 const useCart = ()=>{
    const [reviewCart, setReviewCart] = useState([]);
    console.log(reviewCart);
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setReviewCart(data));
    }, [])
    return [reviewCart,setReviewCart];
 }
 export default useCart;