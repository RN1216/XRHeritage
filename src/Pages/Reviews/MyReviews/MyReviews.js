import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../../../context/AuthProvider';
import MySingleReview from './MySingleReview';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews,setReviews]=useState([])
    

    useEffect(()=>{
        fetch(`https://xr-heritage-server.vercel.app/reviews?email=${user?.email}`)
        .then(res =>res.json())
        .then(data=>setReviews(data))
    },[user?.email])
    const handleDeletReview=id=>{
        const proceed = window.confirm('Are you sure ,you want to cancle this Order?');
        if(proceed){
          fetch(`https://xr-heritage-server.vercel.app/reviews/${id}`,{
            method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            if(data.deletedCount > 0){
                alert('Delete Successfully');
                const remaining = reviews.filter(ord => ord._id !== id);
                setReviews(remaining);
            }
        })
        }
      }
    return (
        <div>
        <h2 className="text-2xl text-center my-10">
          You Have {reviews.length} orders
        </h2>
  
        <div className=" ">
          <table className="table overflow-x-auto ">
            <thead>
              <tr>
              <th>Customer Email</th>
        <th>Services Title</th>
        <th>Price</th>
        <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <MySingleReview 
                key={review._id} 
                review={review}
                handleDeletReview={handleDeletReview}
                >
                  
                </MySingleReview>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyReviews;