import React from "react"
import {Link} from 'react-router-dom';
import '../index.css';
import '../style components/WelcomePage.css';
import sideImage from '../Assets/julius-drost-nsrSyI-JUYg-unsplash.jpg';





function WelcomePage({setName}) {
     
   

    return (
        <div className="wrapper">

        <form className="container__main" onSubmit={e=>{e.preventDefault()}}>
        <div className="container__main__object">
            <h2 className="welcome">Welcome to your dashboard</h2>

            <p className="text">What's your name? </p>
            
            <input type="text" className="mainInput" onChange={e=>setName(e.target.value)} />
          

            <Link to="/pages/UserChoice.js" className="link"> {"next >"}</Link>
        </div>
            

        </form>

        <div className="container__secondary">
            <img alt='' src={sideImage} className="container__Image"/>
        </div>
           
        </div>
    )
}

export default WelcomePage
