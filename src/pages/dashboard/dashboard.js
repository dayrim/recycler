import React from "react";
import { TabBar } from "components";
import { useSelector } from "react-redux";
import { getTabPage } from "reducers/UI";
import { DashboardLayout } from "components";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Divider } from "@material-ui/core";
import { Sellers, Buyers } from "./components";

const useStyles = makeStyles(theme => {
  return {
    content: {
      //   height: "100%",
      //   width: "100%",
      //   position: "absolute",
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   zIndex: "1"
    },

    sectionComponent: {
      minHeight: "65vh",
      flexDirection: "column",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    overlay: {
      width: "100%",
      height: "100%",
      backgroundColor: theme.palette.secondary.main,
      opacity: ".25"
    }
  };
});

const Dashboard = () => {
  const tabPage = useSelector(getTabPage);
  const classes = useStyles();
  return (
    <>
      <TabBar></TabBar>
      <Box className={classes.content}>
        <Container className={classes.content}>
          <Divider />
          <Divider />
          <Divider />
          {tabPage === "/forbuyer" ? <Buyers /> : <Sellers />}
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
