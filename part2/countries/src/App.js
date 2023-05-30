import { useState, useEffect } from 'react'
import axios from 'axios'
import countriesService from './service/countriesService'
import './App.css'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')


  useEffect(()=>{
    console.log('useEffect')
    countriesService.getAll().then(response=>{
      setCountries(response)
    })    
  },[])

  const handleFilterChange = (event)=>{
    setFilter(event.target.value)
  }

  let countriesToShow = []
  if(countries.find(country => country.name.common.toLowerCase() == filter.toLowerCase())){
    countriesToShow.push(countries.find(country => country.name.common.toLowerCase() == filter.toLowerCase()))
  }else{
    countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  }
  return (
    <div>
      <p>debug: {filter}</p>
      find countries <input value={filter} onChange={handleFilterChange}></input>
      <Countries countries={countriesToShow} setFilter={setFilter}/>
    </div>
  )
}

const Countries = ({countries, setFilter}) => {
  if(countries.length == 0){
    return (
      <p>There is no suitable countries</p>
    )
  }else if (countries.length == 1){
    return(<div>
      <CountryExpended country={countries[0]}/>
    </div>)
  }else if (countries.length  < 10){
    return (
      <div>
        {countries.map(country => 
            <Country country={country} key={country.name.common} setFilter={setFilter}/>
        )}
      </div>
    )
  }else{
    return (
      <p>There are too many suitable countries</p>
    )
  }
}

const Country = ({country, setFilter}) => {
  return(
    <p>{country.name.common} <button onClick={()=>setFilter(country.name.common)}>show me</button></p>
  )
}

const CountryExpended = ({country}) => {
  let languages = []
  Object.entries(country.languages).forEach(function([key, value]) {
    languages.push(value)
  })
  console.log(country.flags.png)
  return(
    <div>
      <h1>{country.name.common}</h1>
      <p>capital: {country.capital[0]}</p>
      <p>area: {country.area}</p>
      <br/>
      <p><b>languages:</b></p>
      <ul>
        {languages.map(lan => <li key={lan}>{lan}</li>)}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt}/>
    </div>
  )
}

export default App