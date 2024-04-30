import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let[city ,setCity]=useState("");
    let[error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="e044716df352361925eab44e71e3e815";
    


    let updateWeather=async ()=>
    {
        try {
        let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonres= await response.json();
        console.log(jsonres);
        let result={
            city:city,
            temp:jsonres.main.temp,
            humidity:jsonres.main.humidity,
            tempmax:jsonres.main.temp_max,
            tempmin:jsonres.main.temp_min,
            feelslike:jsonres.main.feels_like,
            weather:jsonres.weather[0].description
        }
        console.log(result);
        return result;
    }
    catch(err){
        throw err;
    }};
    let handleChange=(evt)=>{
        setCity(evt.target.value);


    };
    let handleSubmit= async (evt)=>{
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let info= await updateWeather();
        updateInfo(info);
        } catch(err){
            setError(true);
        }
    };
    return(
        <div className="SearchBox"><h2>Weather App</h2>
        <form onSubmit={handleSubmit}>
           <TextField id="city" label="City" variant="outlined" onChange={handleChange} value={city}/><br /><br />
           <Button variant="contained" type='submit'>Search</Button></form>
           {error&& <p>No such place exist</p>}
        </div>
    );
}