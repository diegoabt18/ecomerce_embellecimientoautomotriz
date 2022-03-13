import React from 'react'
//import nosotros from '../images/quienesSomos.svg'

const SectionNosotros = () => {
    return (
        <div id='us' className=''>
            <div className="p-4 bg-us bg-cover bg-no-repeat h-[70vh] sm:h-[100vh] flex flex-col item-center justify-center">
                
                <div className=' text-white text-center top-0 '>
                    <h1 className='font-nunito font-bold text-xl sm:text-2xl sm:pb-6 lg:text-4xl lg:pb-12'>¿Quienes somos?</h1><br/>
                    <p className='text-xs xs:text-sm sm:text-xl lg:text-4xl lg:px-12 font-poppins'>S&T Distribuciones es un emprendimiento familiar creado finalizando la vigencia 2020 como una oportunidad para tener mayor autonomía e independencia económica ante la escasez de empleo derivado por la emergencia sanitaria que vivía el mundo por causa del coronavirus. <br/><br/>
                    Somos una empresa que distribuye y comercializa insumos y productos para el embellecimiento automotriz, hogar y oficina.
                    Nuestro compromiso es ofrecer productos de alta calidad con precios accesibles, brindar un excelente servicio al cliente y generar confianza a nuestros clientes con los resultados obtenidos con nuestros productos.</p>
                </div>
            </div>
        </div>
    )
}

export default SectionNosotros