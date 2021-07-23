import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../style/features/featuredPage.css';
import altImage from '../helpers/mike-van-den-bos-jf1EomjlQi0-unsplash.jpg';
import Modal from './../features/Modal';

function FeaturedNews({country}) {

    const [content, setContent] = useState('')
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')

    const [showModal, setModal] = useState(false);

    const toggleModal = () => {
      setModal((prev) => !prev);
      // console.log("clicked");
    };

    const headlineCall = ()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f6d414ee882c4a149f26b7015f4746a6`
        axios.get(url)
        .then((data)=> {
         setContent(data.data.articles[0].content)
         setImage(data.data.articles[0].urlToImage)
         setTitle(data.data.articles[0].title)      
        
        })
        .catch ((error)=> {
            if(error.response) {
                console.log(error.response)
            }
        })
    }

    useEffect(()=> {
        headlineCall(country)
        // eslint-disable-next-line
    }, [])

 
    return (
       
        <div className ='FeaturedTab' onClick = {toggleModal}>

      {
         title && 
        <Modal setModal = {setModal} showModal = {showModal} article = {content} />
      }

        <img alt = {altImage} className='FeaturedTab_img' src= {image}/>
        {/* <button className='FeaturedTab_Button'> </button> */}
        <article  className='FeaturedTab_NewsTopic'> Featured Story > {title} </article>
        
        </div>

        
        
      
    )
}

export default FeaturedNews
