import { useState, useEffect } from 'react'
import 'src/styles/slideshow.css'

function Slideshow(){
    return(
        <section>
            <div className='slider-wrapper'>
                <div className='slider'>
                    <img id='slide-1' src='src/assets/img1.jpg' alt='cool welcome message'></img>
                    {/*<p>E-Kart, Do You Need Anything Else?</p>*/}
                    <img id='slide-2' src='src/assets/img2.jpg' alt='QLED gaming monitor from samsung'></img>
                </div>
                <div className='slider-nav'>
                    <a href="#slide-1"></a>
                    <a href="#slide-2"></a>
                </div>
            </div>
        </section>
    )
}

export default Slideshow;