import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './service/personService'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)

  console.log(newName)

  useEffect(() => {
    personService.getAll().then(response => setPersons(response))
  }, [])

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
    if (persons.find(person => person.name == newName)) {
      if (window.confirm(`Do you want to change this ${newName}'s number?`)) {
        let previousPerson = persons.find(person => person.name == newName)
        let newPerson = {
          ...previousPerson,
          number: newNumber
        }
        personService.update(newPerson.id, newPerson).then(response => {
          console.log(`updating number is successfull`)
          let newPersons = persons.filter(person => person.id != newPerson.id).concat(newPerson)
          setPersons(newPersons)
          setNewName("")
          setNewNumber("")
          setMessage({ text: `Number of ${newPerson.name} is changed`, className: 'goodAlert' })
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        }).catch(error => {
          console.log(`updating number is not successfull. error ${error.message}`)
          setMessage({ text: error.message, className: 'badAlert' })
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
      }
    } else if (persons.find(person => person.number == newNumber)) {
      alert(`${newNumber} is already added to phonebook`)
    } else {
      let newPerson = {
        name: newName,
        number: newNumber
      }
      console.log(newPerson)
      personService.create(newPerson).then(response => {
        setPersons(persons.concat(response))
        setMessage({ text: `Number of ${newPerson.name} is added`, className: 'goodAlert' })
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        setNewName("")
        setNewNumber("")
      }).catch(error => {
        console.log(error)
        setMessage({ text: error.message, className: 'badAlert' })
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
    }
  }

  const handlePersonDelete = (event) => {
    event.preventDefault()
    const selectedPerson = persons.find(person => person.id == event.target.value)
    if (window.confirm(`delete ${selectedPerson.name}?`)) {
      personService.deleteObject(event.target.value).then(response => {
        const newPersons = persons.filter(person => person.id != event.target.value)
        setPersons(newPersons)
      })
    }
  }

  let personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <div>debug: {newName}</div>
      <div>debug: {newNumber}</div>
      <h1>Phonebook</h1>
      <Notification message={message} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber}
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}
        handleFormSubmit={handleFormSubmit} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} handlePersonDelete={handlePersonDelete} />
    </div>
  )
}

const Notification = ({ message }) => {
  if (message == null) {
    return null
  }

  return (
    <div className={message.className}>
      {message.text}
    </div>
  )
}

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      filter shown with: <input value={filter} onChange={handleFilterChange} />
    </div>
  )
}

const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, handleFormSubmit }) => {
  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit" onClick={handleFormSubmit}>add</button>
      </div>
    </form>
  )
}

const Persons = ({ persons, handlePersonDelete }) => {
  return (
    <div>
      {persons.map(person =>
        <Person key={person.number} person={person} handlePersonDelete={handlePersonDelete} />
      )}
    </div>
  )
}

const Person = ({ person, handlePersonDelete }) => {
  return (
    <div>
      <p>{person.name}: {person.number} <button value={person.id} onClick={handlePersonDelete}>delete</button>
      </p>
    </div>

  )
}

export default App