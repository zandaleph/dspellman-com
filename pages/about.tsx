import * as React from "react";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";

const About: NextPage = () => {
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        About dspellman.com
      </Typography>
      <Typography variant="body1">This is a website.</Typography>
    </>
  );
};

export default About;
