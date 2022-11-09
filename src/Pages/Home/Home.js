import React from 'react';
import banner from '../../assets/xr-banner.png'
import About from '../About/About';
import Ratio from '../Ratio/Ratio';

const Home = () => {
    return (
        <div className='container'>
            <div className=''>
                <img className='w-full' src={banner} alt=''></img>
            </div>
            <About></About>
            <Ratio></Ratio>
        </div>
    );
};

export default Home;