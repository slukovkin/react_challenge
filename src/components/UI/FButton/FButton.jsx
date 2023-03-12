import React from 'react'
import cl from './FButton.module.css'

export const FButton = ({ children, ...props }) => {
  const classes = props.className
  return (
    <button
      {...props}
      className={`${cl.btn} + ${classes}`}>
      {children}
    </button>
  )
}
