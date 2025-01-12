"use client";
import React, { useState } from "react";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import axios from "axios";

interface JobFormValues {
  title: string;
  description: string;
  salary: string;
  type: string;
  location: string;
}

const AddJobForm: React.FC = () => {
  const [formValues, setFormValues] = useState<JobFormValues>({
    title: "",
    description: "",
    salary: "",
    type: "",
    location: "",
  });

  const [errors, setErrors] = useState<Partial<JobFormValues>>({});
  const [loading, setLoading] = useState(false);

  const filters = {
    locations: ["Brussels", "Madrid", "Remote"],
    types: ["Full-Time", "Part-Time", "Temporary"],
    salary: ["0-30k", "30-60k", "60k+"],
  }
  const validate = (): boolean => {
    const newErrors: Partial<JobFormValues> = {};
    if (!formValues.title.trim()) newErrors.title = "Job title is required";
    if (!formValues.description.trim())
      newErrors.description = "Job description is required";
    // if (!formValues.salary.trim() || isNaN(Number(formValues.salary)))
    //   newErrors.salary = "Minimum salary must be a valid number";
    if (!formValues.type.trim()) newErrors.type = "Job type is required";
    if (!formValues.location.trim())
      newErrors.location = "Location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        // Send the job details to the backend
        const response = await axios.post(
          "https://fakejobs-api.vercel.app/jobs",
          formValues
        );
        console.log("Job added successfully:", response.data);
        alert("Job added successfully!");
        // Reset form after successful submission
        setFormValues({
          title: "",
          description: "",
          salary: "",
          type: "",
          location: "",
        });
      } catch (error) {
        console.error("Error posting job:", error);
        alert("Failed to add job. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="container"
      sx={{
        mx: "auto",
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-start",
      }}
    >
      <Typography variant="h5">Post a job</Typography>

      <TextField
        label="Job Title"
        name="title"
        value={formValues.title}
        onChange={handleChange}
        error={!!errors.title}
        helperText={errors.title}
        fullWidth
        required
      />

      <TextField
        label="Job Description"
        name="description"
        value={formValues.description}
        onChange={handleChange}
        error={!!errors.description}
        helperText={errors.description}
        fullWidth
        multiline
        rows={4}
        required
      />


      <TextField
        select
        label="salary"
        name="salary"
        value={formValues.salary}
        onChange={handleChange}
        error={!!errors.salary}
        helperText={errors.salary}
        className="w-full lg:w-1/2"
        required
      >
        {filters.salary.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Job Type"
        name="type"
        value={formValues.type}
        onChange={handleChange}
        error={!!errors.type}
        helperText={errors.type}
        className="w-full lg:w-1/2"
        required
      >
        {filters.types.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="location"
        name="location"
        value={formValues.location}
        onChange={handleChange}
        error={!!errors.location}
        helperText={errors.location}
        className="w-full lg:w-1/2"
        required
      >
        {filters.locations.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </TextField>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
      >
        {loading ? "Posting..." : "Post Job "}
      </Button>
    </Box>
  );
};

export default AddJobForm;
