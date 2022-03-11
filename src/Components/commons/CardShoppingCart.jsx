import React, { useState } from 'react'

/* importaciones de <Imagenes></Imagenes>*/
import mas from '../../images/buttons/btnplus.svg'
import menos from '../../images/buttons/btnminus.svg'


const CardShoppingCart = ({ imagen, precio, name, marca, contador }) => {

  console.log(contador)
  const [count, setCount] = useState(contador);

  function agregar() {
    setCount(count + 1)
  }
  function quitar() {
    if (count - 1 < 1) {
    } else {
      setCount(count - 1)
    }
  }

  return (
    <div className='flex gap-2 w-full bg-slate-200 rounded-md justify-between'>
      <div className='w-1/5 p-2'>
        <img className='mix-blend-multiply aspect-square object-contain' src={imagen} alt="no fount" />
      </div>
      <div className='3/5 flex flex-col item-center justify-center'>
        <h1 className='text-lg font-bold text-color3'>{name}</h1>
        <p>Marca: {marca}</p>
      </div>
      <div className='flex flex-col justify-center gap-2 w-1/5'>
        <div>
          <p>$ {precio}</p>
        </div>
        <div className='flex flex-row gap-2'>
          <button onClick={quitar} className='text-xl font-bold'><img className='w-4' src={menos} alt="" /></button>
          <div className='rounded-full bg-color2 flex justify-center items-center w-8 h-8 text-center'>
            <p className='font-semibold'>{count}</p>
          </div>
          <button onClick={agregar}> <img className='w-4' src={mas} alt="" /></button>
        </div>
      </div>
    </div>
  )
}

export default CardShoppingCart