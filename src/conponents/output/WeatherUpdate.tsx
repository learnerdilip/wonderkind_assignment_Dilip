import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography, CircularProgress } from "@material-ui/core";

export default function WeatherUpdate(props: any) {
  // ERROR handling
  const error = useSelector((reduxState: any) => reduxState.weather);
  // if the data is still loading... show the progressbar
  const loading = useSelector((reduxState: any) => reduxState.weather.loading);

  // the first day of the week will be today
  const day = new Date().getDay();
  const week: string[] = [
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
      {loading && !error.error && props.weekweather.length !== 10 && (
        <CircularProgress color="secondary" />
      )}
      {error.error && <Typography variant="overline">{error.error}</Typography>}
      {props.weekweather && props.weekweather.length === 10 && (
        <Grid spacing={2} container lg={12}>
          <Grid item lg={12}>
            <Typography
              style={{ color: "rgba(0, 0, 0, 0.89)" }}
              variant="h6"
            >{`${props.weekweather[0].datetime.substring(
              6,
              14
            )} to ${props.weekweather[9].datetime.substring(
              6,
              14
            )}`}</Typography>
          </Grid>
          <Grid item lg={12}>
            <Typography variant="h1">
              <b>
                {" "}
                {props.tenDayAvg}
                <sup>&#8451;</sup>
              </b>
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <div id="weekweather">
              {props.weekweather.slice(0, 7).map((item: any, index: any) => (
                <div key={index} id="dayweather">
                  <p style={{ color: "rgba(0, 0, 0, 0.89)" }}>
                    {week[index + day - 1]}
                  </p>
                  <h3>{`${Math.round(item.temp)} `}&#8451;</h3>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
