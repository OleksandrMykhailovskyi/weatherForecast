//react/redux
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCity} from "../../redux/actions/actions";
//components
import {Button, MenuItem, Select} from "@mui/material";
//styles
import './AddCity.css'

const AddCity = () => {
  const dispatch = useDispatch();
  const citiesList = useSelector(state=>state.citiesInfo);
  const selectedCitiesList = useSelector(state=>state.selectedCities);

  const [name, setName] = useState("");
  const findCityObj = (cityName) => {
    const city = citiesList.find(element => element.name===cityName)
    return city;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = findCityObj(name);
    !selectedCitiesList.find(el => el.name === payload.name) ?
      dispatch(addCity(payload)) :
    alert('This city is already chosen. Please choose another one.');
  }

  const handleChange = (event) => {
    event.preventDefault();
    setName(event.target.value || '');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Select
          value={name}
          onChange={handleChange}
          sx={{
            marginRight: '10px'
          }}
        >
          <MenuItem value={'Kharkiv'}>Kharkiv</MenuItem>
          <MenuItem value={'Kyiv'}>Kyiv</MenuItem>
          <MenuItem value={'Lviv'}>Lviv</MenuItem>
          <MenuItem value={'Donetsk'}>Donetsk</MenuItem>
          <MenuItem value={'Luhansk'}>Luhansk</MenuItem>
          <MenuItem value={'Kherson'}>Kherson</MenuItem>
          <MenuItem value={'Sevastopol'}>Sevastopol</MenuItem>
        </Select>
        <Button
          onClick={handleSubmit}
          color='success'
          variant="outlined"
        >
          Add city
        </Button>
      </form>
    </div>
  );
}

export default AddCity;
