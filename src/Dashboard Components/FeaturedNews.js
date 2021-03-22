import React from 'react'

import '../index.css';


function FeaturedNews() {

 
    return (
        <div className="tab featured">
        
             <div className="nws-container-mid">
            
            <button className="btn-main" style={{
                background: "#7C8CB1 0% 0% no-repeat padding-box",
                borderradius:  "10px",
                opacity:  "1"
            }}>featured</button> 
            <h2>News Topic</h2>
            <p> Article Summary</p>
            <article> Article Main </article>

            </div>
        
        </div>
    )
}

export default FeaturedNews
