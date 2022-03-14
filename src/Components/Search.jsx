import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import Context from '../hooks/Context';
import Card from './commons/Card';


const Search = () => {
    let cont=0;
    const [data, setData]=useState();
    const dato= useParams();
    console.log(dato)
    const contexto =useContext(Context);
    
    
    
    

    return (
        <>
            <div className='text-center p-4'>
                <h1 className='text-3xl font-ptSans font-black'>Productos</h1>
            </div>
            
           
            <div className='grid  grid-cols-2  md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 p-2  gap-4'>
                {  
                    contexto.data.productos.map(item => {
                        {console.log(item.name.toUpperCase().search(dato.name.toUpperCase()))}
                            if(item.name.toUpperCase().search(dato.name.toUpperCase())!==-1){
                                
                                return <Card key={item.id} name={item.name} precio={item.Precio} imagen={item.imagen} car={item.car} item={item} />
                                
                            }
                    })
                    
                }
                
            </div>
        </>
    )
}

export default Search