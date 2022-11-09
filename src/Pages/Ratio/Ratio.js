import React from 'react';

const Ratio = () => {
    return (
        <div className=' mx-10 my-10  '>
            <div className=" w-full stats shadow ">
  
  <div className="stat place-items-center ">
    <div className="stat-title">Total Order</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">From January 1st to February 1st</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Users</div>
    <div className="stat-value text-error">4,200</div>
    <div className="stat-desc text-error">↗︎ 40 (2%)</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
    );
};

export default Ratio;