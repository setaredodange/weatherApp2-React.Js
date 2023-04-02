import React from 'react'
import HoursForcast from "../HoursForcast/HoursForcast";

export default function Weather({data}) {
  console.log(data);


  return (
  
    <div className={`content-container`}>
    <div className={`content-container-title`}>
        <div>
            <h2>{data?.city?.country}</h2>
            <h1>{data?.city?.name}</h1>
        </div>
        <div className={`content-container-title-temp`}>
            <h1>{Math.floor(data?.list[0].main?.temp)}°</h1>
            <img src={`http://openweathermap.org/img/wn/${data?.list[0]?.weather[0].icon}@2x.png`} alt=""/>
        </div>
    </div>
    <div className={`weather-content-info`}>
        <div>wind speed:<br/><span>{data?.list[0]?.wind?.speed}</span></div>
        <div>feels like:<br/><span>{Math.floor(data?.list[0]?.main?.feels_like)}</span></div>
        <div>humidity: <br/><span>{Math.floor(data?.list[0]?.main?.humidity)}</span></div>
        <div>pressure: <br/><span>{Math.floor(data?.list[0]?.main?.pressure)}</span></div>
    </div>
    <div className={`forecast-container`}>
        <HoursForcast data={data}/>
    </div>
</div>
  )
}

