/* eslint-disable */
import React, { useState, useEffect, useContext } from "react";
import View from "./view";
import GlobalContext from './../../context/Context';
import '../../style/dashboardPage/index.css';

function DashBoard ({ name, userOptions, location, country }) {
  const [data, setData] = useState([]);

  const news = useContext(GlobalContext);

  let defaultStateSize = 3;

  useEffect(() => {
    const data1 = localStorage.getItem("news");
    // const mainData = JSON.parse(data1);
    setData(news);
    if (news.length > 0) {
      setData(news);
    }
  }, [news]);

  useEffect(() => {
    console.log(data, "checker");
  }, [data]);

  return (
    <div className = 'dashBoard'>
      <View
        name={name}
        userOptions={userOptions}
        country={country}
        data={data}
        defaultStateSize={defaultStateSize}
        location={location}
      />
    </div>
  );
}

export default DashBoard