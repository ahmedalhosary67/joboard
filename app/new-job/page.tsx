"use client";
import React, { useState } from "react";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import axios from "axios";

interface JobFormValues {
  title: string;
  description: string;
  minSalary: string;
  jobType: string;
  location: string;
}

const AddJobForm: React.FC = () => {
  const [formValues, setFormValues] = useState<JobFormValues>({
    title: "",
    description: "",
    minSalary: "",
    jobType: "",
    location: "",
  });

  const [errors, setErrors] = useState<Partial<JobFormValues>>({});
  const [loading, setLoading] = useState(false);

  const jobTypes = [
    { name: "fullTime", label: "Full-Time" },
    { name: "temporary", label: "Temporary" },
    { name: "partTime", label: "Part-Time" },
  ];

  const validate = (): boolean => {
    const newErrors: Partial<JobFormValues> = {};
    if (!formValues.title.trim()) newErrors.title = "Job title is required";
    if (!formValues.description.trim())
      newErrors.description = "Job description is required";
    if (!formValues.minSalary.trim() || isNaN(Number(formValues.minSalary)))
      newErrors.minSalary = "Minimum salary must be a valid number";
    if (!formValues.jobType.trim()) newErrors.jobType = "Job type is required";
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
        const response = await axios.post("https://fakejobs-api.vercel.app/jobs", formValues);
        console.log("Job added successfully:", response.data);
        alert("Job added successfully!");
        // Reset form after successful submission
        setFormValues({
          title: "",
          description: "",
          minSalary: "",
          jobType: "",
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
        alignItems:"flex-start"
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
        label="Minimum Salary"
        name="minSalary"
        type="number"
        value={formValues.minSalary}
        onChange={handleChange}
        error={!!errors.minSalary}
        helperText={errors.minSalary}
        className="w-full lg:w-1/2"
        required
      />

      <TextField
        select
        label="Job Type"
        name="jobType"
        value={formValues.jobType}
        onChange={handleChange}
        error={!!errors.jobType}
        helperText={errors.jobType}
        className="w-full lg:w-1/2"
        required
      >
        {jobTypes.map((type) => (
          <MenuItem key={type.name} value={type.name}>
            {type.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Location"
        name="location"
        value={formValues.location}
        onChange={handleChange}
        error={!!errors.location}
        helperText={errors.location}
        className="w-full lg:w-1/2"
        required
      />

      <Button type="submit" variant="contained" color="primary"  disabled={loading}>
        {loading ? "Posting..." : "Post Job "}
      </Button>
    </Box>
  );
};

export default AddJobForm;
