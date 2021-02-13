import React, { Component, useState, useEffect } from 'react';
import './App.css'
import CarouselComponent from './components/carousel.component';
import { GoMail } from 'react-icons/go';
import { GiSmartphone } from 'react-icons/gi'

const mailIconStyle = {
  display: 'flex',
  width: '20px'
}

function App () {
  const [ width, setWindowWidth ] = useState(0);
  const [shouldAnimate, setAnimation ] = useState(false)

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width)
  };

  // const responsive = {
  //   showTopNavMenu: width > 1023
  // }
    return (
      <div>
        <div className="container-banner">          
            <img className="logo-1" src={'https://baycultivate.s3-us-west-1.amazonaws.com/logo+last.PNG'} alt="Logo" />                          
        </div>

        <div style={{'marginBottom':'25px'}}>
          <div style={{'marginTop': '30px', 'display': 'block', 'marginLeft': 'auto', 'marginRight': 'auto', 'width': '50%'}}>
            <CarouselComponent />
          </div>
          <div className="container-services" style={{'marginBottom':'250px'}}>
            <div>
              
            <div style={{'fontWeight': 'bold', 'marginTop': '10px', 'marginLeft':'10px','marginBottom': '20px'}}><GoMail /> Email : paulv@pacquiaofoundation.org</div>
            {/* <div style={{'fontWeight': 'bold', 'marginTop': '10px',  'marginLeft':'10px', 'marginBottom': '20px'}}><GiSmartphone /> Phone: </div> */}
            <ul> 
              <li >Web Development: professional template style, quick turnaround, option to upgrade by feature. $50 month and up, email to go over web template options.</li>          
            </ul>
            <ul>
              <li >Software Engineering: Individually customized web design that is unique to any site online. Email to schedule engineering consult.</li>
            </ul>
            <ul>
              <li >Digital Marketing: SEO, Keyword Search, Social Media Campaigns Articles, Reviews, Ad Scheduling, Google Ads. Email to schedule services call.</li>
            </ul>
          </div>

            </div>
        </div>
      
        <div className="container-footer">

          <div className="container-partners" >
            <span className="partners-title" style={{'fontFamily': 'Brush Script MT'}}>Bay Cultivate Partners</span>
            <div className="partners">
              <a className="partners1" href="http://c0d3.com" style={{'fontFamily': 'PT Mono'}}>C0D3</a>
              <a href="http://pacquiaofoundation.org" ><img className='partners2'src={'https://baycultivate.s3-us-west-1.amazonaws.com/MANNY-PACQUIAO-FOUNDATION.svg'} alt='mpf'/></a>
              <a href="https://3rdstreetboxing.com/" ><img className="partners3" src={'https://baycultivate.s3-us-west-1.amazonaws.com/3rd-Street2colorlogov3.png'} alt='3rdst'/></a>            
            </div>
          </div>
        </div>
      </div>
    )
} 

export default App