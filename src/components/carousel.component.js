import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import webdesign from '../images/webdesign.jpg'
import se from '../images/softwareengineer.jpg'
import marketing from '../images/marketing.jpg'
import kobe from '../images/IMG_0218.jpeg'


export default function CarouselComponent() {
    return(
        <div className='carousel-wrapper' >
            <Carousel infiniteLoop useKeyboardArrows autoPlay>                
            
            <div>
                <img src={'https://baycultivate.s3-us-west-1.amazonaws.com/IMG_0223.jpeg'} alt='jonpaul' />
            </div>
            <div>
                    <img src={webdesign} alt='webdesign' />
                </div>
                <div>
                    <img src={se} alt='se'/>
                </div>
                <div>
                    <img src={marketing} alt='marketing'/>
                </div>
            </Carousel>
        </div>
    )
}