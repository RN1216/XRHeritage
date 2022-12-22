import React from 'react';
import about from '../../assets/About.png'

const About = () => {
    return (
        <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <div className='relative w-1/2 pl-5'>
         <img src={about} alt='about-img'></img>
          </div>
          <div className='w-1/2'>
              <p className='text-2xl font-bold text-error-content'>About Us</p>
            <h1 className="my-10 text-5xl font-bold">We are qualified <br/>& of experience<br/> in this field</h1>
            <p className="py-6">XR Heritage is one of the largest furniture brands in the world as of 2020, and a manufacturer and supplier of ready-to-assemble furniture and homeware. </p>
            <p className="py-6"> XR Heritage was founded 76 years ago by Ingvar Kamprad with its first store in Älmhult, Småland. XR Heritage is headquartered in Delft, Netherlands, and operates 433 locations worldwide in 52 countries. </p>
            <button className="btn btn-error">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;