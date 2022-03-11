import React from 'react'
import Carrousel from '../Components/commons/Carrousel'
import ProductsCarrousel from '../Components/commons/ProductsCarrousel'
/* importar datos */
import Data from '../Data.js'

const SectionCarrousels = () => {
    console.log(Data)
  return (
    <>
        <Carrousel />
        <ProductsCarrousel />
    </>
  )
}

export default SectionCarrousels