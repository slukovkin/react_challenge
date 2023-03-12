import React, { useState } from 'react'
import { FButton } from '../UI/FButton/FButton'
import { FInput } from '../UI/FInput/Finput'

import cl from './Form.module.css'

export const Form = ({ create, modal }) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const nameHandler = (e) => {
    setName(e.target.value)
  }
  const ageHandler = (e) => {
    setAge(e.target.value)
  }

  const submitDataForm = (e) => {
    e.preventDefault()
    if (name != '' || age != '') {
      setName('')
      setAge('')
      create({
        id: Date.now(),
        name: name,
        age: age
      })
    } else {
      modal(true)
    }
  }



  return (
    <form className={cl.form} onSubmit={submitDataForm}>
      <h2>Создание пользователя</h2>
      <FInput placeholder={'Введите имя пользователя'} value={name} onChange={nameHandler} />
      <FInput placeholder={'Введите возраст пользователя'} value={age} onChange={ageHandler} />
      <FButton className={cl.btn_color} type='submit' >Создать</FButton>
    </form>
  )
}
