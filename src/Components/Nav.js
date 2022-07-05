import React, { useState } from 'react';

const Nav = (props) => {

  let today = `${new Date().getMonth()+1} / ${new Date().getDate()}`;
  const weeks = ["今日","明日","後天","大後天"];

  return (
    <div className='nav'>
      <h1>Taiwan-Weather-Map</h1>
      <ul className='weeks' 
        onClick={(e)=>{
                props.setClickDay((weeks.findIndex((item)=>item===e.target.textContent)*2+1))
                props.setFilterData((prev)=>{
                  return{...prev,
                    location:"",
                    weather:"",
                    time:"",
                    minTemperature:"",
                    maxTemperature:"" }
                })}}>
      <li><button>今日</button></li>
      <li><button>明日</button></li>
      <li><button>後天</button></li>
      <li><button>大後天</button></li>
      </ul>
    </div>
  )
}

export default Nav