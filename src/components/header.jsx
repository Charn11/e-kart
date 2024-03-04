import { Link } from "react-router-dom";
import '/src/styles/header.css'
import * as Toggle from '@radix-ui/react-toggle';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { useEffect } from "react";

const Header = (props) => {

    let setMode = props.setMode;
    let mode = props.mode;

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
                <Toggle.Root className="Toggle" aria-label="Toggle italic" id='lightToggle' onClick={handleClick}>
                    <SunIcon height={24} width={24}></SunIcon>
                </Toggle.Root> 
            )
        }
        else if(mode==='dark'){
            return(
                <Toggle.Root className="Toggle" aria-label="Toggle italic" id='darkToggle' onClick={handleClick}>
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
                <li><a>HOME</a></li>
                <li><a>SHOP</a></li>
                </ul>
            </div>
            <div className="darkmode">
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