import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  TextField,
  MenuItem,
  Button,
  Divider,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";
import { addMaterial } from "actions/materials";
import { useDispatch, useSelector } from "react-redux";
import { getMaterials } from "reducers/materials";

const useStyles = makeStyles(theme => ({
  paper: {
    width: "100%",
    padding: theme.spacing(4)
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  menu: {
    width: 200
  },
  cartMediaWrapper: {
    height: "200px",
    width: "100%",
    position: "relative"
  },
  card: {
    width: "300px"
  },
  cardMedia: {
    height: "100%",
    height: "100%",
    position: "absolute",
    width: "100%",
    zIndex: "3"
  }
}));
const Sellers = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const materialData = useSelector(getMaterials);

  return (
    <>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={6}>
              {materialData.map((material, index) => (
                <Grid key={index} item>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <div className={classes.cartMediaWrapper}>
                        <CardMedia
                          className={classes.cardMedia}
                          image={material.image}
                        ></CardMedia>
                      </div>
                      <CardContent>
                        <Typography
                          style={{ display: "inline-block" }}
                          variant="subtitle1"
                          bold
                        >
                          Material:&nbsp;&nbsp;
                        </Typography>
                        <Typography
                          style={{ display: "inline-block" }}
                          variant="body2"
                        >
                          {material.material}
                        </Typography>
                        <br></br>
                        <Typography
                          style={{ display: "inline-block" }}
                          variant="subtitle1"
                          bold
                        >
                          Type:&nbsp;&nbsp;
                        </Typography>
                        <Typography
                          style={{ display: "inline-block" }}
                          variant="body2"
                        >
                          {material.moreSpecific}, {material.evenMoreSpecific}
                        </Typography>{" "}
                        <br></br>
                        <Typography
                          style={{ display: "inline-block" }}
                          variant="amount"
                          bold
                        >
                          Material:&nbsp;&nbsp;
                        </Typography>
                        <Typography
                          style={{ display: "inline-block" }}
                          variant="body2"
                        >
                          {material.amount} {material.units}
                        </Typography>{" "}
                        <br></br>
                        <Typography
                          style={{ display: "inline-block" }}
                          variant="subtitle1"
                          bold
                        >
                          Location:&nbsp;&nbsp;
                        </Typography>
                        <Typography
                          style={{ display: "inline-block" }}
                          variant="body2"
                        >
                          {material.location}
                        </Typography>{" "}
                        <br></br>
                        <Typography
                          style={{ display: "inline-block" }}
                          variant="subtitle1"
                          bold
                        >
                          Quality:&nbsp;&nbsp;
                        </Typography>
                        <Typography
                          style={{ display: "inline-block" }}
                          variant="body2"
                        >
                          {material.quality}
                        </Typography>{" "}
                        <br></br>
                        <Typography
                          style={{ display: "inline-block" }}
                          variant="subtitle1"
                          bold
                        >
                          Processing:&nbsp;&nbsp;
                        </Typography>
                        <Typography
                          style={{ display: "inline-block" }}
                          variant="body2"
                        >
                          {material.processing}
                        </Typography>{" "}
                        <br></br>
                        <Typography
                          style={{ display: "inline-block" }}
                          variant="subtitle1"
                          bold
                        >
                          Price:&nbsp;&nbsp;
                        </Typography>
                        <Typography
                          style={{ display: "inline-block" }}
                          variant="body2"
                        >
                          {material.price}
                        </Typography>{" "}
                        <br></br>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
export default Sellers;
