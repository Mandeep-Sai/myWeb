import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navBar: {
    boxShadow: "none !important",
  },

  title: {
    flexGrow: 1,
  },
  navItems: {
    display: "flex",
    flexDirection: "row",
  },
  navItem: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "0px",
    paddingRight: "30px",
    paddingLeft: "30px",
    transition: theme.transitions.create(["width"], {
      duration: theme.transitions.duration.complex,
    }),

    "&:after": {
      content: '" "',
      display: "block",
      width: "0%",
      paddingTop: "1px",
      borderBottom: " 3px solid blue",
    },
    "&:hover&:after": {
      transition: "width 0.5s ",
      width: "100%",
    },
    "&:hover": {
      backgroundColor: "white",
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navBar} position="static" color="transparent">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Mandeep
          </Typography>
          <div className={classes.navItems}>
            <Button className={classes.navItem} color="inherit">
              Home
            </Button>
            <Button className={classes.navItem} color="inherit">
              About
            </Button>
            <Button className={classes.navItem} color="inherit">
              Resume
            </Button>
            <Button className={classes.navItem} color="inherit">
              Services
            </Button>
            <Button className={classes.navItem} color="inherit">
              Projects
            </Button>
            <Button className={classes.navItem} color="inherit">
              Contact
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}