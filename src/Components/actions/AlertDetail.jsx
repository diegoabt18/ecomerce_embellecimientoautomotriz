import React from 'react'
import { useAlert } from 'react-alert'

import btnAgregar from '../../images/buttons/btnAgregarAlCarrito.svg'

const AlertDetail = ({ fun, item }) => {
    const alert = useAlert()
    return (
        <button className='flex hover:bg-color3 h-12 gap-4 bg-color2 rounded-full text-white font-semibold font-poppins  text-center items-center justify-center w-[80%]'
            onClick={() => {
                alert.show(<div className="bg-teal-50 border-t-4  border-color2 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                    <p className="font-bold text-ptSans">Producto Agregado</p>
                    <p className='font-nunito text-sm sm:text-base'>Se agrego <span className='text-color3 font-bold'>{item.name} </span>al carrito</p>
                </div>, { type: 'success' });
                fun(item);
                
            }}
        >
            <img className='    ' src={btnAgregar} alt="" />
            <h1>Agregar al carrito</h1>
        </button>
    )
}

export default AlertDetail