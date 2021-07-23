/* eslint-disable */
import React, { useState, useEffect } from "react";
import GlobalContext from "./context/Context";
import { newsHandler } from "./features/NewsAPI";
import { locationHandler } from "./features/Geolocation";
import Router from "./features/Router";
import './main.css';

const App = () => {
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState(null);
  const [news, setNews] = useState([]);

  const [userOptions, setUserOptions] = useState([]);

  useEffect(() => {
    localStorage.setItem("user-choices", JSON.stringify(userOptions));
    locationHandler(setLocation, setCountry);
  });

  const triggerApi = () => {
    let newsUpdated = [...news]
    userOptions.forEach((val) => {
      newsHandler(val).then((res) => {
        const newsUpdate = { topic: val, articles: res.data.articles }
        newsUpdated = [...newsUpdated, newsUpdate]
        setNews(newsUpdated)
      })
    });
  };

  return (
    <div className ='App'>
      <GlobalContext.Provider value={news}>
        <Router 
        name={name}
        setName={setName}
        triggerApi = {triggerApi}
        userOptions={userOptions}
        setUserOptions={setUserOptions}
        news={news}
        country={country}
        location={location}
        />
      </GlobalContext.Provider>
    </div>
  );
};

export default App;
