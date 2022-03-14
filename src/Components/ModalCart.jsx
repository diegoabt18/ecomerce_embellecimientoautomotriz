import React, { useContext, useEffect, useState } from "react";
import CardShoppingCart from "./commons/CardShoppingCart";
import Context from "../hooks/Context";

function ModalCart({ showModal, setShowModal }) {
    const contexto = useContext(Context);

    const [descuento, setDescuento] = useState(0);
    const [subTotal, SetSubTotal] = useState(0);
    //console.log(contexto.carrito)

    useEffect(() => {
        changeSubtotal();
    }, [contexto.carrito])


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

    const sendMessage = () => {
        let msg = [];
        for (let item of contexto.carrito) {
            let textopedido = item.name + " x" + item.count+" precio c/u: "+item.Precio+"%0A";
            msg += textopedido;
        }
        window.open(`https://api.whatsapp.com/send?phone=573043511881&text=Hola Julian, me interesan estos  productos:%0A${msg} precioTotal: ${subTotal}`);
    };



    return (
        <>
            <div>

                {showModal && (
                    <div className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0 z-30" id="chec-div">
                        <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                            <div className="flex md:flex-row flex-col justify-end" id="cart">
                                <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-4 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                                    <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" onClick={() => setShowModal(!showModal)}>
                                        <p className="text-md pl-2 leading-none"> {"<"} Seguir Comprando</p>
                                    </div>
                                    <p className="text-[2.5rem] font-black leading-none text-gray-800 pt-3 pb-1  border-b-2 ">Productos</p>
                                    <div id="Cartas" className="flex flex-col gap-2 pt-2">

                                        {
                                            contexto.carrito.map(item => {
                                                return <CardShoppingCart key={item.id} item={item} imagen={item.imagen} precio={item.Precio} name={item.name} marca={item.marca} contador={item.count} SetSubTotal={SetSubTotal} />
                                            })
                                        }

                                    </div>
                                </div>
                                <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-color4 h-full">
                                    <div className="flex flex-col md:h-screen px-6 py-20 justify-between overflow-y-auto">
                                        <div>
                                            <p className="text-3xl font-black leading-9 text-color3">Compra</p>
                                            {/*<div className="flex items-center justify-between pt-16">
                                                <p className="text-base leading-none text-gray-800">Subtotal</p>
                                                <p className="text-base leading-none text-gray-800">$ {subTotal}</p>
                                    </div>*/}
                                            <div className="flex items-center justify-between pt-16">
                                                <p className="text-base leading-none font-bold text-gray-800">Articulo</p>
                                                <p className="text-base leading-none font-bold text-gray-800">Cantidad</p>
                                            </div>
                                            {
                                                contexto.carrito.map(item => (

                                                    <div className="flex items-center justify-between pt-4">
                                                        <p className="text-base leading-none text-gray-800">{item.name}</p>
                                                        <p className="text-base leading-none text-gray-800">{item.count}</p>
                                                    </div>
                                                ))
                                            }

                                        </div>
                                        <div>
                                            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                                <p className="text-2xl leading-normal text-gray-800">Total</p>
                                                <p className="text-2xl font-bold leading-normal text-right text-gray-800">$ {subTotal}</p>
                                            </div>
                                            <button onClick={() => { setShowModal(!showModal); sendMessage() }} className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                                contáctame
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style>
                {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
            </style>
        </>
    );
}

export default ModalCart;
