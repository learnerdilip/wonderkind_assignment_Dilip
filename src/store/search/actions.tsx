import { Dispatch } from "redux";
import axios from "axios";

export const fetchWeather = (formData: any) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?&city=${formData.city}&country=${formData.country}&days=10&key=${process.env.REACT_APP_API_KEY}`
    );
    if (response.data.data) {
      dispatch({ type: "WEATHER/FETCHED", payload: response.data.data });
      dispatch({
        type: "ERROR",
        payload: null,
      });
    } else {
      dispatch({
        type: "ERROR",
        payload: "Sorry! No such city in our database!",
      });
      dispatch({ type: "WEATHER/FETCHED", payload: null });
    }
  } catch (err) {
    console.error("err");
  }
};
