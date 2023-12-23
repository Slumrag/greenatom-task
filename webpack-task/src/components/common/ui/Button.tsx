import React, { FC } from 'react'

export const Button:FC = () => {
  return (
   <button type="button" onClick={()=>console.log('clicked')}>Click me</button>
  )
}
