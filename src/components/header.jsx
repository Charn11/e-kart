import { Link } from "react-router-dom";

const Header = () => {

    return(
        <header>
            <p>E-kart</p>
            <nav>
                <a>HOME</a>
                <a>SHOP</a>
                <img src="src/assets/shopping_cart_FILL0_wght400_GRAD0_opsz24.svg" alt="cart"></img>
            </nav>
        </header>
    )
}

export default Header;