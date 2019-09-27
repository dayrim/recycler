import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { push } from "connected-react-router";
import { setTabPage } from "actions/UI";
import { getTabPage } from "reducers/UI";
import { UserMenu } from "components";

const useStyles = makeStyles(theme => ({
  tabRoot: {
    textTransform: "capitalize",
    fontSize: "15px"
  },
  userMenu: {
    position: "absolute",
    top: "0",
    right: "0"
  },
  appBar: {
    minHeight: "88px"
  },
  logo: {
    position: "absolute",
    width: "100px",
    zIndex: "999"
  },
  tabs: {
    height: "88px",
    "& .MuiTabs-flexContainer": {
      height: "100%",
      justifyContent: "flex-end"
    },
    "& .MuiTab-wrapper": {
      fontSize: "18px"
    }
  }
}));
// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`scrollable-auto-tabpanel-${index}`}
//       aria-labelledby={`scrollable-auto-tab-${index}`}
//       {...other}
//     >
//       <Box p={3}>{children}</Box>
//     </Typography>
//   );
// }

const TabBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentRoute = useSelector(getTabPage);
  const handleClick = path => {
    dispatch(setTabPage(path));
  };
  const handleLogoClick = () => {
    dispatch(push("/"));
    console.log("cdcsd");
  };
  return (
    <>
      <AppBar
        classes={{ root: classes.appBar }}
        position="sticky"
        color="secondary"
      >
        <img
          src="/assets/logo_weird.png"
          className={classes.logo}
          alt="recyclist logo"
          onClick={() => handleLogoClick()}
        />
        <Tabs
          value={currentRoute}
          indicatorColor="primary"
          centered
          variant="standard"
          className={classes.tabs}
          aria-label="scrollable auto tabs example"
        >
          <Tab
            onClick={() => handleClick("/forbuyer")}
            label={"For buyer"}
            value={"/forbuyer"}
            classes={{
              root: classes.tabRoot
            }}
          />
          <Tab
            onClick={() => handleClick("/forseller")}
            label={"For seller"}
            value={"/forseller"}
            classes={{
              root: classes.tabRoot
            }}
          />
        </Tabs>
        {/* <UserMenu></UserMenu> */}
      </AppBar>
    </>
  );
};

export default TabBar;
