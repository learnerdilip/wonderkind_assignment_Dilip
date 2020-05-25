import { Dispatch } from "redux";
import axios from "axios";

export const fetchWeather = (formData: any, datesArr: any) => async (
  dispatch: Dispatch
) => {
  let arrPromise: any = [];
  for (let i = 0; i < 10; i++) {
    arrPromise = [
      ...arrPromise,
      await axios.get(
        `https://api.weatherbit.io/v2.0/history/daily?&city=${formData.city}&country=${formData.country}&start_date=${datesArr[i].start_date}&end_date=${datesArr[i].end_date}&key=${process.env.REACT_APP_API_KEY}`
      ),
    ];
  }
  Promise.all(arrPromise).then((values) =>
    dispatch({ type: "WEATHER/FETCHED", payload: values })
  );
};
