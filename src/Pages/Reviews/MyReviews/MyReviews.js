import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../../../context/AuthProvider';
import MySingleReview from './MySingleReview';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews,setReviews]=useState([])
    

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res =>res.json())
        .then(data=>setReviews(data))
    },[user?.email])
    const handleDeletOrder=id=>{
        const proceed = window.confirm('Are you sure ,you want to cancle this Order?');
        if(proceed){
          fetch(`http://localhost:5000/reviews/${id}`,{
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
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <MySingleReview 
                key={review._id} 
                review={review}
                handleDeletOrder={handleDeletOrder}
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