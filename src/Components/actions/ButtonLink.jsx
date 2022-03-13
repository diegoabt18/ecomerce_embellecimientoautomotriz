import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonLink = ({link, name, fun}) => {
  return (
    <NavLink className="border rounded-full px-2 hover:bg-color2" to={link} onClick={()=>fun()} >{name}</NavLink>
  )
}

export default ButtonLink