import React,{ useState , useEffect } from 'react';
import Nav from './Components/Nav';
import Map from './Components/Map';
import List from './Components/List';
import './style/all.css'


function App() {

  const [placeData,setPlaceData] = useState([]);
  const [filterData,setFilterData] = useState({
    location:"",
    weather:"",
    time:"",
    minTemperature:"",
    maxTemperature:""
  });
  let [clickDay,setClickDay] = useState(1);
  let [list_ClickDay,setShowClickDay] = useState(new Date().getDate());

  const apiKey = "CWB-5047D7D3-0310-4567-9107-A2FBFA95D3D4";
  const getData = async() => {
    await fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=${apiKey}`)
      .then((res)=>res.json())
      .then((res)=>{setPlaceData(res.records.locations[0].location)})
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      <Nav setClickDay={setClickDay} setFilterData={setFilterData} setShowClickDay={setShowClickDay}/>
      <div className='wrap'>
        <Map setFilterData={setFilterData} placeData={placeData} clickDay={clickDay}/>
        <List filterData={filterData} list_ClickDay={list_ClickDay}/>
      </div>
    </>
  );
}

export default App;