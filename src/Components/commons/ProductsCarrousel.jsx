import React, { useContext, useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import Card from './Card';
import Context from '../../hooks/Context';
import { NavLink } from 'react-router-dom';


//JSON= id name marca categoria descripcion Precio car imagen
const ProductsCarrousel = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const context = useContext(Context);
    console.log("holasoy contexto")
    console.log(context.data)
    const chevronWidth = 10;
    return (
        <>
            <h1 className='font-ptSans font-bold  w-full text-center p-4'>NUESTROS PRODUCTOS</h1>
            <div style={{ padding: `0 ${chevronWidth}px` }}>

                <ItemsCarousel
                
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={2}
                    gutter={10}
                    //leftChevron={<button>{'<'}</button>}
                    //rightChevron={<button>{'>'}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                    //rightChevron='ver mas'
                    //activePosition='right'
                    infiniteLoop
                >
                    {
                        context.data.novedades.map(item=>{
                            
                                return <Card key={item.id} name={item.name} precio={item.Precio} imagen={item.imagen} car={item.car} item={item}/>
                            
                        })
                    }
                </ItemsCarousel>
            </div>
            <NavLink to={"/product"} className='w-full py-2 text-center flex'><a href="#" className='font-ptSans font-bold  w-full text-center '>Ver mas productos...</a></NavLink>
        </>
    );
}
// <div style={{ height: 200, background: '#EEE' }}>Fourth card</div>
export default ProductsCarrousel