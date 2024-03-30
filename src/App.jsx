import React, { useState } from 'react'
import './App.css'
import { Outlet } from "react-router-dom";

export const ThemeContext = React.createContext();
export const CategoryContext = React.createContext();
export const CartContext = React.createContext();
export const GridContext = React.createContext();

function App() {

  const [mode,setMode] = useState('light');
  const [value, setValue] = useState("All");
  const [dispCart, setDispCart] = useState(false);
  const [updateGrid, setUpdate] = useState(false);
  const [cartItems, setCartItems] = useState({});

  return (
    <>
      <ThemeContext.Provider value={{theme: [mode, setMode]}}>
        <CategoryContext.Provider value={{value, setValue}}>
          <CartContext.Provider value={{dispCart, setDispCart}}>
            <GridContext.Provider value={{updateGrid, setUpdate}}>
              <Outlet></Outlet>
            </GridContext.Provider>
          </CartContext.Provider>
        </CategoryContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
