import React from 'react'
import cl from './FInput.module.css'

export const FInput = ({...props}) => {

  return (
    <input type="text"
      {...props}
      className={cl.inp} />
  )
}
