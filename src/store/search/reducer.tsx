const initialState = {
  weatherData: [],
};

const weatherReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "WEATHER/FETCHED": {
      if (state.weatherData) {
        return {
          ...state,
          weatherData: [...state.weatherData, action.payload[0]],
        };
      } else {
        return { ...state, weatherData: action.payload };
      }
    }
    default: {
      return { ...state };
    }
  }
};

export default weatherReducer;
