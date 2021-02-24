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

        <div style={{'marginTop':'25px', 'marginBottom':'25px'}}>
          <div className='container-carousel'>
            <CarouselComponent />
            
          </div>
          <div className="container-services" style={{'marginBottom':'250px'}}>
            <div>
              
            <div style={{'fontWeight': 'bold', 'marginTop': '10px','marginBottom': '20px'}}><GoMail /> Email : paulv@pacquiaofoundation.org</div> 
            
            
            
            
            {/* boardroom chat  */}
            {/* <a style={{'fontWeight':'bold'}} href="https://baycultivate.cloud.mattermost.com/" >Boardroom Chat Login</a> */}






            {/* <div style={{'fontWeight': 'bold', 'marginTop': '10px',  'marginLeft':'10px', 'marginBottom': '20px'}}><GiSmartphone /> Phone: </div> */}
            <ul> 
              {/* <li >Web Development: professional template style, quick turnaround, option to upgrade by feature. $50 month and up, email to go over web template options.</li>           */}
              
              {/* <li> <a href='https://garagescript.org'>Garage Script</a> is a 501c3 non-profit that teaches Software Engineering. Their curriclum <a href='https://c0d3.com'>C0D3</a> is proven as past graduates now work at Google as Software Engineers. Classes were being taught in Silicon Valley pre-Covid and are waiting to begin again. Donations made to the organization provide salaries for the staff to teach.</li>          
             */}

             <li>
               Bay Cultivate, <a href='https://pacquiaofoundation.org'>Manny Pacquiao Foundation</a>, and <a href='https://garagescript.org'>Garage Script</a> have collaborated to bring Tech Ed Programs to Philippines! Check out <a href='https://c0d3.com'> C0D3,</a> a free Software Engineer Curriclum created by Garage Script to give access to anyone in the world who wishes to learn.
             </li>
            
            {/* </ul>
             
            <ul> */}
              {/* <li >Software Engineering: Individually customized web design that is unique to any site online. Email to schedule engineering consult.</li> */}
            
              {/* <li >In collaboration with the <a href='https://pacquiaofoundation.org'>Manny Pacquiao Foundation</a>, we want to teach the C0D3 curriculum in the Philippines! As new programs are conceived, new funding must be allocated as well.</li> */}

              <li>Please reach out to the email above if you have any interest in getting involved by teaching, volunteering, financing, or donating.</li>
              
              <li>As we navigate through COVID please do your part in social distancing and wearing your mask, it could save lives! Try to uphold community, check in with your loved ones and friends, and always have hope for tomorrow!</li>
            {/* </ul>
            <ul> */}
              {/* <li >Digital Marketing: SEO, Keyword Search, Social Media Campaigns Articles, Reviews, Ad Scheduling, Google Ads. Email to schedule services call.</li> */}
            
              {/* <li >Reach out to the email above for any questions or interest in providing financial contributions, Thank You.</li> */}
            


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