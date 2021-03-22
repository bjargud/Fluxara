import React,{useState} from 'react';
import sideImage from '../Assets/julius-drost-nsrSyI-JUYg-unsplash.jpg';
import '../index.css';
import '../style components/UserChoice.css';
import { Link } from 'react-router-dom';



function UserChoice({name, userOptions, setUserOptions}) { 

    const[count, setCount]= useState(0)


// store only 5 characters

const buttonColors = ["lightgreen", "lightcoral", "lightblue", "violet","cyan"]


const colorChange = (button)=> {
    button.style.backgroundColor = buttonColors[count];
    setCount(p => p + 1)
}


const clickHandler = (option, e , index) => {
    if(userOptions.length <= 5) {
        setUserOptions(prevState => prevState.concat(option))
        console.log(userOptions)
    }
    
 }

const options=["tech","culture","sex","sports","opinion","business","food","health","space"]


const buttonList = options.map((element,index) => {
    // returns two handleClick methods
    
    
    return <button key = {element} disabled={userOptions.includes(element)} onClick={(e)=>{
        clickHandler(element)
        //here
        colorChange(e.target)
        
    }} 
    className={`btn-main ${element}`}> {element} </button>
})


    return ( 
        <div className="wrapper">

        <div className="container__main">
            <div className="container__main_inner">
            
            
                <h2 className="welcome">Welcome to your dashboard {name}! </h2>
                <p className="text"> Select Five topics for your newsfeed 
                    {/* <img className='emoji' alt='' src={emojiFace} /> */}
                </p>
                
                
                <div className="buttonList">
                    {buttonList}
                </div>

                <Link to="/pages/AllSet.js" className="link"> next > </Link>
            </div>
        </div>
        <div className="container__secondary">
            <img alt='' src={sideImage} className="container__Image"/>
        </div>

    </div>
    )
}

export default UserChoice

