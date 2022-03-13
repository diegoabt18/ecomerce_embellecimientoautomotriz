import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imagen from '../../images/carrousel/image_1.svg';
import imagenPc1 from '../../images/carrousel/image_1desktop.svg';
import imagenPc2 from '../../images/carrousel/img1.jpg';
import imagenPc3 from '../../images/carrousel/img2.jpg';
import imagenPc4 from '../../images/carrousel/img3.jpg';

const Carrousel = () => {
    return (
        <>
        <div id="home">
        <Carousel  className="sm:hidden" autoPlay infiniteLoop interval={5000} showStatus={false} showThumbs={false} stopOnHover>
                <div  >
                    <img src={imagenPc2} />
                </div>
                <div  >
                    <img src={imagenPc3} />
                </div>
                <div  >
                    <img src={imagenPc4} />
                </div>
 
            </Carousel>
            <Carousel  className="mwsm:hidden mnmg:hidden" autoPlay infiniteLoop interval={5000} showStatus={false} showThumbs={false} stopOnHover>
            <div  >
                    <img src={imagenPc2} />
                </div>
                <div  >
                    <img src={imagenPc3} />
                </div>
                <div  >
                    <img src={imagenPc4} />
                </div>
            </Carousel>
            <Carousel  className="mwmg:hidden" autoPlay infiniteLoop interval={5000} showStatus={false} showThumbs={false} >
                <div className=' h-[100%]' >
                    <img className=' h-[100vh]' src={imagenPc2} />
                </div>
                <div  className=' h-[100%]'>
                    <img className=' h-[100vh]' src={imagenPc3} />
                </div>
                <div  className=' h-[100%]'>
                    <img className=' h-[100vh]' src={imagenPc4} />
                </div>
            </Carousel>
        </div>
            
        </>

    )
}

export default Carrousel