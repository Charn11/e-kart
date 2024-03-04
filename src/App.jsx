import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/home'
import { Theme } from '@radix-ui/themes';


function App() {

  const[mode,setMode] = useState('light');

  return (
    <>
      <Theme>
        <Home mode={mode} setMode={setMode}></Home>
      </Theme>
    </>
  )
}

export default App
