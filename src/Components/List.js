import React from 'react'

const List = (props) => {
  return (
    <div className='text'>
      <div className="text-title">
        <h1>Taiwan <br></br> Weather Map</h1>
      </div>
      <div className='text-list'>
        <div className="text-list__title">
          <p>Place:</p>
          <h2>{props.filterData.location}</h2>
        </div>
        <div className="text-list__weather">
          <p>Weather:</p>
          <h3>{props.filterData.weather}</h3>
        </div>
        <div className="text-list__temperature">
          <p>Temperature:</p>
          <h3>{props.filterData.minTemperature}~{props.filterData.maxTemperature}</h3>
        </div>
      </div>
    </div>
  )
}

export default List