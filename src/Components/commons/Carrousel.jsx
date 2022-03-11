import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imagen from '../../images/carrousel/image_1.svg'

const Carrousel = () => {
    return (
        <>
            <Carousel className="sm:hidden" autoPlay infiniteLoop interval={5000} showStatus={false} showThumbs={false} stopOnHover>
                <div  >
                    <img src={imagen} />
                </div>
                <div  >
                    <img src={imagen} />
                </div>
                <div  >
                    <img src={imagen} />
                </div>
       
                

            </Carousel>
            <Carousel className="mwsm:hidden mnmg:hidden" autoPlay infiniteLoop interval={5000} showStatus={false} showThumbs={false} stopOnHover>
                <div  >
                    <img src={imagen} />
                </div>
                <div  >
                    <img src={imagen} />
                </div>
              

            </Carousel>
        </>

    )
}

export default Carrousel