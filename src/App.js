
import './App.css';
import {Routes, Route} from "react-router-dom"
import CountriesList from "./components/CountriesList"
import CountryDetails from "./components/CountryDetails"
import Navbar from "./components/Navbar"



function App() {
  return (
    <div className="App">

      <Navbar /> 
      <div id="mi-pagina">

      <CountriesList /> 

      <Routes>
      <Route path="/:alpha3Code" element={ <CountryDetails/>}></Route>
      </Routes>

      </div>
      
     

      
     
    </div>
  );
}

export default App;
