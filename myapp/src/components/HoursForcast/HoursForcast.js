import React from 'react'
import WeatherItem from "../WeatherItem/WeatherItem";

export default function HoursForcast({data}) {


  return data?.list.map((item, index) => (<WeatherItem item={item}/>))
  
   
}