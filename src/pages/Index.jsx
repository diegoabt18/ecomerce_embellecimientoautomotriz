import React, { useContext, useState } from 'react'

import Carrousel from '../Components/commons/Carrousel'
import SectionCarrousels from '../layout/SectionCarrousels'
import SectionNosotros from '../layout/SectionNosotros'
//const array =[{"nombre":"diego", "apellido":"Alberto"}, {"nombre":"diego", "apellido":"Alberto"}]

const Index = () => {
  //const [user, setUser]= useState(array)
  //let url="https://api.whatsapp.com/send?phone=573183670857&text=Daniela,%20me%20interesan%20a%20estos%20productos%20";
  /*for(let i=0;i<user.length;i++){
    url+=user[i].nombre+"%20"+user[i].apellido+"%20";
    console.log(user[i].nombre)
  }*/
  //endcode uri
  // <a href={url} target="_blank" rel="noopener noreferrer">Whatsapp</a>
  return (
    <div>
        <SectionCarrousels />
        <SectionNosotros />
    </div>
  )
}

export default Index