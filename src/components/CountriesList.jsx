import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


function CountriesList() {

  const [ paisesLista, setpaisesLista ] = useState(null)
 

  useEffect(() =>{
    getTheCountry()
  },[])

  const getTheCountry = async () => {
    setpaisesLista(null)
    try{
      const response = await axios.get(` https://ih-countries-api.herokuapp.com/countries/`)
      setpaisesLista(response.data)
    }catch(err){console.log(err)}
  }

  useEffect(() =>{
    getTheCountry()
  },[])

  if(paisesLista === null){
    return <h3>...Loading</h3>
}


  return (
    <div>
      
      {paisesLista.map((eachCountry) => {
        return(

          <ul  className="list-group">
            <Link className="list-group-item" to={`/${eachCountry.alpha3Code}`}>{eachCountry.name.common}</Link>
          </ul>
        )
        
      })}
     

    </div>
  )
}

export default CountriesList