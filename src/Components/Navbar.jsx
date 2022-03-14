import React, { useContext, useEffect, useState } from 'react'
/* Importaciones de componentes*/
import ButtonNav from './actions/ButtonNav'
import InpuntSearch from './actions/InpuntSearch'
import Menu from './Menu'
import ModalShoppingCart from './ModalShoppingCart'
import ModalCart from './ModalCart'
import { NavLink } from 'react-router-dom'
import Context from '../hooks/Context'
/* Importaciones de imagenes */
import logo2_svg from '../images/logo_secundario_2.svg'
import logo1_svg from '../images/logo_primario2.svg'
import menu_svg from '../images/buttons/menu_m.svg'
import search_svg from '../images/buttons/search_m.svg'
import car_svg from '../images/buttons/shoppingcart_m.svg'
import next from '../images/buttons/next.svg'



const Navbar = () => {
    const [search, setSearch] = useState("");
    const [modalIsOpen, setModalIsOPen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const contexto = useContext(Context);
    console.log("desde nabvar")
    console.log(contexto.carrito.length)
    function openModal() {
        setModalIsOPen(true);
    }
    function openModalShoppingCart() {
        setShowModal(true);
    }

    useEffect(() => {
        if (modalIsOpen || showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [modalIsOpen, showModal])


    return (

        <nav className="fixed top-0 w-[100%] h-[55px] z-20   bg-color1  ">
            <div className="" id="mobile-menu">
                <div className="m-0 px-2 py-1 gap-3  flex  justify-between">
                    <div>
                        <NavLink to={"/"} className='items-center' > <img className='w-12 md:w-0 md:hidden' src={logo2_svg} alt="" /><img className='w-44 mix-blend-multiply mwmd:hidden ' src={logo1_svg} alt="" /></NavLink>
                    </div>

                    <div className='m-0 p-0 flex justify-center items-center gap-1'>
                        <div className='hidden sm:flex sm:justify-center sm:items-center'>
                            <NavLink to={"/"} className='pl-8 px-6 py-2 font-ptSans font-bold text-color3 hover:border-gray-200 hover:text-color2 border-gray-200 w-full'>Inicio</NavLink>
                            <div className='relative w-fit'>
                                <input className='peer opacity-0 absolute h-full w-full border z-10 cursor-pointer' type="checkbox" />
                                <h1 className='  peer-focus:text-color2  transition duration-500 ease-in-out flex flex-row items-center pl-2 pr-12 py-2 text-color3 hover:text-color2 w-full font-ptSans font-bold '>Explorar</h1>
                                <img className='absolute top-3 right-3 w-4 rotate-180 peer-focus:rotate-0 transition duration-500 ease-in-out' src={next} alt="" />
                                <ul className='rounded-b-md max-h-0  overflow-hidden peer-focus:max-h-screen transition-all duration-500 ease-in-out absolute bg-color1 z-20 flex flex-col' >
                                <li className='pl-2 pr-7 py-2 font-nunito font-semibold text-gray-500 border-b border-gray-200 w-full'><a href="#home">Inicio</a></li>
                                    <li  className=' pl-2 pr-2 py-2 font-nunito font-semibold text-gray-500 border-y border-gray-200 w-fit whitespace-nowrap'><a href='#us' className='w-full' >¿Quienes Somos?</a></li>
                                    <li className='pl-2 pr-7 py-2 font-nunito font-semibold text-gray-500 border-b border-gray-200 w-full'><a href="#contact">Contacto</a></li>
                                </ul>
                            </div>
                            <div className='relative w-fit '>
                                <input className=' peer opacity-0 absolute h-full w-full border z-10 cursor-pointer' type="checkbox" />
                                <h1 className='  peer-focus:text-color2  transition duration-500 ease-in-out flex flex-row items-center pl-2 pr-12 py-2 text-color3 hover:text-color2 w-full font-ptSans font-bold '>Tienda</h1>
                                <img className='absolute top-3 right-3 w-4 rotate-180 peer-focus:rotate-0 transition duration-500 ease-in-out' src={next} alt="" />
                                <ul className='rounded-b-md max-h-0  overflow-hidden peer-focus:max-h-screen transition-all duration-500 ease-in-out absolute bg-color1 z-20 flex flex-col' >
                                    <NavLink to={"/product/ambientadores"} className=' pl-2 pr-2 py-2 font-nunito font-semibold text-gray-500 border-y border-gray-200 w-fit whitespace-nowrap'>Ambientadores</NavLink>
                                    <NavLink to={"/product/accesorios"} className=' pl-2 pr-2 py-2 font-nunito font-semibold text-gray-500 border-y border-gray-200 w-fit whitespace-nowrap'>Accesorios</NavLink>
                                </ul>
                            </div>
                        </div>
                        <InpuntSearch setSearch={setSearch} />
                        <NavLink to={`/product/search/${search}`} className='items-center' > <img className='w-8' src={search_svg} alt="" /></NavLink>
                        <div className='animate-[wiggle_1s_ease-in-out_infinite] relative cursor-pointer '>
                            <div className='absolute right-0 w-[0.9rem] h-[0.9rem] rounded-full bg-color2 flex justify-center items-center'><p className='font-bold '>{contexto.carrito.length}</p></div>
                            <a className='items-center '  onClick={openModalShoppingCart}> <img className='w-8 ' src={car_svg} alt="" /></a>

                        </div>
                        <a className='items-center pl-1 sm:hidden'  onClick={openModal}> <img className='w-6' src={menu_svg} alt="" /></a>
                    </div>
                </div>
            </div>
            <Menu modalIsOpen={modalIsOpen} setModalIsOPen={setModalIsOPen} showModal={showModal} setShowModal={setShowModal} setSearch={setSearch} search={search} />
            <ModalCart showModal={showModal} setShowModal={setShowModal}> </ModalCart>
            


        </nav>
        //    <Menu modal={modalIsOpen} setModal={setModalIsOPen}/>
    )
}

export default Navbar