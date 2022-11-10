import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SingleServicePreview = () => {
    
    const {_id,title,price,img,description}= useLoaderData();
    const {user} = useContext(AuthContext)
    const handlereview =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unregister';
        const comment =form.comment.value

        const review ={
            service:_id,
            serviceName:title,
            price,
            email,
            comment
        }
        fetch('http://localhost:5000/reviews',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                alert('Thank you')
                form.reset();
            }

        })
        .catch(error=>console.log(error));
    
    }
    return (
        <form onSubmit={handlereview} className='w-1/2 mx-auto my-5 text-center'>
        <figure>
        <img className=" w-full rounded my-5" src={img} alt="" />
      </figure>
        <div className='flex justify-between my-10'>
        <h2 className='text-xl text-left my-auto'>{title} </h2>
        <h4 className='text-md text-left text-error my-auto '>
            price:${price}
        </h4>
        </div>
        <p className="text-left mb-20 text-black-600">
          {description}
        </p>
         <p className="text-left mb-10 text-black-600">Email Address: {user.email}</p>
       <div>
       <textarea name="comment" className="w-full textarea textarea-bordered  " placeholder="Share your exprience with us..."></textarea>
       </div>
       <input className='btn btn-error my-10' type='submit' value='comment'/>
       </form>
    );
};

export default SingleServicePreview;