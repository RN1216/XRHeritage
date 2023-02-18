import React from 'react';
import banner from '../../assets/xr-banner.png'
import About from '../About/About';
import Ratio from '../Ratio/Ratio';
import Servises from '../Servises/Servises';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container'>
            
            <div className='w-full flex h-full'>
                <div className='flex-auto w-3/4  '>
                    <p className='w-full text-6xl my-9 mt-32'>Your Career<br></br><span className=' text-blue-400 '>Your Choice</span></p>
                    <p className='w-full text-xl italic tracking-wide mb-20'>Our Mision is to bring clarity in the process of placement for Rehub Professionals and place right candidate at right place.</p>
                    <Link className="text-md btn btn-outline ">Fresher</Link>
                    <Link className="text-md btn btn-outline mx-5">Exprience</Link>
                </div>
                <div className='flex-auto w-4/4 '>
                <img className='' src={banner} alt=''></img>
                </div>
                
            </div>
            <Servises></Servises>
            
            <Ratio></Ratio>
        </div>
    );
};

export default Home;