import React from 'react'
import { NavLink } from 'react-router-dom'
/* importaciones de imagenes */
import search_svg from '../../images/buttons/search_m.svg'

const ButtonSearch = ({BtnClose,search}) => {
  return (
    <NavLink to={`/product/search/${search}`}><a onClick={BtnClose} className='items-center' > <img className='w-8' src={search_svg} alt="" /></a></NavLink>
  )
}

export default ButtonSearch