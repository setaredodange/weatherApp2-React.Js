import React from 'react';
import {useState, useEffect} from 'react';
import axios from "axios";
import Search from "../Search/Search";
import Weather from "../Weather/Weather";

export default function Main() {

  const[query, setQuery] = useState ('Tehran')

  const API_KEY = "10e500a2733b2361f1e74acf08b3cccc";
  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${API_KEY}&units=metric&cnt=4`;

  const [data, setData] = useState()


  useEffect(()=> {
    axios.get (URL)
    .then (res => setData (res.data))
    .catch (err => console.log (err))
  }, [query])




  return (
    <div className = {`main`}>
      <div>
        <Search setQuery={setQuery} />
        <Weather data={data} />
      </div> 
      
    </div>
  )
}
