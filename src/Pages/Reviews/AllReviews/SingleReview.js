import React, { useState } from 'react';

const SingleReview = ({review,handleDeletReview}) => {
    const {_id,email, title, img, price,comment} = review;

    return (
        <div className="overflow-x-auto w-full">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Customer Email</th>
        <th>Services Title</th>
        <th>Price</th>
        <th>Comments</th>
        
      </tr>
    </thead>
    <tbody>
     
      <tr>
        <th>
          <label>
          <button onClick={()=>handleDeletReview(_id)} className='btn btn-ghost'>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                
                
                    <img src={img} alt="Avatar Tailwind CSS Component" />
                
              </div>
            </div>
            <div>
              <div className="font-bold">{email}</div>
              
            </div>
          </div>
        </td>
        <td>
          {title}
          
        </td>
        <td>{price}</td>
        <th>
        <span className="badge badge-ghost badge-sm">{comment}</span>
        </th>
        
      </tr>
    
      
    </tbody>
    
    
  </table>
</div>
    );
};

export default SingleReview;