import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '14531'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

console.log(newName)

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

  return (
    <div>
      <div>debug: {newName}</div>
      <div>debug: {newNumber}</div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
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