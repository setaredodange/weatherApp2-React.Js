import React , {useState} from 'react'

export default function Search({setQuery}) {

const [value, setValue]= useState()

  return (
    <div clasName={`search-container`}>
      <input type='text' placeholder={"Search the city name"} value={value} 
      onChange={(event)=>setValue(event.target.value)} />

      <button onClick={()=> setQuery(value)} >Check weather</button>
      
    </div>
  )
}
