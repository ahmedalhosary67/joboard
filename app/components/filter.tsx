"use client";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { clearFilter, handleFilter, selectJobs } from "../store/jobsSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";

const filters = {
  locations: ["Brussels", "Madrid", "Remote"],
  types: ["Full-Time", "Part-Time", "Temporary"],
  salary_ranges: ["0-30k", "30-60k", "60k+"],
};

const FilterSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectJobs);
  const [state, setState] = React.useState<string[]>([]);

  const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    state.find((item) => item === event.target.name)
      ? (setState(state.filter((item) => item !== event.target.name)),
        dispatch(
          handleFilter({
            type: state.filter((item) => item !== event.target.name),
          })
        ))
      : (setState([...state, event.target.name]),
        dispatch(handleFilter({ type: [...state, event.target.name] })));
  };
  return (
    <section className=" bg-white p-6 rounded-lg">
      <h1 className="text-xl mb-3">Filters</h1>
      <div className="flex flex-col gap-4">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Location</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            {filters.locations.map((location) => (
              <FormControlLabel
                key={location}
                value={location}
                control={
                  <Radio
                    name={location}
                    onChange={() => dispatch(handleFilter({ location }))}
                  />
                }
                label={location}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">Salary</FormLabel>
          <div className="flex flex-wrap gap-2">
            {filters.salary_ranges.map((salary_range) => (
              <div
                key={salary_range}
                className={`p-2 rounded-md cursor-pointer ${
                  salary_range == filter?.salary_range
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 "
                }`}
                onClick={() => dispatch(handleFilter({ salary_range }))}
              >
                {salary_range}
              </div>
            ))}
          </div>
        </FormControl>
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">Type of employment</FormLabel>
          <FormGroup>
            {filters.types.map((type) => (
              <FormControlLabel
                key={type}
                control={
                  <Checkbox
                    checked={
                      filter?.type?.find((item) => item === type) ? true : false
                    }
                    onChange={handleChangeCheck}
                    name={type}
                  />
                }
                label={type}
              />
            ))}
          </FormGroup>
        </FormControl>
        <Button onClick={() => dispatch(clearFilter())}>Clear filter</Button>
      </div>
    </section>
  );
};

export default FilterSection;
