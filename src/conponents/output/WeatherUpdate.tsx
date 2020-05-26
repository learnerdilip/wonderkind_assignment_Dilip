import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography, LinearProgress } from "@material-ui/core";

export default function WeatherUpdate() {
  const weatherData = useSelector(
    (reduxState: any) => reduxState.weather.weatherData
  );
  const weekweather = [...weatherData];
  console.log("#############", weatherData);

  return (
    <div id="weatherDetails">
      {weatherData.length < 10 && weatherData.length > 0 && (
        <LinearProgress variant="determinate" value={weatherData.length * 10} />
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
                    return summation + day.data.data[0].temp;
                  }, 0) / 10
                )}
                <sup>&#8451;</sup>
              </b>
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <div id="weekweather">
              {weatherData.slice(0, 7).map((item: any) => (
                <div id="dayweather">
                  <p>weekday</p>
                  <h4>{`${item.data.data[0].temp} `}&#8451;</h4>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
