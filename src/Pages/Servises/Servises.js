import React, { useEffect, useState } from 'react';
import ServiseCard from './ServiseCard';

const Servises = () => {
    const [services , setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/servises')
        .then(res=>res.json())
        .then(data=>{setServices(data)})
    },[])
    return (
        <div className='text-center'>
           <div>
           <p className='text-2xl font-bold text-orange-600'>Service</p>
            <h1 className="my-10 text-5xl font-bold">Our Service Area</h1>
            <p className="py-6 mx-auto w-1/2">the majority have suffered alteration in some form, 
            by injected humour, or randomised words which don't look even slightly believable.  </p>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                   {
                    services.map(service=><ServiseCard 
                    key={service._id}
                    service={service}
                    ></ServiseCard>)
                   }
           </div>
           <div className="card-actions justify-center m-5">
    <button className="btn btn-outline btn-error">More Services</button>
    </div>
        </div>
    );
};

export default Servises;