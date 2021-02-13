import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import webdesign from '../images/webdesign.jpg'
import se from '../images/softwareengineer.jpg'
import marketing from '../images/marketing.jpg'


export default function CarouselComponent() {
    return(
        <div className='carousel-wrapper' >
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
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