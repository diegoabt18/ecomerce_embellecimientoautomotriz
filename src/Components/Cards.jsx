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
      Deberia imprimirme los productos
      <div>
        <ButtonLink link={"todos"} name={"Todos"}  fun={resetSubCAtaogira}/>
        <ButtonLink link={"ambientadores"} name={"Ambientadores"} fun={resetSubCAtaogira}/>
        <ButtonLink link={"accesorios"} name={"Accesorios"} fun={resetSubCAtaogira}/>
      </div>
      <div className='flex'>
        <h1>Filtros:</h1>
        <select name="" id="" onChange={(e) => filter(e.target.value)} value={subCateroria} >
          <option value="" disabled>Seleccione</option>
          <option value="todos" >Todos</option>
          <option value="PrecioA" >Precio Menor</option>
          <option value="PrecioD" >Precio Mayor</option>
          {(categoria =="ambientadores" ? <option value="botella" >Botellas</option>: "")}
          {(categoria =="ambientadores" ? <option value="lata" >Latas</option>: "")}
          {(categoria =="accesorios" ? <option value="tuallas" >Tuallas</option>: "")}
          {(categoria =="accesorios" ? <option value="microfibra" >Micro Fibra</option>: "")}
        </select>
      </div>
      <div className='grid  grid-cols-2  md:grid-cols-3 lg:grid-cols-4 p-2  gap-4'>
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