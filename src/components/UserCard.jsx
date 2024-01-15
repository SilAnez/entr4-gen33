import React from 'react'
import './styles/UserCard.css'

const UserCard = ({user,deleteUser,setUserUpdate,setIsFormClose }) => {

    const handleDelete = () =>{
        deleteUser(user.id)
    }
    const handleEdit = () =>{
        setUserUpdate(user)
        setIsFormClose(false)
    }
  return (

    <article className='user'>
    <h2 className='user__name'>{user.first_name} {user.last_name}</h2>
    <hr  className='user__hr' />
    <ul className='user__list'>
      <li><span className='user__label'>Email: </span><span className='user__value'>{user.email}</span></li>
      <li><span className='user__label'>Birthday: </span><span className='user__value'><i class='bx bxs-gift'></i> {user.birthday}</span></li>
    </ul>
    <hr className='user__hr' />
    <footer className='user__footer'>
      <button className='user__button__delete' onClick={handleDelete}><i className='bx bx-trash'></i></button>
      <button className='user__button__edit' onClick={handleEdit}><i className='bx bx-edit-alt' ></i></button>
    </footer>
  </article>

  )
}

export default UserCard