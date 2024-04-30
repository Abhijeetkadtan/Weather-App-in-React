import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Pune",
     feelslike: 36.98,
temp: 38.59,
humidity:80,
tempmax: 38.59,
tempmin: 38.59,
 weather: "overcast clouds",
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}><h1>Weather App by Abhijeet</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>

    );
}