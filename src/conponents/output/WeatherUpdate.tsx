// weather update
import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography, CircularProgress } from "@material-ui/core";

export default function WeatherUpdate() {
  const weatherData = useSelector(
    (reduxState: any) => reduxState.weather.weatherData
  );
  const weekweather = [...weatherData];

  const loading = useSelector((reduxState: any) => reduxState.weather.loading);

  return (
    <div id="weatherDetails">
      {loading && weekweather.length !== 10 && (
        <CircularProgress color="secondary" />
      )}
      {weatherData.length === 10 && (
        <Grid spacing={2} container lg={12}>
          <Grid item lg={12}>
            <Typography variant="h6">7 DAYS</Typography>
          </Grid>
          <Grid item lg={12}>
            <Typography variant="h1">
              <b>
                {" "}
                {Math.round(
                  weekweather.reduce((summation: any, day: any) => {
                    return summation + day.temp;
                  }, 0) / 10
                )}
                <sup>&#8451;</sup>
              </b>
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <div id="weekweather">
              {weatherData.slice(0, 7).map((item: any, index: any) => (
                <div key={index} id="dayweather">
                  <p>weekday</p>
                  <h4>{`${Math.round(item.temp)} `}&#8451;</h4>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
