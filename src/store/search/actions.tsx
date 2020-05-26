import { Dispatch } from "redux";
import axios from "axios";

export const fetchWeather = (formData: any) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?&city=${formData.city}&country=${formData.country}&days=10&key=${process.env.REACT_APP_API_KEY}`
    );
    // console.log(response.data.data);
    if (response.data.data) {
      dispatch({ type: "WEATHER/FETCHED", payload: response.data.data });
    } else {
      dispatch({ type: "ERROR" });
    }
  } catch (err) {
    console.error("err");
  }
};
