const initialState = {
  weatherData: null,
  loading: false,
};

const weatherReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "WEATHER/FETCHED": {
      return {
        ...state,
        weatherData: action.payload,
      };
    }
    case "ERROR": {
      return { ...state, error: "Sorry! No such city in our database!" };
    }
    case "SEARCHING": {
      return { ...state, loading: !state.loading };
    }
    default: {
      return { ...state };
    }
  }
};

export default weatherReducer;
