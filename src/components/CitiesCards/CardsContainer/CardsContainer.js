//react/redux
import {useSelector} from "react-redux";
//components
import {Grid, Typography} from "@mui/material";
import CityCard from "../CityCard/CityCard";
//styles
import './CardsContainer.css'

const CardsContainer = () => {
  const citiesList = useSelector(state=>state.selectedCities);

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
          Your cities
        </Typography>
        <Grid container spacing={4}>
          {citiesList.map((value, index) => (
            <Grid key={index} item>
              <CityCard
                details={value}
                sx={{
                  height: 140,
                  width: 100,
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CardsContainer;
