import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const AllReviews = () => {
    const [reviews,setReviews]= useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews`)
        .then(res=>res.json())
        .then(data=>{setReviews(data)})
    },[])
    return (
        <div className='text-center'>
           
           <p className='text-2xl font-bold text-orange-600'>All Reviews</p>
            
           <div className=''>
                   {
                    reviews.map(review=><SingleReview 
                    key={review._id}
                    review={review}
                    
                    
                    ></SingleReview>)
                    
                   }
           </div>
           
        </div>
    );
};

export default AllReviews;