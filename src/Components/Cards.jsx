import React, { useContext, useEffect, useState } from 'react'
import Context from '../hooks/Context';
import Card from './commons/Card';
import { useParams } from 'react-router-dom';
import ButtonLink from './actions/ButtonLink';

const Cards = () => {
  const context = useContext(Context);
  const [data, setData] = useState(context.data.productos)
  const [categoria, setCategoria] = useState("todos")
  const [subCateroria, SetSubCategoria] = useState("todos");
  const { Category } = useParams();
  
  //console.log(context.data.productos);

  function filter(value) {
    console.log(value)
    SetSubCategoria(value);
  }

  function resetSubCAtaogira(){
    SetSubCategoria("todos");
  }

  console.log(subCateroria)

  useEffect(() => {
    setCategoria(Category);
    //console.log(Category)
    if (subCateroria == "PrecioA" || subCateroria == "PrecioD") {
      console.log("entro")
      ordenarPrecioDes(subCateroria)
    }
  }, [Category, subCateroria])

  function ordenarPrecioDes(cate) {
    console.log("si entra pues")
    console.log(data)
    let list = [...data].sort(function (a, b) {
      return a.Precio - b.Precio;
    });
    if (cate == "PrecioD") {
      list.reverse();
    }
    console.log(list)
    setData(list)
  }

  return (
    <>
      <div className='text-center p-4'>
        <h1 className='text-3xl font-ptSans font-black'>Productos</h1>
      </div>
      <div className='text-center flex gap-3 justify-center font-nunito text-md  md:text-lg'>
        <ButtonLink link={"todos"} name={"Todos"}  fun={resetSubCAtaogira}/>
        <ButtonLink link={"ambientadores"} name={"Ambientadores"} fun={resetSubCAtaogira}/>
        <ButtonLink link={"accesorios"} name={"Accesorios"} fun={resetSubCAtaogira}/>
      </div>
      <div className='flex gap-2 pl-2 py-2 '>
        <h1>Filtros:</h1>
        <select className='cursor-pointer  bg-color1 active:outline-color2 outline-color2 border-none' name="" id="" onChange={(e) => filter(e.target.value)} value={subCateroria} >
          <option className='bg-color1 text-color3' value="" disabled>Seleccione</option>
          <option  value="todos" >Todos</option>
          <option value="PrecioA" >Precio Menor</option>
          <option value="PrecioD" >Precio Mayor</option>
          {(categoria =="ambientadores" ? <option value="botella" >Botellas</option>: "")}
          {(categoria =="ambientadores" ? <option value="lata" >Latas</option>: "")}
          {(categoria =="ambientadores" ? <option value="tarjeta" >Tarjetas</option>: "")}
          {(categoria =="accesorios" ? <option value="tuallas" >Tuallas</option>: "")}
          {(categoria =="accesorios" ? <option value="microfibra" >Micro Fibra</option>: "")}
          
        </select>
      </div>
      <div className='grid  grid-cols-2  md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 p-2  gap-4'>
        {
          data.map(item => {
            if (item.categoria[1] == categoria || categoria===undefined) {
              if (item.categoria[2] == subCateroria || subCateroria == "PrecioA" || subCateroria == "PrecioD" || subCateroria == "todos")
                return <Card key={item.id} name={item.name} precio={item.Precio} imagen={item.imagen} car={item.car} item={item}/>
            }
            if (item.categoria[0] == categoria || categoria===undefined) {
              if (item.categoria[2] == subCateroria || subCateroria == "PrecioA" || subCateroria == "PrecioD" || subCateroria == "todos")
                return <Card key={item.id} name={item.name} precio={item.Precio} imagen={item.imagen} car={item.car} item={item}/>

            }
          })
        }
      </div>
    </>
  )
}

export default Cards