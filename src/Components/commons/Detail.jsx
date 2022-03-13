import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import Context from '../../hooks/Context';

/* Importaciones de imagenes */
import mas from '../../images/buttons/btnplus.svg';
import menos from '../../images/buttons/btnminus.svg';
import carritoCompra from '../../images/buttons/Btncarritocompra.svg'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertDetail from '../actions/AlertDetail';


const Detail = () => {
  const dato = useParams();
  const id = parseInt(dato.id);
  const contexto = useContext(Context);
  const [count, setCount] = useState(1);
  const [item, setItem] = useState();

  function AgregarProductoCarrito(objeto) {
    const objeto1 = contexto.carrito.filter(element => element.id == objeto.id)
    if (objeto1.length == 1) {

      let objectUpdate = [];
      const objeto2 = contexto.carrito.filter(element => element.id !== objeto.id)
      objeto1[0].count += count;
      setItem(objeto1)
      objectUpdate = objeto1.concat(objeto2);
      contexto.setCarrito(objectUpdate)
    } else {
      const contador = { "count": count }
      const newObject = Object.assign(objeto, contador)
      const array = [...contexto.carrito, newObject];
      contexto.setCarrito(array)
    }

  }

  const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_LEFT,
    timeout: 4000,
    //offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }
  const AlertTemplate1 = ({ style, options, message, close }) => (
    <div style={style}>
      {options.type === 'info' && '!'}
      {options.type === 'success' && ''}
      {options.type === 'error' && ':('}
      {message}

    </div>
  )

  function agregar() {
    setCount(count + 1)
  }
  function quitar() {
    if (count - 1 < 1) {
    } else {
      setCount(count - 1)
    }
  }
  //console.log(contexto.data.productos)
  const result = contexto.data.productos.filter(item => item.id == id);
  console.log(result)
  return (
    <div className='flex flex-col sm:flex-row sm:justify-between bg-gradient-to-r  from-[#bdc2e893] via-[#bdc2e8a4]  to-[#e6dee9b6] '>
      <div className='aspect-square p-2 flex items-center justify-center '>
        <img className='mix-blend-multiply brightness-100 aspect-square object-contain h-[90%]' src={result[0].imagen} alt="no hay" />
      </div>
      <div className='bg-white lg:gap-8 lg:px-12 flex flex-col gap-2 p-2 rounded-t-[3rem] sm:rounded-none sm:h-[100vh] sm:w-[50%] sm:justify-center  h-[100%]'>
        <h1 className='text-color3 font-bold w-full text-center font-ptSans pt-2 '>{result[0].name.toUpperCase()}</h1>
        <p className='text-gray-600 font-poppins text-center text-sm'>Marca: {result[0].marca}</p>
        <p className='text-gray-500 font-poppins text-center text-sm'>{result[0].descripcion}</p>
        <div className='flex justify-between px-4'>
          <div className='flex justify-center gap-2 '>
            <button onClick={quitar} className='text-xl font-bold'><img className='w-4' src={menos} alt="" /></button>
            <div className='rounded-full bg-color2 flex justify-center items-center w-8 h-8 text-center'>
              <p className='font-semibold'>{count}</p>
            </div>
            <button onClick={agregar}> <img className='w-4' src={mas} alt="" /></button>
          </div>
          <div className='text-color3 font-bold font-ptSans text-xl'>
            $ {result[0].Precio}
          </div>
        </div>
        <div className='flex item-center justify-center pt-4 border-t-2 sm:object-bottom'>
          <AlertProvider template={AlertTemplate1}  {...options}>
            <AlertDetail fun={AgregarProductoCarrito} item={result[0]} > </AlertDetail>
          </AlertProvider>
        </div>
        <br />
      </div>
    </div>
  )
}

export default Detail