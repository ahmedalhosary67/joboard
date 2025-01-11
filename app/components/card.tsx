import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LogoDevIcon from "@mui/icons-material/LogoDev";

interface JobCardProps {
  job: any;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  // function calculateDateDifference(createdAt: string): {
  //   result: string;
  // } {
  //   // Parse the input date
  //   const createdDate = new Date(createdAt);
  //   const now = new Date();

  //   // Ensure the date is valid
  //   if (isNaN(createdDate.getTime())) {
  //     throw new Error("Invalid createdAt date format");
  //   }

  //   // Calculate the difference in milliseconds
  //   const differenceInMs = now.getTime() - createdDate.getTime();

  //   // Convert to various units
  //   const seconds = Math.floor(differenceInMs / 1000); // Total seconds
  //   const minutes = Math.floor(seconds / 60); // Total minutes
  //   const hours = Math.floor(minutes / 60); // Total hours
  //   const days = Math.floor(hours / 24); // Total days
  //   const years = Math.floor(days / 365); // Total days

  //   const result = years
  //     ? `${years} years`
  //     : days
  //     ? `${days} days`
  //     : hours
  //     ? `${hours} hours`
  //     : minutes
  //     ? `${minutes} minutes`
  //     : `${seconds} seconds`;
  //   // const result = `${years} years, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

  //   return { result };
  // }
  return (
    <Card sx={{ display: "flex" }} className="p-4">
      <LogoDevIcon sx={{ fontSize: 60 }} />
      <CardContent className="gap-4 flex flex-col">
        {/* <Typography component="div">{job.company}</Typography> */}
        <Typography component="div" variant="h5">
          {job.title}
        </Typography>
        <div className="flex justify-between align-middle gap-4">
          <Typography
            variant="subtitle1"
            component="div"
            className="flex items-center gap-1"
            sx={{ color: "text.secondary" }}
          >
            <LocationOnIcon />
            {job.location}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            className="flex items-center gap-1"
            sx={{ color: "text.secondary" }}
          >
            <AccessTimeIcon />
            {job.type}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            className="flex items-center gap-1"
            sx={{ color: "text.secondary" }}
          >
            <AttachMoneyIcon />
            {job.salary}
          </Typography> 
          {/* <Typography
            variant="subtitle1"
            component="div"
            className="flex items-center gap-1"
            sx={{ color: "text.secondary" }}
          >
            <CalendarTodayIcon />
            {calculateDateDifference(job.created_at).result}
          </Typography> */}
        </div>
        <Typography
          variant="subtitle1"
          component="div"
          className="flex items-center gap-1"
          sx={{ color: "text.secondary" }}
        >
          {job.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default JobCard;
