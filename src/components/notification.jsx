import { useEffect, useContext } from 'react'
import { NotifyContext } from './shop'
import '/src/styles/notification.css'

const Notification = () => {

    const notify = useContext(NotifyContext);
    const addNotif = notify.addNotif;
    const setAddNotif = notify.setAddNotif;

    useEffect(() => {
        if(addNotif){
            document.getElementById("notify").style.display = "block";
            setTimeout(() => {
                document.getElementById("notify").style.display = "none";
            },(1000))
            setAddNotif(false);
        }
    },[addNotif])

    return(
        <div id="notify">Added to cart</div>
    )
}

export default Notification;