import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

console.log(newName)

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    let newPersons = persons
    newPersons.push({name: newName})
    setPersons(newPersons)
    setNewName("")
  }

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit" onClick={handleFormSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
          <Person key={person.name} person={person.name}/>
      )}
    </div>
  )
}

const Person = ({person}) => {
  return (
    <p>{person}</p>
  )
}

export default App