import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './InfoBox.css';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}){
    const INIT_IMG="https://images.unsplash.com/photo-1445297983845-454043d4eef4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG92ZXJjYXN0JTIwY2xvdWRzfGVufDB8fDB8fHww";

    const HOT="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const COLD="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    
    const RAINY="https://images.unsplash.com/photo-1603321544554-f416a9a11fcf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW55fGVufDB8fDB8fHww";
   

return(
    <div className='InfoBox'>
        <h2>Weather - {info.weather}</h2>
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAINY:info.temp>15?HOT:COLD}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span">
        <p>temperature={info.temp}&deg;C</p>
        <p>humidity ={info.humidity}</p>
        <p>Min temp = {info.tempmin}</p>
        <p>Max temp = {info.tempmax}</p>
        <p>The weather is <i>{info.weather}</i> and it feels like {info.feelslike}</p>
        </Typography>
      </CardContent>
    
    </Card>
    </div>
    </div>
);

}