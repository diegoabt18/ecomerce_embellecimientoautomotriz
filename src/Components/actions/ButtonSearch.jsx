import React from 'react'
import { NavLink } from 'react-router-dom'
/* importaciones de imagenes */
import search_svg from '../../images/buttons/search_m.svg'

const ButtonSearch = ({BtnClose,search}) => {
  return (
    <NavLink to={`/product/search/${search}` } onClick={BtnClose}><p  className='items-center' > <img className='w-8' src={search_svg} alt="" /></p></NavLink>
  )
}

export default ButtonSearch