import React, { useState } from "react";
import { TextField, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

interface IinputState {
  country: string;
  city: string;
}

export default function InputContainer() {
  const initialState: IinputState = {
    country: "",
    city: "",
  };
  const [formdata, setFormdata] = useState(initialState);
  console.log(formdata);

  const handleTextChange = (event: any) => {
    const { name, value } = event.target;
    setFormdata((prevState: IinputState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

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
        <IconButton>
          <SearchIcon />
        </IconButton>
      </form>
    </div>
  );
}
