import React from 'react'

/* importaciones de imagenes */
import search_svg from '../../images/buttons/search_m.svg'

const ButtonSearch = ({BtnClose}) => {
  return (
    <button><a onClick={BtnClose} className='items-center' > <img className='w-8' src={search_svg} alt="" /></a></button>
  )
}

export default ButtonSearch