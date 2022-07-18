//components
import Header from "./components/Header/Header";
import {Container} from "@mui/material";
import CardsContainer from "./components/CitiesCards/CardsContainer/CardsContainer";
import ForecastContainer from "./components/ForecastList/ForecastContainer/ForecastContainer";
import AddCity from "./components/AddCity/AddCity";

const App = () => {
  return (
    <Container>
      <Header />
      <AddCity />
      <CardsContainer />
      <ForecastContainer />
    </Container>
  );
}

export default App;
