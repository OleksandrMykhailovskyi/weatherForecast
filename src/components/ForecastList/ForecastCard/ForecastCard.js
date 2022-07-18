//components
import {Avatar, Card, Typography} from "@mui/material";
//styles
import './ForecastCard.css'

const ForecastCard = ({details}) => {
  const {
    weather,
    dt,
    temp,
    sunrise,
    pressure,
    wind_speed
  } = details;

  const currentDate = new Date(dt*1000);
  const dateToShow = currentDate.toLocaleDateString();

  const tempConverter = (kelvin) => +kelvin/13.5;

  const getTime = (date) => {
    let updatedDate = new Date(date);
    return updatedDate.toLocaleTimeString()
  }

  return (
    <Card className="Card1">
      <div className="CardHeader">
        <Avatar src={"http://openweathermap.org/img/w/" + weather[0].icon + ".png"} />
        <Typography>{dateToShow}</Typography>
      </div>
      <Typography>Day: {tempConverter(temp.day).toFixed(0)}°C</Typography>
      <Typography>Night: {tempConverter(temp.night).toFixed(0)}°C</Typography>
      <Typography>Sunrise at: {getTime(sunrise)}</Typography>
      <Typography>Pressure: {pressure}</Typography>
      <Typography>Wind speed: {wind_speed} m/s</Typography>
    </Card>
  );
}

export default ForecastCard;
