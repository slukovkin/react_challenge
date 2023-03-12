import React from 'react'
import cl from './UserItem.module.css'
import { FButton } from '../UI/FButton/FButton'

export const UserItem = ({ user, remove }) => {
  return (
    <div className={cl.box}>
      <span>ID: {user.id}</span>
      <span>Имя: {user.name}</span>
      <span>Возраст: {user.age}</span>
      <FButton
        className={cl.box_color}
        onClick={() => remove(user.id)}
      >
        Удалить
      </FButton>
    </div>
  )
}
