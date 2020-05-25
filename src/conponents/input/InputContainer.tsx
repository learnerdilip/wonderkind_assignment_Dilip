import React, { useState } from "react";
import { TextField, IconButton } from "@material-ui/core";
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
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          value={formdata.country}
          variant="outlined"
          name="country"
          onChange={handleTextChange}
          type="text"
          size="medium"
          label="Country"
        />
        <TextField
          value={formdata.city}
          variant="outlined"
          name="city"
          onChange={handleTextChange}
          type="text"
          size="medium"
          label="City"
        />
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
      </form>
    </div>
  );
}
