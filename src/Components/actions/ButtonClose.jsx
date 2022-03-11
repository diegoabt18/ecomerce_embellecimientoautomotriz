import React from 'react'

/* importaciones de imagenes */
import close from '../../images/buttons/close.svg'

const ButtonClose = ({BtnClose}) => {
  return (
    <button><a onClick={BtnClose} className='no-underline' href="#"><img className='w-6' src={close} alt=""/></a></button>
  )
}

export default ButtonClose