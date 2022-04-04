 
import './Home.css'
 
import HomeRivew from '../HomeReview/HomeRivew';
import useCart from '../../CustomHook/CustomHook';
import { useNavigate } from 'react-router-dom';
 




const Home = () => {
     const [reviewCart] = useCart();
     const navigate = useNavigate()
    return (
        <div>
            <div className='home-container'>
                <div className='details-container'>
                    <h1><span className='details-title'>Eid Collection!!</span></h1>
                    <h1> Outstanding! Panjabi Review </h1>
                    <p>
                        during eid, The first choice of dress is panjabi.At a time it is looking nice everyone.Anyone can give me a panjabi in eid time,i never mind.At least give you a lot of thank you.
                    </p>
                </div>
                <div className='photo-container'>
                    <img src="panjabi1.jpg.webp" alt="" />
                </div>

            </div>
                <h1 className='review-title'>Customer Review(3)</h1>
            <div>
            <div className='review-container'>
                {
                    (reviewCart.slice(0,3)).map(cart => <HomeRivew key={cart._id} cart={cart}></HomeRivew>)
                }

            </div>
            <button onClick={()=> navigate('/review')} className='review-btn'> Display Review</button>

            </div>
           
        </div>
    );
};

export default Home;