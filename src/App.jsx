import React, { useState } from 'react'
import './App.css'
import { Outlet } from "react-router-dom";
import Loading from './components/loading';

export const ThemeContext = React.createContext();
export const CategoryContext = React.createContext();
export const CartContext = React.createContext();
export const GridContext = React.createContext();
export const ItemContext = React.createContext();
export const LoadContext = React.createContext();

function App() {

  const [mode,setMode] = useState('light');
  const [value, setValue] = useState("All");
  const [dispCart, setDispCart] = useState(false);
  const [updateGrid, setUpdate] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [load, setLoad] = useState(true)

  return (
    <>
      <ThemeContext.Provider value={{theme: [mode, setMode]}}>
        <CategoryContext.Provider value={{value, setValue}}>
          <CartContext.Provider value={{dispCart, setDispCart}}>
            <GridContext.Provider value={{updateGrid, setUpdate}}>
              <ItemContext.Provider value={{cartProducts, setCartProducts}}>
                <LoadContext.Provider value={{load, setLoad}}>
                  <Outlet></Outlet>
                </LoadContext.Provider>
              </ItemContext.Provider>  
            </GridContext.Provider>
          </CartContext.Provider>
        </CategoryContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
