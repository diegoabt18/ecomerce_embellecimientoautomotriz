import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonLink = ({link, name, fun}) => {
  return (
    <NavLink to={link} onClick={()=>fun()} >{name}</NavLink>
  )
}

export default ButtonLink