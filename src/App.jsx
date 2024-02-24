import { useEffect, useState} from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {

  const [userUpdate, setUserUpdate] = useState()
  const [isFormClose, setIsFormClose] = useState(true)
  const baseUrl = 'https://users-crud-jrjw.onrender.com/users'
  const [users, getUsers, createUser, deleteUser, updateUser] 
  = useFetch(baseUrl)

  useEffect(() => {
    getUsers()
  }, [])

  const handleOpenForm = () =>{
    setIsFormClose(false)
  }

  return (
    <div>
      <header className='users__header'>
      <h1 className='users__title'>USERS</h1>
      <button className = 'btn__create' onClick={handleOpenForm}> <i class='bx bx-plus'></i> Create New User</button>
      </header>
      <div className={`form__container ${isFormClose && 'form__close'}`}>
      <FormUser
      createUser = {createUser}
      userUpdate = {userUpdate}
      updateUser = {updateUser}
      setUserUpdate = {setUserUpdate}
      setIsFormClose = {setIsFormClose}
      />
      </div>
      <div className='user__container'>      
        {
          users?.map(user =>(
            <UserCard
            key = {user.id}
            user={user}
            deleteUser = {deleteUser}
            setUserUpdate = {setUserUpdate}
            setIsFormClose = {setIsFormClose}

            />
          ))
        }
      </div>
    </div>
  )
}

export default App
