//react/redux
import {useSelector} from "react-redux";
//components
import {Grid, Typography} from "@mui/material";
import ForecastCard from "../ForecastCard/ForecastCard";
//styles
import './ForecastContainer.css'

const ForecastContainer = () => {
  const dailyForecast = useSelector(state=>state.forecast.daily)
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Typography
          variant="h5"
          sx={{
            paddingLeft: 0
          }}
          p={4}
        >
          Weather for 7 days
        </Typography>
        <Grid container spacing={4}>
          {dailyForecast && dailyForecast.map((value, index) => (
            <Grid key={index} item>
              <ForecastCard details={value}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ForecastContainer;
