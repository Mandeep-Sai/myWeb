import React, { useState, useEffect } from "react";
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
    background: "linear-gradient(to right, #ebefff 50%, #ffffff 50%)",
    position: "absolute",
    top: "0px",
    transform: "translateY(0%)",
    transition: "transform .5s",
  },
  showNavBar: {
    boxShadow: "none !important",
    background: "#ffffff",
    position: "fixed",
    top: "-30px",
    transform: "translateY(30px)",
    transition: "transform 0.7s",
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
    textTransform: "none",
    fontSize: "18px",
    fontWeight: "400",
    fontFamily: "inherit",
    transition: theme.transitions.create(["width"], {
      duration: theme.transitions.duration.complex,
    }),

    "&:after": {
      content: '" "',
      display: "block",
      width: "0%",
      paddingTop: "1px",
      borderBottom: " 3px solid rgb(62, 100, 255)",
    },
    "&:hover&:after": {
      transition: "width 0.4s ",
      width: "100%",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  navItemActive: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "0px",
    paddingRight: "30px",
    paddingLeft: "30px",
    textTransform: "none",
    fontSize: "18px",
    fontWeight: "400",
    fontFamily: "inherit",
    transition: theme.transitions.create(["width"], {
      duration: theme.transitions.duration.complex,
    }),

    "&:after": {
      content: '" "',
      display: "block",
      width: "100%",
      paddingTop: "1px",
      borderBottom: " 3px solid rgb(62, 100, 255)",
      transition: "width 0.4s ",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();

  const [navClass, setNavClass] = useState("navBar");
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setScrollPosition(currentScrollPos);
    if (currentScrollPos > 580) {
      setNavClass("showNavBar");
    } else {
      setNavClass("navBar");
    }
    console.log(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar
        className={navClass === "navBar" ? classes.navBar : classes.showNavBar}
        color="transparent"
      >
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Mandeep
          </Typography>
          <div className={classes.navItems}>
            <Button className={classes.navItem} color="inherit">
              Home
            </Button>
            <Button
              className={
                scrollPosition > 580 && scrollPosition < 1080
                  ? classes.navItemActive
                  : classes.navItem
              }
              color="inherit"
            >
              About
            </Button>
            <Button
              className={
                scrollPosition > 1660 && scrollPosition < 2222
                  ? classes.navItemActive
                  : classes.navItem
              }
              color="inherit"
            >
              Projects
            </Button>
            <Button
              className={
                scrollPosition > 2222 && scrollPosition < 2500
                  ? classes.navItemActive
                  : classes.navItem
              }
              color="inherit"
            >
              Education
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
