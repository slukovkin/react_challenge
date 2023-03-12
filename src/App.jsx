import { Form } from './components/Form/Form'
import { useState } from 'react'
import { UserList } from './components/UserList/UserList'
import './assets/css/App.css'
import { Modal } from './components/UI/Modal/Modal'

function App() {
  const [users, setUsers] = useState([])
  const [modal, setModal] = useState(false)

  const isModal = (value) => {
    setModal(value)
  }

  const addNewUser = (user) => {
    setUsers([user, ...users])
  }

  const removeUser = (id) => {
    setUsers(users.filter(user => user.id != id))
  }

  return (
    <div>
      <h1>Challenge №1</h1>
      <Form create={addNewUser} modal={isModal} />
      {users.length !== 0
        ? <UserList users={users} remove={removeUser} />
        : <h2>Список пользователей пуст</h2>}
      {modal && <Modal modal={isModal} />}
    </div>
  )
}

export default App
