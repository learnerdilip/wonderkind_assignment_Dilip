import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography, CircularProgress } from "@material-ui/core";

export default function WeatherUpdate() {
  const weatherData = useSelector(
    (reduxState: any) => reduxState.weather.weatherData
  );
  const weekweather = weatherData ? [...weatherData] : [];

  // ERROR handling
  const error = useSelector((reduxState: any) => reduxState.weather);

  // finding the average of next ten days
  const tenDayAvg = Math.round(
    weekweather.reduce((summation: any, day: any) => {
      return summation + day.temp;
    }, 0) / 10
  );

  const loading = useSelector((reduxState: any) => reduxState.weather.loading);

  // the first day of the week will be today
  const day = new Date().getDay();
  const week = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];

  return (
    <div id="weatherDetails">
      <br />
      {loading && !weekweather && <CircularProgress color="secondary" />}
      {error.error && <Typography variant="overline">{error.error}</Typography>}
      {weekweather && weekweather.length === 10 && (
        <Grid spacing={2} container lg={12}>
          <Grid item lg={12}>
            <Typography
              style={{ color: "rgba(0, 0, 0, 0.89)" }}
              variant="h6"
            >{`${weekweather[0].datetime.substring(
              6,
              14
            )} to ${weekweather[9].datetime.substring(6, 14)}`}</Typography>
          </Grid>
          <Grid item lg={12}>
            <Typography variant="h1">
              <b>
                {" "}
                {tenDayAvg}
                <sup>&#8451;</sup>
              </b>
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <div id="weekweather">
              {weatherData.slice(0, 7).map((item: any, index: any) => (
                <div key={index} id="dayweather">
                  <p style={{ color: "rgba(0, 0, 0, 0.89)" }}>
                    {week[index + day - 1]}
                  </p>
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
