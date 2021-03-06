import './App.css';
import Index from './pages/Index';
import Header from './layout/Header';
import json from './Data.js';
import { createContext, useContext, useState } from 'react';
import Context from './hooks/Context';
import Footer from './layout/Footer';
import Products from './pages/Products';
import { Route, Routes } from 'react-router-dom';
import Details from './pages/Details';
import Search from './Components/Search';
import SectionNosotros from './layout/SectionNosotros';

//const Contexto = createContext("");

function App() {
  const [data, setData] = useState(json)
  const [carrito, setCarrito] = useState([])
 
  console.log(data)
  return (
    <Context.Provider value={{ data, setData, carrito, setCarrito }}>
      <div className="App" id="App">
          <Header />
          <Routes>
            <Route path="/" element={<Index />} >
              <Route path="/#us" element={<Index />} />
            </Route>
            <Route path="/product" element={<Products />} >
              <Route path=":Category" element={<Products />} />
            </Route>
            <Route path="/product/detail/:id" element={<Details />} />
            <Route path="/product/search/:name" element={<Search />} />
          </Routes>
          <Footer />
    
      </div>
    </Context.Provider>
  );
}

export default App;
