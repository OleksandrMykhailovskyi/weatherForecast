let initialState = {
  forecast: {},
  selectedCities : [],
  citiesInfo : [
    {name: 'Kharkiv', lat: '49.58', lon: '36.15'},
    {name: 'Kyiv', lat: '50.27', lon: '30.31'},
    {name: 'Lviv', lat: '49.50', lon: '24.01'},
    {name: 'Donetsk', lat: '48.00', lon: '37.48'},
    {name: 'Luhansk', lat: '48.36', lon: '39.17'},
    {name: 'Kherson', lat: '46.38', lon: '32.36'},
    {name: 'Sevastopol', lat: '44.36', lon: '33.32'}
  ]
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_POSTS":
      return{
        ...state,
        forecast: action.payload
      }
    case "ADD_CITY":
      return{
        ...state,
        selectedCities: [...state.selectedCities, action.payload]
      }
    case "REMOVE_CITY":
      const updatedArray = state.selectedCities.filter(el => el.name !== action.payload);
      return{
        ...state,
        selectedCities: updatedArray
      }
    default:
      return state;
  }
}

export default reducer;
