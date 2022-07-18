//react/redux
import {useDispatch} from "react-redux";
import {fetchPosts, removeCity} from "../../../redux/actions/actions";
//components
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {Button, Card, Typography} from "@mui/material";
//styles
import './CityCard.css'

const CityCard = ({details}) => {
  const dispatch = useDispatch();

  const {
    name,
    lat,
    lon
  } = details;

  const getWeather = (e) => {
    e.preventDefault();
    dispatch(fetchPosts(lat, lon));
  }

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(removeCity(name))
  }

  return (
    <Card className="Card">
      <Tooltip className="Tooltip" title="Delete">
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Typography variant="h6">{name}</Typography>
      <Button
        color='success'
        fullWidth={true}
        variant="outlined"
        onClick={getWeather}
      >
        Details
      </Button>
    </Card>
  );
}

export default CityCard;
