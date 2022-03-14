import React, { useState } from 'react'
import { useAlert } from 'react-alert'
import btnAgregarProducto from '../../images/buttons/btnAgregarProducto.svg'
import btnProductoAgregado from '../../images/buttons/btnProductoAgregado.svg'
const Alert = ({ fun, item, car }) => {

    //const [estado, setEstado]=useState(car);

    function changeEstado(){
        //setEstado(true);
        item.car=true;
    }


    const alert = useAlert()

    return (
        <button
            onClick={() => {
                alert.show(<div className="bg-teal-50 border-t-4  border-color2 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                    <p className="font-bold text-ptSans">Producto Agregado</p>
                    <p className='font-nunito text-sm sm:text-base'>Se agrego <span className='text-color3 font-bold'>{item.name} </span>al carrito</p>
                </div>, { type: 'success' });
                fun(item);
                changeEstado();
            }}
        >
            <img src={(car ? btnProductoAgregado : btnAgregarProducto)} alt="" />
        </button>
    )
}

export default Alert