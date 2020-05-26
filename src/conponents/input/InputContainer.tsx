// Input container
import React, { useState } from "react";
import { TextField, IconButton, Grid, Select } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../store/search/actions";
import countries from "../../countries.json";

interface IinputState {
  country: string;
  city: string;
}

export default function InputContainer() {
  const dispatch = useDispatch();
  const initialState: IinputState = {
    country: "",
    city: "",
  };
  const [formdata, setFormdata] = useState(initialState);

  const handleTextChange = (event: any) => {
    const { name, value } = event.target;
    setFormdata((prevState: IinputState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(fetchWeather(formdata));
    dispatch({ type: "SEARCHING" });
  };

  return (
    <div id="inputsection">
      <form onSubmit={handleSubmit}>
        <Grid container lg={12}>
          <Grid item lg={2}>
            <Select
              id="country"
              fullWidth
              native
              variant="outlined"
              name="country"
              placeholder="Country"
              value={formdata.country}
              onChange={handleTextChange}
            >
              <option aria-label="None" value="" />
              {countries.map((item: any, index: any) => (
                <option value={item.country_code} key={index}>
                  {`${item.country_code}, ${item.country_name}`}
                </option>
              ))}
            </Select>
          </Grid>
          <Grid item lg={9}>
            <TextField
              fullWidth
              id="city"
              value={formdata.city}
              variant="outlined"
              name="city"
              onChange={handleTextChange}
              type="text"
              size="medium"
              placeholder="Please enter your location.."
            />
          </Grid>
          <Grid item lg={1}>
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
