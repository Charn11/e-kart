import { useEffect, useContext } from 'react'
import { NotifyContext } from './shop'
import '/src/styles/notification.css'
import { ThemeContext } from "../App";

const Notification = () => {

    const notify = useContext(NotifyContext);
    const addNotif = notify.addNotif;
    const setAddNotif = notify.setAddNotif;

    const { theme } = useContext(ThemeContext);
    const [mode, setMode] = theme;

    //change theme
    useEffect(() => {
        if(mode==='dark'){
            document.getElementById("notify").style.backgroundColor = "white"
            document.getElementById("notify").style.color = "black"
        }
        if(mode==='light'){
            document.getElementById("notify").style.backgroundColor = "black"
            document.getElementById("notify").style.color = "white"
        }
    },[mode])

    //display notification
    useEffect(() => {
        if(addNotif){
            document.getElementById("notify").style.display = "block";
            setAddNotif(false);
            const time = setTimeout(() => {
                document.getElementById("notify").style.display = "none";
            },(500))
        }
    },[addNotif])

    return(
        <div id="notify">Added to cart</div>
    )
}

export default Notification;