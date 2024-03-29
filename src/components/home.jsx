import Header from './header';
import Slideshow from './slideshow';
import Category from './category';
import HomeFooter from './homeFooter';
import Cart from './cart';
import '/src/styles/home.css'

const Home = () => {

    return(
        <div className='main-home' id='main-home'>
            <Header ></Header>
            <Slideshow></Slideshow>
            <Category></Category>
            <HomeFooter></HomeFooter>
            <Cart></Cart>
        </div>
    )
}

export default Home;