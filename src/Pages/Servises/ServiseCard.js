import React from 'react';
import { Link } from 'react-router-dom';
import {FaStar} from 'react-icons/fa'

const ServiseCard = ({service}) => {
    const {_id, title, img, price,description ,rating} = service;
  return (
    <div className="card card-compact w-4/5 bg-base-100 shadow-xl m-5">
      <figure>
        <img className=" w-full " src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-left text-xl font-bold text-orange-600">
          Price: {price}
        </p>
        <p className="text-left  font-bold text-black-600">
          {description}
        </p>
        <div className="flex justify-around my-auto">
        <div className="flex justify-start my-auto">
            <FaStar className="text-warning"></FaStar>
            <FaStar className="text-warning "></FaStar>
            <FaStar className="text-warning "></FaStar>
            <span className="mx-2">{rating}</span>
          </div>
        <div className="flex">
        <Link to={`/singleservicepreview/${_id}`}> 
         <button className="btn btn-outline btn-error">go</button>
         </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ServiseCard;