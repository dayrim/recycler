import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { getMenuToggled } from "reducers/UI";
import { useSelector, useDispatch } from "react-redux";
import { toggleTopmenu } from "actions/UI";
import routes from "../../routes";
import { genericHashLink } from "react-router-hash-link";
import { configureAnchors } from "react-update-url-on-scroll";
import lodashThrottle from "lodash/throttle";
import Link from "@material-ui/core/Link";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const HashLink = props => genericHashLink(props, Link);

const useStyles = makeStyles(theme => ({
  flexContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  logo: {
    width: "150px"
  },
  menuBar: {
    height: "225px",
    transition: "all 0.5s cubic-bezier(0.8, 0.05, 0.4, 1)"
  },
  collapsed: {
    top: "-160px"
  },
  toolbarItem: {
    margin: "0 15px"
  }
}));

function Topmenu() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const topmenuToggled = useSelector(getMenuToggled);
  const mobile = useMediaQuery("(max-width:740px)");
  if (mobile) {
    dispatch(toggleTopmenu(false));
  }
  let [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    window.addEventListener(
      "scroll",
      lodashThrottle(
        () => {
          if (document.documentElement.scrollTop > 25) {
            dispatch(toggleTopmenu(false));
          } else if (!mobile) {
            dispatch(toggleTopmenu(true));
          }
        },
        300,
        { leading: true, trailing: true }
      )
    );

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [mobile, topmenuToggled]);

  configureAnchors({
    offset: 65,
    onSectionEnter(newState, oldState) {
      setActiveLink(newState.hash);
    }
  });
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        color="secondary"
        className={[
          classes.menuBar,
          topmenuToggled ? null : classes.collapsed
        ].join(" ")}
      >
        <Container className={classes.flexContainer}>
          <img
            src="/assets/logo_weird.png"
            className={classes.logo}
            alt="recyclist logo"
          />
          <Typography variant="h6" align="center" color="inherit">
            Platform for excess materials
          </Typography>
          <Toolbar>
            {routes.map((route, key) => {
              if (route.hashroutes) {
                return route.hashroutes.map((hash, key) => (
                  <HashLink
                    key={key}
                    className={classes.toolbarItem}
                    variant="subtitle2"
                    align="center"
                    color={activeLink === hash ? "textSecondary" : "inherit"}
                    to={`#${hash}`}
                    scroll={el => {
                      const topOfElement = el.offsetTop - 65;
                      window.scroll({ top: topOfElement, behavior: "smooth" });
                    }}
                  >
                    {route.hashroutenames[key]}
                  </HashLink>
                ));
              }
            })}
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}

export default Topmenu;
