import React from 'react';
import Nav from './Nav';

const List = (props) => {

  let date = props.filterData.time;
  let month = new Date().getMonth()+1;

  return (
    <div className='text'>
      <div className="text-title">
        <h1>Taiwan <br></br> Weather Map</h1>
      </div>
      <div className='text-list'>
        <div className="text-list__date">
          <p>Date<br></br>(18:00視為隔日):</p>
          <h2>{month}/{props.list_ClickDay}</h2>
        </div>
        <div className="text-list__title">
          <p>Place:</p>
          <h2>{props.filterData.location.length>0?props.filterData.location:"請點擊地區"}</h2>
        </div>
        <div className="text-list__weather">
          <p>Weather:</p>
          <h3>{props.filterData.weather.length>0?props.filterData.weather:"天氣狀況"}</h3>
        </div>
        <div className="text-list__temperature">
          <p>Temperature:</p>
          <h3>{props.filterData.minTemperature.length>0?props.filterData.minTemperature:"xx度"}~
              {props.filterData.maxTemperature.length>0?props.filterData.maxTemperature:"xx度"}</h3>
        </div>
      </div>
    </div>
  )
}

export default List