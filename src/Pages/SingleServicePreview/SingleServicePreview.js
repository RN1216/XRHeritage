import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SingleServicePreview = () => {
    
    const {_id,title,price,img}= useLoaderData();
    const {user} = useContext(AuthContext)

    const handleplaceOrder =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name =`${form.firstName.value} ${form.lastName.value}`;
        const email = form.email.value;
        const comment =form.comment.value

        const order ={
            service:_id,
            serviceName:title,
            price,
            customer:name,
            email,
            
            comment
        }
        fetch('https://genius-car-server-tau-plum.vercel.app/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                alert('Order place Successfully')
                form.reset();
            }
        
        })
        .catch(er=>console.log(er));
    }
    return (
        <form onSubmit={handleplaceOrder} className='w-1/2 mx-auto my-5 text-center'>
        <figure>
        <img className=" w-full rounded my-5" src={img} alt="" />
      </figure>
        <h2 className='text-xl text-left'>{title} </h2>
        <h4 className='text-xl text-lrft'>
            price:{price}
        </h4>
         
       <div>
       <textarea name="comment" className="w-full textarea textarea-bordered  " placeholder="Your Message"></textarea>
       </div>
       <input className='btn btn-error' type='submit' value='place your order'/>
       </form>
    );
};

export default SingleServicePreview;