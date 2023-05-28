import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456'},
    { name: 'Ada Lovelace', number: '39-44-5323523'},
    { name: 'Dan Abramov', number: '12-43-234345'},
    { name: 'Mary Poppendieck', number: '39-23-6423122'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  console.log(newName)

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

  let personsToShow = persons.filter(person => person.name.includes(filter))

  return (
    <div>
      <div>debug: {newName}</div>
      <div>debug: {newNumber}</div>
      <h1>Phonebook</h1>
      <div>
        filter shown with: <input value={filter} onChange={handleFilterChange}/>
      </div>
      <h2>add a new</h2>
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
      {personsToShow.map(person =>
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