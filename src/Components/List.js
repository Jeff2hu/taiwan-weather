import React from 'react';

const List = (props) => {

  let date = props.filterData.time;

  return (
    <div className='text'>
      <div className="text-title">
        <h1>Taiwan <br></br> Weather Map</h1>
      </div>
      <div className='text-list'>
        <div className="text-list__date">
          <p>Date:</p>
          <h2>{date.length>0?date.slice(0,10):(new Date().getMonth()+1)+"/"+(new Date().getDate())}</h2>
        </div>
        <div className="text-list__title">
          <p>Place:</p>
          <h2>{props.filterData.location.length>0?props.filterData.location:"請點擊地區"}</h2>
        </div>
        <div className="text-list__weather">
          <p>Weather:</p>
          <h3>{props.filterData.weather.length>0?props.filterData.weather:"請點擊地區"}</h3>
        </div>
        <div className="text-list__temperature">
          <p>Temperature:</p>
          <h3>{props.filterData.minTemperature.length>0?props.filterData.minTemperature:"xx"}~
              {props.filterData.maxTemperature.length>0?props.filterData.maxTemperature:"xx"}</h3>
        </div>
      </div>
    </div>
  )
}

export default List