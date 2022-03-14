import React, { useContext, useEffect, useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import Card from './Card';
import Context from '../../hooks/Context';
import { NavLink } from 'react-router-dom';
import next from '../../images/buttons/next.svg'


//JSON= id name marca categoria descripcion Precio car imagen
const ProductsCarrousel = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const contexto = useContext(Context);
    const novedades = contexto.data.novedades;
    /*
    console.log(novedades)
    useEffect(()=>{
        let data=[]
        for(let i=0; i<novedades.length;i++){
            if(novedades[i])
        }
    }, [contexto.data.productos])
*/


    const chevronWidth = 10;
    return (
        <>
            <h1 className='font-ptSans font-bold  w-full text-center p-4 lg:text-2xl'>NUESTROS PRODUCTOS</h1>
            <div style={{ padding: `0 ${chevronWidth}px` }} className="sm:hidden">
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
                        contexto.data.productos.slice(0, 5).map(item => {
                            return <Card key={item.id} name={item.name} precio={item.Precio} imagen={item.imagen} car={item.car} item={item} />
                        })
                    }
                </ItemsCarousel>
            </div>
            <div style={{ padding: `0 ${10}px` }} className="mwsm:hidden lg:hidden">
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    gutter={10}
                    leftChevron={<button className='text-5xl text-color3'>{'«'}</button>}
                    rightChevron={<button className='text-5xl text-color3'>{'»'}</button>}
                    outsideChevron={false}
                    chevronWidth={chevronWidth}
                    //rightChevron='ver mas'
                    //activePosition='right'
                    infiniteLoop
                >
                    {
                        contexto.data.productos.slice(0, 5).map(item => {
                            return <Card key={item.id} name={item.name} precio={item.Precio} imagen={item.imagen} car={item.car} item={item} />
                        })
                    }
                </ItemsCarousel>
            </div>
            <div style={{ padding: `0 ${20}px` }} className="mwlg:hidden">
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={4}
                    gutter={10}
                    leftChevron={<button>{'<'}</button>}
                    rightChevron={<button>{'>'}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                    //rightChevron='ver mas'
                    //activePosition='right'
                    infiniteLoop
                >
                    {
                        contexto.data.productos.slice(0, 5).map(item => {
                            return <Card key={item.id} name={item.name} precio={item.Precio} imagen={item.imagen} car={item.car} item={item} />
                        })
                    }
                </ItemsCarousel>
            </div>
            <NavLink to={"/product"} className='w-full py-2 text-center flex'><p className='font-ptSans font-bold  w-full text-center text-lg lg:text-2xl lg:py-4 hover:text-color3'>Ver mas productos...</p></NavLink>
        </>
    );
}
// <div style={{ height: 200, background: '#EEE' }}>Fourth card</div>
export default ProductsCarrousel