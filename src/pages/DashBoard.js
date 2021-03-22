import React from 'react'
import '../style components/DashBoard.css';
import '../index.css';
import Header from '../Dashboard Components/Header';
import Settings from '../Dashboard Components/Settings';
import Weather from '../Dashboard Components/Weather';
import FeaturedNews from './../Dashboard Components/FeaturedNews';
import NewsTab1 from './../Dashboard Components/NewsTab1';
import NewsTab2 from './../Dashboard Components/NewsTab2';
import NewsTab3 from './../Dashboard Components/NewsTab3';
import NewsTab4 from './../Dashboard Components/NewsTab4';
import PictureOfTheDay from './../Dashboard Components/PictureOfTheDay';

function DashBoard({name, userOptions}) {



   

    return (
        <div className ="wrapper">
        
     
        <div className="container__Dash">
                <Header name = {name}/>


                <div className ="container__new">
                    
                    <div className ="container__tab surface"> 
                        <FeaturedNews  />
                        <PictureOfTheDay/>
                    </div>

                    <div className ="container__tab middle"> 
                        <NewsTab1 />
                        <NewsTab2 />
                        <NewsTab3 />
                    </div>
                    
                    <div className ="container__tab footer">
                        <NewsTab4 />
                        <Settings />
                        <Weather />
                    </div>
                </div>
            </div>
    </div>
    )
}

export default DashBoard
