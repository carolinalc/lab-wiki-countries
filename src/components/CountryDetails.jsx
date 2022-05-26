import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

function CountryDetails() {

  const [ paisDetalles, setpaisDetalles] = useState(null)

    const {alpha3Code} = useParams()
    console.log(alpha3Code)

  useEffect(()=>{
    detallesDelPais()
  },[alpha3Code])

  const detallesDelPais = async () => {

    setpaisDetalles(null)
    try{
      const response = await axios.get(` https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      setpaisDetalles(response.data)
      console.log(response.data)
    }catch(err){console.log(err)}
  }

 
  if(paisDetalles === null){
    return <h3>...Loading</h3>
}

  return (
    <div className="card-body">
      <h2 className="card-title">{paisDetalles.name.common}</h2>
      <p className="card-text">{paisDetalles.capital}</p>
      <p className="card-text">{paisDetalles.area}</p>

      {paisDetalles.borders.map((eachCountry) => {
        return(
         
          <ul class="list-group">
            <li class="list-group-item list-group-item-info">{eachCountry}</li>
          </ul>
          
        )
        
      })}
     
    </div>
  )
}

export default CountryDetails