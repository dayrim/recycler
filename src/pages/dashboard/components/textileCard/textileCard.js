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
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import React from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    width: "100%",
    padding: theme.spacing(4)
  },
  container: {},
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
const TextileCard = ({ material }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <div className={classes.cartMediaWrapper}>
          <CardMedia
            image={material.image}
            className={classes.cardMedia}
          ></CardMedia>
        </div>
        <CardContent>
          <Typography style={{ display: "inline-block" }} variant="subtitle1">
            Material:&nbsp;&nbsp;
          </Typography>
          <Typography style={{ display: "inline-block" }} variant="body2">
            {material.material}
          </Typography>
          <br></br>
          <Typography style={{ display: "inline-block" }} variant="subtitle1">
            Type:&nbsp;&nbsp;
          </Typography>
          <Typography style={{ display: "inline-block" }} variant="body2">
            {material.type}
          </Typography>
          <br></br>
          <Typography style={{ display: "inline-block" }} variant="subtitle1">
            Texture:&nbsp;&nbsp;
          </Typography>
          <Typography style={{ display: "inline-block" }} variant="body2">
            {material.texture}
          </Typography>
          <br></br>
          <Typography style={{ display: "inline-block" }} variant="subtitle1">
            Color:&nbsp;&nbsp;
          </Typography>
          <Typography style={{ display: "inline-block" }} variant="body2">
            {material.color}
          </Typography>
          <br></br>

          <Typography style={{ display: "inline-block" }} variant="subtitle1">
            Quantity:&nbsp;&nbsp;
          </Typography>
          <Typography style={{ display: "inline-block" }} variant="body2">
            {material.quantity}
          </Typography>
          <br></br>
          <Typography style={{ display: "inline-block" }} variant="subtitle1">
            Units:&nbsp;&nbsp;
          </Typography>
          <Typography style={{ display: "inline-block" }} variant="body2">
            {material.unit}
          </Typography>
          <br></br>
          <Typography style={{ display: "inline-block" }} variant="subtitle1">
            Price:&nbsp;&nbsp;
          </Typography>
          <Typography style={{ display: "inline-block" }} variant="body2">
            {material.price}
          </Typography>
          <br></br>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TextileCard;
