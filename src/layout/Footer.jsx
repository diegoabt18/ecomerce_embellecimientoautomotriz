import React from 'react'
import { Link } from 'react-router-dom'
/* Importaciones de imagenes*/
import next from '../images/buttons/next.svg'
import email from '../images/contacto/email.svg'
import facebook from '../images/contacto/facebook.svg'
import location from '../images/contacto/location.svg'
import whatsapp from '../images/contacto/whatsapp.svg'
import logo from '../images/logo_primario2.svg'

const Footer = () => {
    return (
        <>

            <div className='bg-color4 md:grid md:grid-cols-3 pt-4'>

                <div>
                    <ul className='list-none' >
                        <li className=' px-6 py-2 text-white font-semibold font-ptSans border-gray-200 w-full'>EXPLORAR</li>
                        <li className=' px-6 py-2 text-gray-900 font-nunito font-semibold border-t border-color3 w-full'><a href="#home" >Inicio</a></li>
                        <li className=' px-6 py-2 text-gray-900 font-nunito font-semibold  border-gray-200 w-full'><a href="#us">¿Quienes somos?</a></li>
                        <li className=' px-6 py-2 text-gray-900 font-nunito font-semibold  border-gray-200 w-full'><a href="#contact">Contacto</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className=' px-6 py-2 text-white font-semibold font-ptSans border-gray-200 w-full'>TIENDA</li>
                    </ul>
                    <div className='relative'>
                        <input className='peer opacity-0 absolute h-8 w-full border z-10 cursor-pointer' type="checkbox" />
                        <h1 className=' peer-checked:border-color2 peer-checked:text-white peer-checked:bg-color2 transition duration-500 ease-in-out flex flex-row items-center px-6 py-2 text-gray-900 border-t border-color3 w-full font-nunito font-semibold '>Accesorios</h1>
                        <img className='absolute top-2 right-3 w-6 rotate-180 peer-checked:rotate-0 transition duration-500 ease-in-out' src={next} alt="" />
                        <ul className=' max-h-0 overflow-hidden peer-checked:max-h-screen transition-all duration-500 ease-in-out' >
                            <li className='pl-8 px-6 py-2 font-nunito font-semibold text-gray-900   w-full'><Link to={"/product/accesorios"}>Tuallas</Link></li>
                            <li className='pl-8 px-6 py-2 font-nunito font-semibold text-gray-900   w-full'><Link to={"/product/accesorios"}>Micro Fibra</Link></li>
                            <li className='pl-8 px-6 py-2 font-nunito font-semibold text-gray-900   w-full'><Link to={"/product/accesorios"}>Cera</Link></li>
                        </ul>
                    </div>
                    <div className='relative'>
                        <input className='peer opacity-0 absolute h-8 w-full border z-10 cursor-pointer' type="checkbox" />
                        <h1 className='  peer-checked:text-white peer-checked:bg-color2 transition duration-500 ease-in-out flex flex-row items-center px-6 py-2 text-gray-900  border-gray-200 w-full font-nunito font-semibold '>Ambientadores</h1>
                        <img className='absolute top-2 right-3 w-6 rotate-180 peer-checked:rotate-0 transition duration-500 ease-in-out' src={next} alt="" />
                        <ul className=' max-h-0 overflow-hidden peer-checked:max-h-screen transition-all duration-500 ease-in-out' >
                            <li className='pl-8 px-6 py-2 font-nunito font-semibold text-gray-900   w-full'><Link to={"/product/ambientadores"} >Embace Liquido</Link></li>
                            <li className='pl-8 px-6 py-2 font-nunito font-semibold text-gray-900   w-full'><Link to={"/product/ambientadores"}>Tarjeta</Link></li>
                            <li className='pl-8 px-6 py-2 font-nunito font-semibold text-gray-900   w-full'><Link to={"/product/ambientadores"}>Lata</Link></li>
                        </ul>
                    </div>
                </div>

                <div id="contact">
                    <ul className='list-none' >
                        <li className=' px-6 py-2 text-white font-semibold font-ptSans  w-full'>CONTACTO</li>
                        <li className=' px-6 py-2 text-gray-900 font-nunito font-semibold border-t border-color3 w-full flex gap-2  items-center'><img src={whatsapp} alt="" className='w-6' /> <p>3053381969</p> </li>
                        <li className=' px-6 py-2 text-gray-900 font-nunito font-semibold  w-full flex gap-2  items-center'><img src={email} alt="" className='w-6' /> <p>mafersita95@gmail.com</p></li>
                        <li className=' px-6 py-2 text-gray-900 font-nunito font-semibold  w-full flex gap-2 items-center'><img src={location} alt="" className='w-7' /> <p>Av 26# 39-120 SAN JOSÉ DE CÚCUTA - NORTE DE SANTANDER</p></li>
                        <li className=' px-6 py-2 text-gray-900 font-nunito font-semibold  w-full flex gap-2 items-center'><img src={facebook} alt="" className='w-6' /> <p>Siguenos en nuestra pagina de Facebook</p></li>
                        <li className='px-7'><img className='mix-blend-multiply' src={logo} alt="" /></li>
                        <br />
                    </ul>
                </div>

            </div>
            <div className='bg-color3 text-white p-2'>
                <p className='text-center w-full font-ptSans font-bold'>2022 © S & T DISTRIBUCIONES</p>
            </div>
        </>
    )
}

export default Footer