import React from 'react';

const Nav = (props) => {

  let month = new Date().getMonth()+1;
  let day = new Date().getDate();
  let weekDay = [];
  for(let i=0;i<7;i++){
    weekDay.push(day+Number([i]));
  }

  return (
    <div className='nav'>
      <h1>Taiwan-Weather-Map</h1>
      <ul className='weeks' 
        onClick={(e)=>{
                props.setShowClickDay(e.target.dataset.day);
                props.setClickDay(weekDay.findIndex((item)=>item===Number(e.target.dataset.day))*2+1);
                props.setFilterData((prev)=>{
                  return{...prev,
                    location:"",
                    weather:"",
                    time:"",
                    minTemperature:"",
                    maxTemperature:"" }
                })}}>
      <li><button data-day={weekDay[0]}>{month}/{weekDay[0]}</button></li>
      <li><button data-day={weekDay[1]}>{month}/{weekDay[1]}</button></li>
      <li><button data-day={weekDay[2]}>{month}/{weekDay[2]}</button></li>
      <li><button data-day={weekDay[3]}>{month}/{weekDay[3]}</button></li>
      <li><button data-day={weekDay[4]}>{month}/{weekDay[4]}</button></li>
      <li><button data-day={weekDay[5]}>{month}/{weekDay[5]}</button></li>
      <li><button data-day={weekDay[6]}>{month}/{weekDay[6]}</button></li>
      </ul>
    </div>
  )
}

export default Nav