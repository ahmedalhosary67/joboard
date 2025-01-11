import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Input,
  Typography,
} from "@mui/material";
import React from "react";

const ContactSection: React.FC = () => {
  function onChange(e: any) {
    console.log(e.target.files);
  }
  return (
    <section className="flex flex-col gap-4">
      <Card className="p-6">
        <CardContent>
          <Typography gutterBottom>Email me for jobs</Typography>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            eos tempora nemo dolor, illo et, consequatur deserunt
          </Typography>
        </CardContent>
        <CardActions>
          <FormControl className="flex-grow ">
            <Input placeholder="name@mail.com" />
            <Button type="submit" variant="contained" size="small">
              subscribe
            </Button>
          </FormControl>
        </CardActions>
      </Card>
      <Card className="p-6">
        <CardContent>
          <Typography gutterBottom>Get noticed faster</Typography>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            eos tempora nemo dolor, illo et, consequatur deserunt
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className="flex-grow"
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
          >
            Upload files
            <input
              type="file"
              // multiple
              style={{
                clip: "rect(0 0 0 0)",
                clipPath: "inset(50%)",
                height: 1,
                overflow: "hidden",
                position: "absolute",
                bottom: 0,
                left: 0,
                whiteSpace: "nowrap",
                width: 1,
              }}
            />
          </Button>
        </CardActions>
      </Card>
    </section>
  );
};

export default ContactSection;
