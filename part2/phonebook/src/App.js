import { useState, useEffect } from 'react'
import axios from 'axios'

const App = ({data}) => {
  const [persons, setPersons] = useState(data)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  console.log(newName)

  useEffect(()=>{
    axios.get("http://localhost:3001/persons").then(response=>{
      setPersons(response.data)
    })
  },[])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name == newName)){
      alert(`${newName} is already added to phonebook`)
    }else if(persons.find(person => person.number == newNumber)){
      alert(`${newNumber} is already added to phonebook`)
    }else{
      let newPersons = persons
      newPersons.push({
        name: newName,
        number: newNumber
      })
      setPersons(newPersons)
      setNewName("")
      setNewNumber("")
    }
    
  }

  let personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <div>debug: {newName}</div>
      <div>debug: {newNumber}</div>
      <h1>Phonebook</h1>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleFormSubmit={handleFormSubmit}/>
      <h2>Numbers</h2>
      <Persons persons={personsToShow}/>
    </div>
  )
}

const Filter = ({filter, handleFilterChange}) => {
  return (
    <div>
      filter shown with: <input value={filter} onChange={handleFilterChange}/>
    </div>
  )
}

const PersonForm = ({newName, newNumber, handleNameChange, handleNumberChange, handleFormSubmit}) => {
  return(
    <form>
    <div>
      name: <input value={newName} onChange={handleNameChange}/>
    </div>
    <div>
      number: <input value={newNumber} onChange={handleNumberChange}/>
    </div>
    <div>
      <button type="submit" onClick={handleFormSubmit}>add</button>
    </div>
  </form>
  )
}

const Persons = ({persons}) => {
  return (
    <div>
      {persons.map(person =>
        <Person key={person.number} person={person}/>
      )}
    </div>
  )
}

const Person = ({person}) => {
  return (
    <div>
      <p>{person.name}: {person.number}</p>
    </div>
    
  )
}

export default App