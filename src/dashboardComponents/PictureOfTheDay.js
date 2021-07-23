import React, {useState, useEffect} from 'react'
import '../index.css';
import axios from 'axios';

function PictureOfTheDay() {

    const [image, setImage] = useState('')

    const request = async () => {
        return axios.get('https://source.unsplash.com/random')
    }

    const callRequest = async () => {
    try {   
        const final = await request() 
        setImage(final.config.url)
        // console.log(final)
    }
        catch (error) { console.log(error) }
    }

    useEffect(()=> {
        callRequest()
        // eslint-disable-next-line
    }, [])



    return (
        <div className="tab picture"> 
        
        <div className="nws-container-pic">
          <div className="elementContainer"> 
          <button className="btn-main X" > Feature Pic </button> 
          
          </div>
          

          <img alt='/' src={image} className="image-X"/>

        </div>
        
         </div>
    )
}

export default PictureOfTheDay
