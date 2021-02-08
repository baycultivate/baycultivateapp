import React, { Component } from 'react';
// import Introduction from './components/introduction'
// import logo from './logo last.PNG'


class App extends Component {  
  render () {
    return (
      <div>
        <img src={'https://baycultivate.s3-us-west-1.amazonaws.com/logo+last.PNG'} alt="Logo" style={{"display": "block", "margin-left": "auto", "margin-top": "25px", "margin-right": "auto", "height": "400px", "width": "400px"}}/>
        <ul>
          <li>Web Development: professional template style, quick turnaround, option to upgrade by feature</li>          
        </ul>
        <ul>
          <li>Software Engineering: Individually distinct web design that is fully customizable, better long term investment</li>
        </ul>
        <ul>
          <li>Digital Marketing: SEO, Keyword Search, Social Media Campaigns Articles, Reviews, Ad Scheduling, Google Ads</li>
        </ul>
      
      <button>Schedule Phonecall</button>
      </div>
    )
  }
} 

export default App