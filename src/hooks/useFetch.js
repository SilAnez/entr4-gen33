import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl) => {

   const [response, setResponse] = useState()

   //Read
   const getApi = () =>{
    const url = `${baseUrl}/users/`
    axios.get(url)
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
   }

   //Create
   const createApi = (data) =>{
    const url = `${baseUrl}/users/`
    axios.post(url,data)
        .then(res => {
            console.log(res.data)
            setResponse([...response, res.data])
        })
        .catch(err => console.log(err))
   } 
   //Delete
   const deleteApi = (id) =>{
    const url = `${baseUrl}/users/${id}/` 
    axios.delete(url)
        .then(res => {
            console.log(res.data)
            setResponse(response.filter(user => user.id !== id))
        })
        .catch(err => console.log(err))
   }

   //Update
   const updateApi =(id, data) => {
    const url = `${baseUrl}/users/${id}/` 
    axios.put(url,data)
        .then(res => {
            console.log(res.data)
            setResponse(response.map(user => user.id === id ? res.data : user))
        })
        .catch(err => console.log(err))
   }

   return[response, getApi, createApi, deleteApi, updateApi]

}

export default useFetch