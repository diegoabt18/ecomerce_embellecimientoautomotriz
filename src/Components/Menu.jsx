import React, { useState } from 'react'
import Modal from 'react-modal'

/* importaciones de componentes */
import ButtonClose from './actions/ButtonClose'
import ButtonSearch from './actions/ButtonSearch'
import InpuntSearch from './actions/InpuntSearch'


/* importaciones de imagenes */
import logo from '../images/logo_primario2.svg'
import logo2 from '../images/logo_secundario_2.svg'
import next from '../images/buttons/next.svg'

const Menu = ({ modalIsOpen, setModalIsOPen, showModal, setShowModal, setSearch }) => {

    //Configuracion de evento que se ejecuta a traves de un breackpoint
    //para cerrar el menu modal
    const mediaQuery = window.matchMedia('(min-width: 640px)')
    function handleTabletChange(e) {
        // Check if the media query is true
        if (e.matches) {
            // Then log the following message to the console
            console.log('Media Query Matched!')
            if(modalIsOpen){closeModal()}
           // if(showModal){setShowModal(!showModal)}
        }
    }
    // Register event listener
    mediaQuery.addEventListener("change", handleTabletChange)
    // Initial check
    handleTabletChange(mediaQuery)
    //Fin de configuracion de evento

    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.62)',
            zIndex:'99',
        },
        content: {
            position: 'absolute',
            width: '15rem',
            height: '100vh',
            top: '0px',
            left: '100%',
            right: 'auto',
            bottom: 'auto',
            /*marginRight: '-50%',*/
            transform: 'translate(-100%, 0)',
            background: '#fff',
            borderRadius: '0px',
            //padding: '15px',
            //overflow: 'scroll',
            
        },
    };
    Modal.setAppElement('#root');

    // Modal.setAppElement(document.getElementById('App'))
    function closeModal() {
        setModalIsOPen(false);
    }

    return (
        <Modal
            className="animate-[slide_1s_ease-out] overflow-y-scroll no-scrollbar"
            isOpen={modalIsOpen}
            style={customStyles}
            onAfterClose={closeModal}
            ariaHideApp={false}
            contentLabel="Example Modal"
        /*appElement={document.getElementById('root')}*/
        >
            <div className='flex flex-col gap-4 '>
                <div className='flex gap-1 p-2' /* logo and close menu*/>
                    <img className='w-5/6' src={logo} />
                    <div className="w-1/6 flex flex-row justify-end items-start">
                        <ButtonClose BtnClose={closeModal} />
                    </div>
                </div>
                <div className='flex gap-2 justify-center' /* seccion serarch*/>
                    <InpuntSearch  setSearch={setSearch} />
                    <ButtonSearch BtnClose={closeModal} />
                </div>
                <div className=''>
                    <div>
                        <ul className='list-none' >
                            <li className=' px-6 py-2 text-color3 font-semibold font-ptSans border-gray-200 w-full'>EXPLORAR</li>
                            <li className=' px-6 py-2 text-gray-700 font-nunito font-semibold border-y border-gray-200 w-full'><a href="#" >Inicio</a></li>
                            <li className=' px-6 py-2 text-gray-700 font-nunito font-semibold border-b border-gray-200 w-full'><a href="#">¿Quienes somos?</a></li>
                            <li className=' px-6 py-2 text-gray-700 font-nunito font-semibold border-b border-gray-200 w-full'><a href="#">Contacto</a></li>
                        </ul>
                    </div>
                    <ul>
                        <li className=' px-6 py-2 text-color3 font-semibold font-ptSans border-gray-200 w-full'>TIENDA</li>
                    </ul>
                    <div className='relative'>
                        <input className='peer opacity-0 absolute h-8 w-full border z-10 cursor-pointer' type="checkbox" />
                        <h1 className=' peer-checked:border-color2 peer-checked:text-white peer-checked:bg-color2 transition duration-500 ease-in-out flex flex-row items-center px-6 py-2 text-gray-700 border-y border-gray-200 w-full font-nunito font-semibold '>Accesorios</h1>
                        <img className='absolute top-2 right-3 w-6 rotate-180 peer-checked:rotate-0 transition duration-500 ease-in-out' src={next} alt="" />
                        <ul className=' max-h-0 overflow-hidden peer-checked:max-h-screen transition-all duration-500 ease-in-out' >
                            <li className='pl-8 px-6 py-2 font-nunito font-semibold text-gray-500 border-b border-gray-200 w-full'><a href="#">Tuallas</a></li>
                            <li className='pl-8 px-6 py-2 font-nunito font-semibold text-gray-500 border-b border-gray-200 w-full'><a href="#">Micro Fibra</a></li>
                            <li className='pl-8 px-6 py-2 font-nunito font-semibold text-gray-500 border-b border-gray-200 w-full'><a href="#">Cera</a></li>
                        </ul>
                    </div>
                    <div className='relative'>
                        <input className='peer opacity-0 absolute h-8 w-full border z-10 cursor-pointer' type="checkbox" />
                        <h1 className=' peer-checked:border-color2 peer-checked:text-white peer-checked:bg-color2 transition duration-500 ease-in-out flex flex-row items-center px-6 py-2 text-gray-700 border-b border-gray-200 w-full font-nunito font-semibold '>Ambientadores</h1>
                        <img className='absolute top-2 right-3 w-6 rotate-180 peer-checked:rotate-0 transition duration-500 ease-in-out' src={next} alt="" />
                        <ul className=' max-h-0 overflow-hidden peer-checked:max-h-screen transition-all duration-500 ease-in-out' >
                            <li className='pl-8 px-6 py-2 font-nunito font-semibold text-gray-500 border-b border-gray-200 w-full'><a href="#">Embace Liquido</a></li>
                            <li className='pl-8 px-6 py-2 font-nunito font-semibold text-gray-500 border-b border-gray-200 w-full'><a href="#">Tarjeta</a></li>
                            <li className='pl-8 px-6 py-2 font-nunito font-semibold text-gray-500 border-b border-gray-200 w-full'><a href="#">Lata</a></li>
                        </ul>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </Modal >
        // <button className='w-1/5' onClick={closeModal}>X</button>
    )
}

export default Menu