import React from 'react';
import '../index.css';
import { useContext, useEffect } from 'react';
import GlobalContext from '../context/Context';


const NewsTab2 = () => {

    const newContext = useContext(GlobalContext)
    

    useEffect(() => {
        console.log(newContext)
    })


    return (   <div className="tab ">
    <div className="nws-container-mid">
        
        <button className="btn-main" style={{
            background: '#88B17C 0% 0% no-repeat padding-box',
            borderradius: '10px',
            opacity: '1'
        }} >  </button> 
        <h4>News Topic</h4>
        <p> Article Summary</p>
        <article> Article Main </article>

    </div>
    
    </div>
        
    )
}

export default NewsTab2
