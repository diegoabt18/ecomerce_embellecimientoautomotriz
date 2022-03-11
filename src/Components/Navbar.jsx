import React, { useEffect, useState } from 'react'
/* Importaciones de componentes*/
import ButtonNav from './actions/ButtonNav'
import InpuntSearch from './actions/InpuntSearch'
import Menu from './Menu'
import ModalShoppingCart from './ModalShoppingCart'
import ModalCart from './ModalCart'
import { NavLink } from 'react-router-dom'
/* Importaciones de imagenes */
import logo2_svg from '../images/logo_secundario_2.svg'
import menu_svg from '../images/buttons/menu_m.svg'
import search_svg from '../images/buttons/search_m.svg'
import car_svg from '../images/buttons/shoppingcart_m.svg'
import next from '../images/buttons/next.svg'

const Navbar = () => {
    const [search, setSearch] = useState("");
    const [modalIsOpen, setModalIsOPen] = useState(false);
    const [showModal, setShowModal] = useState(false);
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

        /*
        <div className="px-2 pt-2 pb-3 space-y-1">
            <ButtonNav text={"Inicio"}/>
            <ButtonNav text={"Acerca de nosotros"}/>
            <ButtonNav text={"Contacto"}/>
        </div>
        */
        <nav className="">
            <div className="" id="mobile-menu">
                <div className="m-0 px-2 py-1 gap-3 flex  justify-between">
                    <div>
                        <a className='items-center' href="#"> <img className='w-12' src={logo2_svg} alt="" /></a>
                    </div>

                    <div className='m-0 p-0 flex justify-center items-center gap-1'>
                        <div className='hidden sm:flex sm:justify-center sm:items-center'>
                            <NavLink to={"/"} className='pl-8 px-6 py-2 font-ptSans font-bold text-color3 hover:border-gray-200 hover:text-color2 border-gray-200 w-full'><a href="#">Inicio</a></NavLink>
                            <div className='relative w-fit'>
                                <input className='peer opacity-0 absolute h-full w-full border z-10 cursor-pointer' type="checkbox" />
                                <h1 className='  peer-focus:text-color2  transition duration-500 ease-in-out flex flex-row items-center pl-2 pr-12 py-2 text-color3 hover:text-color2 w-full font-ptSans font-bold '>Explorar</h1>
                                <img className='absolute top-3 right-3 w-4 rotate-180 peer-focus:rotate-0 transition duration-500 ease-in-out' src={next} alt="" />
                                <ul className='rounded-b-md max-h-0  overflow-hidden peer-focus:max-h-screen transition-all duration-500 ease-in-out absolute bg-color1 z-20 flex flex-col' >
                                    <NavLink to={"/"} className=' pl-2 pr-2 py-2 font-nunito font-semibold text-gray-500 border-y border-gray-200 w-fit whitespace-nowrap'><a className='w-full' href="#">¿Quienes Somos?</a></NavLink>
                                    <li className='pl-2 pr-7 py-2 font-nunito font-semibold text-gray-500 border-b border-gray-200 w-full'><a href="#">Contacto</a></li>
                                </ul>
                            </div>
                            <div className='relative w-fit'>
                                <input className='peer opacity-0 absolute h-full w-full border z-10 cursor-pointer' type="checkbox" />
                                <h1 className='  peer-focus:text-color2  transition duration-500 ease-in-out flex flex-row items-center pl-2 pr-12 py-2 text-color3 hover:text-color2 w-full font-ptSans font-bold '>Tienda</h1>
                                <img className='absolute top-3 right-3 w-4 rotate-180 peer-focus:rotate-0 transition duration-500 ease-in-out' src={next} alt="" />
                                <ul className='rounded-b-md max-h-0  overflow-hidden peer-focus:max-h-screen transition-all duration-500 ease-in-out absolute bg-color1 z-20 flex flex-col' >
                                    <NavLink to={"/product/ambientadores"} className=' pl-2 pr-2 py-2 font-nunito font-semibold text-gray-500 border-y border-gray-200 w-fit whitespace-nowrap'><a className='w-full' href="#">Ambientadores</a></NavLink>
                                    <NavLink to={"/product/accesorios"} className=' pl-2 pr-2 py-2 font-nunito font-semibold text-gray-500 border-y border-gray-200 w-fit whitespace-nowrap'><a className='w-full' href="#">Accesorios</a></NavLink>
                                </ul>
                            </div>
                        </div>
                        
                        <InpuntSearch setSearch={setSearch} />
                        <a className='items-center' href="#"> <img className='w-8' src={search_svg} alt="" /></a>
                        <a className='items-center animate-[wiggle_1s_ease-in-out_infinite]' href="#" onClick={openModalShoppingCart}> <img className='w-8' src={car_svg} alt="" /></a>
                        <a className='items-center pl-1 sm:hidden' href="#" onClick={openModal}> <img className='w-6' src={menu_svg} alt="" /></a>
                    </div>
                </div>
            </div>
            <Menu modalIsOpen={modalIsOpen} setModalIsOPen={setModalIsOPen} showModal={showModal} setShowModal={setShowModal} setSearch={setSearch} />
            <ModalCart showModal={showModal} setShowModal={setShowModal}> </ModalCart>
            {search}


        </nav>
        //    <Menu modal={modalIsOpen} setModal={setModalIsOPen}/>
    )
}

export default Navbar