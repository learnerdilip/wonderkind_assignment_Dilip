import React, { useState } from "react";
import { TextField, IconButton, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../store/search/actions";
import moment from "moment";

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
    const datesArr = tenDatesFromNow();
    for (let i = 0; i < 10; i++) {
      dispatch(fetchWeather(formdata, datesArr));
    }
  };

  // finding the next ten day dates
  function tenDatesFromNow() {
    let dateArr: any = [];
    for (let i = 0; i < 10; i++) {
      let current = new Date().getTime();
      let newStartDate = new Date(current + 3600 * 1000 * 24 * i).toString();
      let newEndDate = new Date(
        current + 3600 * 1000 * 24 * (i + 1)
      ).toString();
      dateArr = [
        ...dateArr,
        {
          start_date: moment(newStartDate).format().substring(0, 10),
          end_date: moment(newEndDate).format().substring(0, 10),
        },
      ];
    }
    return dateArr;
  }

  return (
    <div id="inputsection">
      <form onSubmit={handleSubmit}>
        <Grid container lg={12}>
          <Grid item lg={2}>
            <TextField
              id="country"
              fullWidth
              value={formdata.country}
              variant="outlined"
              name="country"
              onChange={handleTextChange}
              type="text"
              size="medium"
              // label="Country"
            />
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
              label="Please enter your location.."
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
