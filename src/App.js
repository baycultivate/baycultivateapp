import React, { Component, useState, useEffect } from 'react';

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

  const liStyle={"marginTop":"100px", "fontWeight":"bold", "fontSize":"50px"}
    return (
      <div>
        <img src={'https://baycultivate.s3-us-west-1.amazonaws.com/logo+last.PNG'} alt="Logo" style={{"display": "block", "marginLeft": "auto", "marginTop": "25px", "marginRight": "auto", "height": "400px", "width": "400px"}}/>                

      <div>
        <ul> 
          <li style={liStyle}>Web Development: professional template style, quick turnaround, option to upgrade by feature.</li>          
        </ul>
        <ul>
          <li style={liStyle}>Software Engineering: Individually customized web design that is universally unique, better long term investment.</li>
        </ul>
        <ul>
          <li style={liStyle}>Digital Marketing: SEO, Keyword Search, Social Media Campaigns Articles, Reviews, Ad Scheduling, Google Ads.</li>
        </ul>
      </div>
  
        <div style={{"backgroundColor":"silver"}}>
          <span style={{'fontFamily': 'Brush Script MT, cursive', 'fontSize':'30px'}}>Bay Cultivate Partners</span>
          <div style={{"display":"flex"}}>
            <a href="http://c0d3.com" style={{"marginLeft":"75px", 'marginTop':'15px','color':"#5440d8", 'fontWeight': 'bold', 'fontFamily': 'PT Mono', 'fontSize':'130px', 'textDecoration':'none'}}>C0D3</a>
            <a href="http://pacquiaofoundation.org" style={{"marginLeft":'100px', "marginTop": "25px"}}><img src={'https://baycultivate.s3-us-west-1.amazonaws.com/MANNY-PACQUIAO-FOUNDATION.svg'}/></a>
            <a href="https://3rdstreetboxing.com/" style={{"marginTop":"-20px","marginLeft":'150px'}}><img src={'https://baycultivate.s3-us-west-1.amazonaws.com/3rd-Street2colorlogov3.png'} style={{'height':'175px'}}/></a>
          </div>
        </div>

      </div>
    )
} 

export default App