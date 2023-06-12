import axios from "axios";

const url = "/api/persons"

const getAll = () => {
    console.log(`personService getAll`)
    return axios.get(url)
    .then( response => response.data)
}

const create = (newObject) => {
    console.log(`personService create new person`)
    return axios.post(url, newObject)
    .then(response => {
        console.log(`personService create then. response is below:`)
        console.log(response)
        return response.data
    })
    .catch(error => {
        console.log(`personService create catch. error is below:`)
        console.log(error)
        throw error;
    })
}

const update = (id, newObject) => {
    console.log(`personService update person with id ${id}`)
    return axios.put(`${url}/${id}`,newObject)
    .then(response => {
        console.log(`personService update then. response is below:`)
        console.log(response)
        return response.data
    })
    .catch(error => {
        console.log(`personService update catch. error is below:`)
        console.log(error)
        throw error;
    })
}

const deleteObject = (id) => {
    console.log(`personService delete person with id ${id}`)
    return axios.delete(`${url}/${id}`).then(response => response.data)
}

export default {getAll, create, update, deleteObject}