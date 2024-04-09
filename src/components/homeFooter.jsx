import '/src/styles/footer.css'
import { ThemeContext } from '../App'
import { useContext, useEffect } from 'react'

function HomeFooter(){

    const { theme } = useContext(ThemeContext);
    const [mode, setMode] = theme;

    //change theme
    useEffect(() => {
        if(mode==='dark'){
            document.getElementById("footer").style.backgroundColor = "gray"
            document.getElementById("footer").style.color = "white"
        }
        if(mode==='light'){
            document.getElementById("footer").style.backgroundColor = "black"
            document.getElementById("footer").style.color = "white"
        }
    },[mode])

    return(
        <footer id='footer'>© 2024 E-kart. All rights reserved.</footer>
    )
}

export default HomeFooter;