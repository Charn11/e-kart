import React, { useState } from 'react'
import './App.css'
import { Outlet } from "react-router-dom";

export const ThemeContext = React.createContext();

function App() {

  const[mode,setMode] = useState('light');

  return (
    <>
      <ThemeContext.Provider value={{theme: [mode, setMode]}}>
        <Outlet></Outlet>
      </ThemeContext.Provider>
    </>
  )
}

export default App
