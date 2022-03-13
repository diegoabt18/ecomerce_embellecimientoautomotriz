import React, { useContext, useEffect, useState } from 'react'

import ButtonClose from '../actions/ButtonClose'

/* importaciones de <Imagenes></Imagenes>*/
import mas from '../../images/buttons/btnplus.svg'
import menos from '../../images/buttons/btnminus.svg'
import Context from '../../hooks/Context'
import Alert from '../actions/Alert'


const CardShoppingCart = ({ item, imagen, precio, name, marca, contador, SetSubTotal }) => {
  const contexto = useContext(Context);
  console.log(contador)
  const [count, setCount] = useState(contador);




  useEffect(() => {
    changeCount();
    //changeSubtotal();
    

  }, [count])

  function changeSubtotal() {
    let subtotal = 0;
    console.log("aqui essssdasdasd")
    console.log(contexto.carrito)
    for (let i = 0; i < contexto.carrito.length; i++) {
      subtotal += contexto.carrito[i].Precio * contexto.carrito[i].count;
      console.log("q paso " + i)
      console.log(contexto.carrito[i].Precio * contexto.carrito[i].count)
    }
    SetSubTotal(subtotal);
  }

  function agregar() {
    let add = count + 1;
    setCount(add);


  }
  function quitar() {
    if (count == 1) {

    } else {
      let add = count - 1;
      setCount(add)

    }
  }

  function changeCount() {
    const objeto1 = contexto.carrito.filter(element => element.id == item.id)
    if (objeto1.length == 1) {
      let objectUpdate = [];
      const objeto2 = contexto.carrito.filter(element => element.id !== item.id)
      objeto1[0].count = count;
      objectUpdate = objeto1.concat(objeto2);
      contexto.setCarrito(objectUpdate)
    }
  }

  function changeEstadoCar() {
    for(let i=0; i<=contexto.data.productos.length;i++){
      if(contexto.data.productos[i].id==item.id){
        console.log("si lo encontro"+ contexto.data.productos[i].id)
        contexto.data.productos[i].car=false;
        console.log(contexto.data.productos)
        break;
      }
    }
  }

 

  function close() {
    const newCarrito = contexto.carrito.filter(element => element.id !== item.id);
    changeEstadoCar();
    contexto.setCarrito(newCarrito);
  }

  return (
    <div className='flex gap-2 w-full bg-slate-200 rounded-md justify-between'>
      <div className='w-2/6 sm:w-1/5 p-2'>
        <img className='mix-blend-multiply aspect-square object-contain' src={imagen} alt="no fount" />
      </div>
      <div className='w-3/6 sm:w-2/5 flex flex-col gap-2 item-center justify-center'>
        <h1 className='text-sm font-ptSans  sm:text-lg font-bold text-color3 '>{name}</h1>
        <p className='text-sm font-ptSans  sm:text-lg'>Marca: {marca}</p>
      </div>
      <div className='flex flex-col w-1/5 sm:w-2/5 text-xs  sm:text-lg items-center font-bold text-color3 justify-center gap-2  whitespace-nowrap'>
        <div>
          <p className='text-color3'>$ {precio}</p>
        </div>
        <div className='flex flex-row gap-2'>
          <button onClick={quitar} className='text-xl font-bold'><img className='w-3 sm:w-4' src={menos} alt="" /></button>
          <div className='rounded-full bg-color2 flex justify-center items-center w-6 h-6 sm:w-8 sm:h-8 text-center'>
            <p className='font-semibold text-black'>{count}</p>
          </div>
          <button onClick={agregar}> <img className='w-3 sm:w-4' src={mas} alt="" /></button>
        </div>
      </div>
      <div className='pt-2 pr-2 w-6 sm:w-8'>
        <ButtonClose BtnClose={close} />
      </div>
      
    </div>
  )
}

export default CardShoppingCart