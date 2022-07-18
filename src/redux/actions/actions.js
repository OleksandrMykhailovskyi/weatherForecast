import axios from "axios";

export const fetchPosts = (lat, lon) => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts&appid=956ba0be030ed233b673309cf6461658`
    );
    dispatch({
      type: "FETCH_POSTS",
      payload: response.data
    })
  }
}

export const addCity = (payload) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_CITY",
      payload: payload
    })
  }
}

export const removeCity = (name) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_CITY",
      payload: name
    })
  }
}
