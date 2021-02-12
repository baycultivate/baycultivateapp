import React, { Component, useState, useEffect } from 'react';
import './App.css'

// import Introduction from './components/introduction'
// import logo from './logo last.PNG'

function App () {
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width)
  };

  const responsive = {
    showTopNavMenu: width > 1023
  }
    return (
      <div>
        <div className="container-banner">          
            <img className="logo-1" src={'https://baycultivate.s3-us-west-1.amazonaws.com/logo+last.PNG'} alt="Logo" />                          
        </div>

        <div className="container-services">
          <ul> 
            <li >Web Development: professional template style, quick turnaround, option to upgrade by feature.</li>          
          </ul>
          <ul>
            <li >Software Engineering: Individually customized web design that is universally unique, better long term investment.</li>
          </ul>
          <ul>
            <li >Digital Marketing: SEO, Keyword Search, Social Media Campaigns Articles, Reviews, Ad Scheduling, Google Ads.</li>
          </ul>
        </div>
      
        <div className="container-footer">

          <div className="container-partners" >
            <span className="partners-title" style={{'fontFamily': 'Brush Script MT'}}>Bay Cultivate Partners</span>
            <div className="partners">
              <a className="partners1" href="http://c0d3.com" style={{'fontFamily': 'PT Mono'}}>C0D3</a>
              <a href="http://pacquiaofoundation.org" ><img className='partners2'src={'https://baycultivate.s3-us-west-1.amazonaws.com/MANNY-PACQUIAO-FOUNDATION.svg'}/></a>
              <a href="https://3rdstreetboxing.com/" ><img className="partners3" src={'https://baycultivate.s3-us-west-1.amazonaws.com/3rd-Street2colorlogov3.png'} /></a>            
            </div>
          </div>
        </div>
      </div>
    )
} 

export default App