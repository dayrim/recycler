import React from "react";
import { TabBar } from "components";
import { useSelector } from "react-redux";
import { getTabPage } from "reducers/UI";
import { DashboardLayout } from "components";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  Divider,
  Paper,
  Grid,
  Typography,
  TextField,
  Button
} from "@material-ui/core";

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
    paper: {
      width: "100%"
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
    },
    paper: {}
  };
});

const MaterialPage = () => {
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
          <Paper className={classes.paper}>
            <Grid container spacing={6} style={{ padding: "40px" }}>
              <Grid item xs={8}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={
                      "https://res.cloudinary.com/derbiet/image/upload/v1569518092/black-leather-reusable_kxcpiy.jpg"
                    }
                    style={{ width: "100%", height: "100%" }}
                  ></img>
                </div>
              </Grid>
              <Grid
                item
                xs={4}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column"
                }}
              >
                <div>
                  <Typography style={{ display: "inline-block" }} variant="h5">
                    Material:&nbsp;&nbsp;&nbsp;&nbsp;
                  </Typography>
                  <Typography
                    style={{ display: "inline-block" }}
                    variant="body2"
                  >
                    Textile
                  </Typography>
                  <br></br>
                </div>
                <div>
                  <Typography style={{ display: "inline-block" }} variant="h5">
                    Type:&nbsp;&nbsp;&nbsp;&nbsp;
                  </Typography>
                  <Typography
                    style={{ display: "inline-block" }}
                    variant="body2"
                  >
                    Leather
                  </Typography>
                  <br></br>
                </div>
                <div>
                  <Typography style={{ display: "inline-block" }} variant="h5">
                    Texture:&nbsp;&nbsp;&nbsp;&nbsp;
                  </Typography>
                  <Typography
                    style={{ display: "inline-block" }}
                    variant="body2"
                  >
                    Smooth
                  </Typography>
                  <br></br>{" "}
                </div>
                <div>
                  <Typography style={{ display: "inline-block" }} variant="h5">
                    Quality:&nbsp;&nbsp;&nbsp;&nbsp;
                  </Typography>
                  <Typography
                    style={{ display: "inline-block" }}
                    variant="body2"
                  >
                    Good
                  </Typography>
                  <br></br>{" "}
                </div>
                <div>
                  <Typography style={{ display: "inline-block" }} variant="h5">
                    Color:&nbsp;&nbsp;&nbsp;&nbsp;
                  </Typography>
                  <Typography
                    style={{ display: "inline-block" }}
                    variant="body2"
                  >
                    Blue
                  </Typography>
                  <br></br>{" "}
                </div>
                <div>
                  <Typography style={{ display: "inline-block" }} variant="h5">
                    Size:&nbsp;&nbsp;&nbsp;&nbsp;
                  </Typography>
                  <Typography
                    style={{ display: "inline-block" }}
                    variant="body2"
                  >
                    3.5
                  </Typography>
                  <br></br>{" "}
                </div>
                <div>
                  <Typography style={{ display: "inline-block" }} variant="h5">
                    Units:&nbsp;&nbsp;&nbsp;&nbsp;
                  </Typography>
                  <Typography
                    style={{ display: "inline-block" }}
                    variant="body2"
                  >
                    Yards
                  </Typography>
                  <br></br>{" "}
                </div>
                <div>
                  <Typography style={{ display: "inline-block" }} variant="h5">
                    Quantity:&nbsp;&nbsp;&nbsp;&nbsp;
                  </Typography>
                  <Typography
                    style={{ display: "inline-block" }}
                    variant="body2"
                  >
                    30
                  </Typography>
                  <br></br>{" "}
                </div>
                <div>
                  <Typography style={{ display: "inline-block" }} variant="h5">
                    Location:&nbsp;&nbsp;&nbsp;&nbsp;
                  </Typography>
                  <Typography
                    style={{ display: "inline-block" }}
                    variant="body2"
                  >
                    Tartu
                  </Typography>
                  <br></br>{" "}
                </div>
                <div>
                  <Typography style={{ display: "inline-block" }} variant="h5">
                    Price:&nbsp;&nbsp;&nbsp;&nbsp;
                  </Typography>
                  <Typography
                    style={{ display: "inline-block" }}
                    variant="body2"
                  >
                    10
                  </Typography>
                  <br></br>{" "}
                </div>
              </Grid>
              <Grid item xs={12}>
                <Typography style={{ display: "inline-block" }} variant="h5">
                  New message:
                </Typography>
                <TextField
                  style={{ margin: 8 }}
                  placeholder="Message ..."
                  fullWidth
                  margin="normal"
                  multiline
                  value={`
                  Hi !

                  I would like to buy your material to use it to make bags.
                  Please send me the transaction details and timeframe for picking it up.
                  
                  Thank you '
                  `}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>

              <Grid xs={12} container justify="flex-end" spacing={2}>
                <Grid item>
                  <Button variant="contained" color="primary" size="large">
                    Reply
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default MaterialPage;
