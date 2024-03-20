import Header from './header';
import Slideshow from './slideshow';
import Category from './category';
import HomeFooter from './homeFooter';
import '/src/styles/home.css'

const Home = () => {

    return(
        <div className='main-home'>
            <Header ></Header>
            <Slideshow></Slideshow>
            <Category></Category>
            <HomeFooter></HomeFooter>
        </div>
    )
}

export default Home;