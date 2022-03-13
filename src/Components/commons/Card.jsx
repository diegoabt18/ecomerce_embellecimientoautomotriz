import React, { useContext, useState } from 'react'
/*importaciones de imagenes */
import btnAgregarProducto from '../../images/buttons/btnAgregarProducto.svg'
import btnProductoAgregado from '../../images/buttons/btnProductoAgregado.svg'
import { NavLink } from 'react-router-dom'
import Context from '../../hooks/Context'
import Alert from '../actions/Alert'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'



//JSON= id name marca categoria descripcion Precio car imagen
const Card = ({ name, precio, imagen, car, item }) => {
    //const data = JSON.stringify(item);
    const contexto = useContext(Context);

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

    function AgregarProductoCarrito(objeto) {

        const objeto1 = contexto.carrito.filter(element => element.id == objeto.id)
        if (objeto1.length == 1) {
            let objectUpdate = [];
            const objeto2 = contexto.carrito.filter(element => element.id !== objeto.id)
            objeto1[0].count += 1;
            objectUpdate = objeto1.concat(objeto2);
            contexto.setCarrito(objectUpdate)
        } else {
            const contador = { "count": 1 }
            const newObject = Object.assign(objeto, contador)
            const array = [...contexto.carrito, newObject];
            contexto.setCarrito(array)
        }
    }


    const id = item.id;
    function ChangeButton(estado) {
        estado = true;
    }

    return (
        <div className='group bg-gray-100 rounded-md aspect-square' >
            <div className=" sm:w-full bg-color1 drop-shadow-lg aspect-square rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <NavLink to={`/product/detail/${id}`}> <img src={imagen} className="aspect-square p-2  mix-blend-multiply object-contain" /></NavLink>
            </div>
            <div className=" px-2 mt-2 flex justify-between">
                <div className='w-4/5 '>
                    <h1 className="text-md sm:text-lg md:text-xl font-bold text-color3">
                        $ {precio}
                    </h1>
                    <p className=" text-xs sm:text-lg md:text-xl font-semibold font-nunito text-gray-700">{name}</p>
                </div>
                <div className='w-1/5 flex flex-col items-center justify-center'>

                    {/*<button onClick={() => AgregarProductoCarrito(item)}><img src={(car ? btnProductoAgregado : btnAgregarProducto)} alt="" /></button>*/}
                    <AlertProvider template={AlertTemplate1}  {...options}>
                        <Alert fun={AgregarProductoCarrito} item={item} car={car}> </Alert>
                    </AlertProvider>


                </div>
            </div>
        </div>
    )
}

export default Card