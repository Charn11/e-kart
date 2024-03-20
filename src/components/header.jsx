import { Link } from "react-router-dom";
import '/src/styles/header.css'
import * as Toggle from '@radix-ui/react-toggle';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { useEffect, useContext } from "react";
import { ThemeContext } from "../App";

const Header = () => {

    const { theme } = useContext(ThemeContext);
    const [mode, setMode] = theme;

    useEffect(() => {
        changeMode();
    },[mode]);

    function handleClick(){
        if(mode==='light') setMode('dark');
        if(mode==='dark') setMode('light');
    }

    function changeMode(){
        if(mode==='light'){
            return(
                <Toggle.Root className="Toggle" aria-label="Change site theme" id='lightToggle' onClick={handleClick}>
                    <SunIcon height={24} width={24}></SunIcon>
                </Toggle.Root> 
            )
        }
        else if(mode==='dark'){
            return(
                <Toggle.Root className="Toggle" aria-label="Change site theme" id='darkToggle' onClick={handleClick}>
                    <MoonIcon height={24} width={24}></MoonIcon>
                </Toggle.Root> 
            )
        }
    }
    return(
        <header>
            <div className="header">
            <div className="heading">
                <p>E-kart</p>
            </div>
            <div className='navbar'>
                <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="shop">SHOP</Link></li>
                </ul>
            </div>
            <div className="darkmode" data-testid='toggle'>
                    {changeMode()}
            </div>
            <div className="cartbar">
                <a><img src="src/assets/shopping_cart_FILL0_wght400_GRAD0_opsz24.svg" alt="cart"></img></a> 
            </div>
            </div>          
        </header>
    )
}

export default Header;