import React, { useEffect, useState } from 'react';

const MySingleReview = ({review,handleDeletReview}) => {
    const {_id,img,price,email,serviceName, comment}=review;
    const [reviews,setReviews]=useState([])

    useEffect(()=>{
        fetch(`https://genius-car-server-tau-plum.vercel.app/services/${reviews}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
  
  
      },[reviews])
    return (
        <div>
             
             <th>
          <label>
            <button onClick={()=>handleDeletReview(_id)} className='btn btn-ghost'>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3 w-full">
            <div className="avatar">
              <div className="rounded w-12 h-12">
                {
                  
                  <img src={img} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
            <div>
              <div className="font-bold">{serviceName}</div>
              
            </div>
          </div>
        </td>
        <td>
          {email}
          <br/>
          
        </td>
        <td><span className="badge badge-ghost badge-sm">{price}</span></td>
        <th>
        <span className="badge badge-ghost badge-sm">{comment}</span>
        </th>
      
        </div>
    );
};

export default MySingleReview;
