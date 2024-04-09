import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext } from "../App";
import '/src/styles/loading.css'
import { LoadContext } from '../App';

const Loading = () => {

    const { theme } = useContext(ThemeContext);
    const [mode, setMode] = theme;

    const loadVal =useContext(LoadContext);
    const load = loadVal.load;
    const setLoad = loadVal.setLoad;
    
    const [loadGif, setLoadGif] = useState("src/assets/1489.gif")

    useEffect(() => {
        if(mode==="light"){
            setLoadGif("src/assets/1489.gif");
        }
        else{
            setLoadGif("src/assets/1489 (1).gif");
        }
    },[mode])

    useEffect(() => {
        function handleLoading(){
            setLoad(false);
        }
      
        window.addEventListener('load', handleLoading);
          
        return () => {
         window.removeEventListener('load', handleLoading);
        };
    })

    useEffect(() => {
        if(load){
            document.getElementById("loadDiv").style.display = "block"
        }else{
            document.getElementById("loadDiv").style.display = "none"
        }
    },[load])

    return(
        <>
            <div id='loadDiv'>
                <img src={loadGif}></img>
            </div>
        </>
    )
}

export default Loading;