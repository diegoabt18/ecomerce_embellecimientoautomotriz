import React, { useContext, useState } from 'react'
/*importaciones de imagenes */
import btnAgregarProducto from '../../images/buttons/btnAgregarProducto.svg'
import btnProductoAgregado from '../../images/buttons/btnProductoAgregado.svg'
import { NavLink } from 'react-router-dom'
import Context from '../../hooks/Context'

//JSON= id name marca categoria descripcion Precio car imagen
const Card = ({ name, precio, imagen, car, item }) => {
    //const data = JSON.stringify(item);
    const contexto = useContext(Context);

    function AgregarProductoCarrito(objeto) {
/*
        const objeto = contexto.carrito.filter(element => element.id == item.id)
        console.log(objeto.lenght);
        if (objeto1.lenght==1) {
            const objeto2 = contexto.carrito.filter(element => element.id !== item.id)
            objeto1[0].count += 1;
        }
*/

        const contador = { "count": 1 }
        const newObject = Object.assign(objeto, contador)
        const array = [...contexto.carrito, newObject];
        contexto.setCarrito(array)

    }
    console.log(...contexto.carrito)

    const id = item.id;
    function ChangeButton(estado) {
        estado = true;
    }

    return (
        <div className='group bg-gray-100 rounded-md aspect-square' >
            <div className=" sm:w-full bg-color1 drop-shadow-lg aspect-square rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <NavLink to={`/product/detail/${id}`}> <img src={imagen} className="aspect-square p-2  mix-blend-multiply object-contain" /></NavLink>
            </div>
            <div className=" px-2 mt-2 flex justify-between">
                <div className='w-4/5 '>
                    <h1 className="text-md font-bold text-color3">
                        $ {precio}
                    </h1>
                    <p className=" text-xs font-semibold font-nunito text-gray-700">{name}</p>
                </div>
                <div className='w-1/5 flex flex-col items-center justify-center'>

                    <button onClick={() => AgregarProductoCarrito(item)}><img src={(car ? btnProductoAgregado : btnAgregarProducto)} alt="" /></button>

                </div>
            </div>
        </div>
    )
}

export default Card