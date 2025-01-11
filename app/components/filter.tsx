"use client";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React from "react";

const FilterSection: React.FC = () => {
  const [alignment, setAlignment] = React.useState<string | null>("left");
  const [state, setState] = React.useState({
    fullTime: false,
    temporary: false,
    partTime: false,
  });
  const { fullTime, temporary, partTime } = state;
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <section className=" bg-white p-6 rounded-lg">
      <h1 className="text-xl mb-3">Filters</h1>
      <div className="flex flex-col gap-4">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Location</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="nearme"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="nearme"
              control={<Radio />}
              label="Near me"
            />
            <FormControlLabel
              value="remotejob"
              control={<Radio />}
              label="Remote job"
            />
            <FormControlLabel
              value="exactlocation"
              control={<Radio />}
              label="Exact location"
            />
            <FormControlLabel
              value="within15km"
              control={<Radio />}
              label="Within 15 km"
            />
            <FormControlLabel
              value="within30km"
              control={<Radio />}
              label="Within 30 km"
            />
            <FormControlLabel
              value="within50km"
              control={<Radio />}
              label="Within 50 km"
            />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">Salary</FormLabel>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="hourly" aria-label="left aligned">
              hourly
            </ToggleButton>
            <ToggleButton value="monthly" aria-label="centered">
              monthly
            </ToggleButton>
            <ToggleButton value="yearly" aria-label="right aligned">
              yearly
            </ToggleButton>
          </ToggleButtonGroup>
        </FormControl>
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">Type of employment</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={fullTime}
                  onChange={handleChangeCheck}
                  name="fullTime"
                />
              }
              label="full-time"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={temporary}
                  onChange={handleChangeCheck}
                  name="temporary"
                />
              }
              label="temporary"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={partTime}
                  onChange={handleChangeCheck}
                  name="partTime"
                />
              }
              label="part-time"
            />
          </FormGroup>
        </FormControl>
      </div>
    </section>
  );
};

export default FilterSection;
