import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {

   const [response, setResponse] = useState()

   //Read
   const getApi = () =>{
    axios.get(url)
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
   }

   //Create
   const createApi = (data) =>{
    axios.post(url,data)
        .then(res => {
            console.log(res.data)
            setResponse([...response, res.data])
        })
        .catch(err => console.log(err))
   } 
   //Delete
   const deleteApi = (id) =>{
    axios.delete(`${url}/${id}`)
        .then(res => {
            console.log(res.data)
            setResponse(response.filter(user => user.id !== id))
        })
        .catch(err => console.log(err))
   }

   //Update
   const updateApi =(id, data) => {
    axios.put(`${url}/${id}`,data)
        .then(res => {
            console.log(res.data)
            setResponse(response.map(user => user.id === id ? res.data : user))
        })
        .catch(err => console.log(err))
   }

   return[response, getApi, createApi, deleteApi, updateApi]

}

export default useFetch