import { Form } from './components/Form/Form'
import { useState } from 'react'
import { UserList } from './components/UserList/UserList'
import './assets/css/App.css'
import { Modal } from './components/UI/Modal/Modal'
import { Sorted } from './components/Sorted/Sorted'

function App() {
  const [users, setUsers] = useState([])
  const [modal, setModal] = useState(false)
  const [selectSorted, setSelectSorted] = useState('')

  const options = [{
    value: "name",
    name: "По имени"
  }, {
    value: "age",
    name: "По возрасту"
  }, {
    value: "id",
    name: "По ID"
  }]

  const isModal = (value) => {
    setModal(value)
  }

  const addNewUser = (user) => {
    setUsers([user, ...users])
  }

  const removeUser = (id) => {
    setUsers(users.filter(user => user.id != id))
  }

  const sortUser = (event) => {
    setSelectSorted(event)
    setUsers([...users].sort((a, b) => a[event].localeCompare(b[event])))
  }

  return (
    <div className='App'>
      <h1>Challenge №1</h1>
      <Form create={addNewUser} modal={isModal} />
      <Sorted
        defaultValue='Сортировка по:'
        options={options}
        onChange={sortUser}
        value={selectSorted} />

      {users.length !== 0
        ? <UserList users={users} remove={removeUser} />
        : <h2>Список пользователей пуст</h2>}
      {modal && <Modal modal={isModal} />}
    </div>
  )
}

export default App
