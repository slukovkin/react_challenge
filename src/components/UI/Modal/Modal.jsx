import React from 'react'
import cl from './Modal.module.css'
import { FButton } from '../FButton/FButton'

export const Modal = ({modal}) => {
  return (
    <div className={cl.modal} onClick={() => modal(false)} >
      <div className={cl.content}>
        <div className={cl.title}>
          <h3>Ошибка формы</h3>
        </div>
        <div className={cl.content_body}>
          <h4>Заполните поля формы</h4>
        </div>
        <div><FButton className={cl.btn_color}>Закрыть</FButton></div>
      </div>
    </div>
  )
}
