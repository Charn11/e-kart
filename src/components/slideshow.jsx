import { useState, useEffect } from 'react'
import '/src/styles/slideshow.css'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'

let i=0;
let images = [{src:'src/assets/img1.webp', alt:'welcome image'},{src:'src/assets/img2.webp', alt:'samsung QLED TV'}, {src:"src/assets/img3.webp", 
alt:"White Gold Plated Princess"}, {src:"src/assets/img4.webp", alt:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}, {src:"src/assets/img5.webp", 
alt:"Rain Jacket Women Windbreaker Striped Climbing Raincoats"}];
let initialX, initialY, initialTime;

function Slideshow(){

    const [image, setImage] = useState({src:'', alt:''});
    const [slide, setSlide] = useState(1);

    function slider(){
        return(
            <div className='no-content-wrapper' onTouchStart={(e) => {handleTouchStart(e)}} 
            onTouchEnd={(e) => {handleTouchEnd(e)}}>
                <img src={images[i].src} alt={images[i].alt}></img>
            </div>
         )
    }

    function handleSlide(val){
        i=val-1;
        setImage({...image,src: images[i].src, alt: images[i].alt});
        slider();
        setSlide(i+1);
    }

    function handleArrow(str){
        if(str==="left"){
            i = i-1;
            if(i<0){
                i=images.length-1;
            }
            setImage({...image,src: images[i].src, alt: images[i].alt});
            slider();
            setSlide(i+1);
        }
        else{
            i = i+1;
            if(i>images.length-1){
                i=0;
            }
            setImage({...image,src: images[i].src, alt: images[i].alt});
            slider();
            setSlide(i+1);
        }
    }

    function handleTouchStart(e){
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
        initialTime = new Date();
    }

    function handleTouchEnd(e){
        let deltaX = e.changedTouches[0].clientX - initialX;
        let deltaY = Math.abs(e.changedTouches[0].clientY - initialY);
        let deltaTime = new Date() - initialTime;

        if(deltaX <= -30 && deltaY <= 100 && deltaTime <= 300) {
            handleArrow();
         }
         else if(deltaX >= 30 && deltaY <= 100 && deltaTime <= 300){
            handleArrow("left");
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            i++;
            if(i>images.length-1){
                i=0;
            }
            setImage({...image,src: images[i].src, alt: images[i].alt});
            setSlide(i+1);
        },5000);

        return () =>  clearInterval(interval);
    })

    return(
        <section>
            <div id='slider-wrapper'>
                <div className='arrow-wrapper'>
                    <div className='left'>
                        <ArrowLeftIcon width={30} height={30} onClick={() => {handleArrow("left")}}></ArrowLeftIcon>
                    </div>
                    {slider()}
                    <div className='right'>
                        <ArrowRightIcon width={30} height={30} onClick={() => {handleArrow()}}></ArrowRightIcon>
                    </div>
                </div>
                <ol>
                    <li style={slide===1 ? {backgroundColor:'white',opacity:1} : null} onClick={() => {handleSlide(1)}}></li>
                    <li style={slide===2 ? {backgroundColor:'white',opacity:1} : null} onClick={() => {handleSlide(2)}}></li>
                    <li style={slide===3 ? {backgroundColor:'white',opacity:1} : null} onClick={() => {handleSlide(3)}}></li>
                    <li style={slide===4 ? {backgroundColor:'white',opacity:1} : null} onClick={() => {handleSlide(4)}}></li>
                    <li style={slide===5 ? {backgroundColor:'white',opacity:1} : null} onClick={() => {handleSlide(5)}}></li>
                </ol>
            </div>
        </section>
    )
}

export default Slideshow;