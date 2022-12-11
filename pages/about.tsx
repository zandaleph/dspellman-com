import * as React from "react";
import type { NextPage } from "next";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Avatar from "@mui/material/Avatar";
import BuildIcon from "@mui/icons-material/Build";
import GitHubIcon from "@mui/icons-material/GitHub";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import WebIcon from "@mui/icons-material/Web";

interface AboutItemProps {
  href: string;
  icon: React.ReactNode;
  primary: string;
  secondary: string;
}

const AboutItem: React.FunctionComponent<AboutItemProps> = (props) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={props.href}>
        <ListItemAvatar>
          <Avatar>{props.icon}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.primary} secondary={props.secondary} />
      </ListItemButton>
    </ListItem>
  );
};

const About: NextPage = () => {
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        About
      </Typography>
      <List>
        <AboutItem
          href="https://github.com/zandaleph/dspellman-com/"
          icon={<GitHubIcon />}
          primary="GitHub"
          secondary="Source Code"
        />
        <AboutItem
          href="https://nextjs.org/"
          icon={<BuildIcon />}
          primary="Next.js"
          secondary="Server Framework"
        />
        <AboutItem
          href="https://mui.com/"
          icon={<WebIcon />}
          primary="MUI"
          secondary="UI Framework"
        />
        <AboutItem
          href="https://vercel.com/"
          icon={<ArrowDropUpIcon sx={{ fontSize: 40 }} />}
          primary="Vercel"
          secondary="Hosting Provider"
        />
      </List>
    </>
  );
};

export default About;
