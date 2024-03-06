import { useState, useEffect } from 'react'
import '/src/styles/slideshow.css'

let i=0;
let images = [{src:'src/assets/img1.jpg', alt:'welcome image'},{src:'src/assets/img2.webp', alt:'samsung QLED TV'}];

function Slideshow(){

    const [image, setImage] = useState({src:'', alt:''});

    function slider(){
        if(i===1){
            return(
                <div className='content-wrapper'>
                <div className="slide-content">EXCLUSIVE DEAL!!<br></br>QLED GAMING MONITOR<br></br>30% OFF</div>
                <img id='slideImg' src={images[i].src} alt={images[i].alt}></img>
                </div>
            )
        }
        return <img id='slideImg' src={images[i].src} alt={images[i].alt}></img>
    }

    function handleSlide(val){
        i=val-1;
        setImage({...image,src: images[i].src, alt: images[i].alt});
        slider();
    }

    useEffect(() => {
        const interval = setInterval(() => {
            i++;
            if(i>images.length-1){
                i=0;
            }
            setImage({...image,src: images[i].src, alt: images[i].alt});
        },5000);

        return () =>  clearInterval(interval);
    })

    return(
        <section>
            <div id='slider-wrapper'>
                {slider()}
                <ol>
                <li onClick={() => {handleSlide(1)}}></li>
                <li></li>
                </ol>
            </div>
        </section>
    )
}

export default Slideshow;