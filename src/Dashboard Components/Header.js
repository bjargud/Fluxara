import React, {useState} from 'react'
import '../index.css';
import weatherIcon from '../Assets/icons/iconfinder_Cloudy_Sunny_5729392.png';
import '../style components/DashBoard.css';
import { useEffect } from 'react';


function Header({name}) {

    const [time, setTime] = useState('')

    const setGreeting = () => {
      const getDay = new Date();
      console.log(getDay)
      const getHour = getDay.getHours();
      console.log(getHour)
     
  
      if (getHour >= 12 && getHour < 18){
          setTime("Good Afternoon")    
      }
      else if (getHour < 12) {
          setTime("Good Morning")
      }
      
      else if (getHour > 18 && getHour < 24){
          setTime("Good Evening")
      }
      
    
  
  }

    useEffect(()=> {
       setGreeting()
        
    })

    return (
        <div className="header__main"> 
        <div className="iconContainer">
            <img alt='' src={weatherIcon} className="weatherIcon" />
        </div>
        <div className="greetingContainer">
            <h1 className='greetingMain'> {time} Geller {name}! </h1>
        </div>
        
        <div className="searchContainer">
        <div className="flexbox">
          <div className="search">

        <div>
      <input type="text" placeholder="Search for stories. . ." required/>
        </div>
        </div>
        </div>
        </div>
    </div>
    )
}

export default Header
