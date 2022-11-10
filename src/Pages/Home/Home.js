import React from 'react';
import banner from '../../assets/xr-banner.png'
import About from '../About/About';
import Ratio from '../Ratio/Ratio';
import Servises from '../Servises/Servises';

const Home = () => {
    return (
        <div className='container'>
            <div className=''>
                <img className='w-full' src={banner} alt=''></img>
            </div>
            <Servises></Servises>
            <About></About>
            <Ratio></Ratio>
        </div>
    );
};

export default Home;