import axios from "axios";
/*

This file handles geolocation API calls and any geocoding needed

*/

export const locationHandler = (setLocation, setCountry) => {
  let url = `http://ip-api.com/json/?fields=61439`;
  const response = axios.get(url)
    .then((data) => {
      setLocation(data.data.city);
      setCountry(data.data.country);
      // console.log(country)
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      }
    });

    return response;
};
