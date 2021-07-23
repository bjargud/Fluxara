import axios from "axios";
import DateUpdate from "./DateUpdate";
/* 

This file handles the news API calls and pushes the fetched data into an array

*/

export const newsHandler = async (id) => {
  const url = `http://newsapi.org/v2/everything?q=${id}&from=${DateUpdate()}&sortBy=popularityAt&apiKey=5a7995b637cd48519e2ceddac396c9b5`;
  const news = await axios.get(url)

  return news
};



export const newsHandlerSecondary = async (id, arr) => {
  const url = `http://newsapi.org/v2/everything?q=${id}&from=${DateUpdate()}&sortBy=popularityAt&apiKey=5a7995b637cd48519e2ceddac396c9b5`;
  const result = axios.get(url)
    .then((response) => {
      const mainData = response.data.articles
      arr.push(mainData);
      
      
      console.log(arr[0], 'news array');
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.status);
      }
    });
    console.log("array", result)
    return result
};
