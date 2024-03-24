import React, { useState } from 'react'
import './App.css'
import { Outlet } from "react-router-dom";

export const ThemeContext = React.createContext();
export const CategoryContext = React.createContext();

function App() {

  const[mode,setMode] = useState('light');
  const [value, setValue] = useState("All");

  return (
    <>
      <ThemeContext.Provider value={{theme: [mode, setMode]}}>
        <CategoryContext.Provider value={{value, setValue}}>
          <Outlet></Outlet>
        </CategoryContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
