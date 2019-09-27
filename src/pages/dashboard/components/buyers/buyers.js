import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
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
import { addMaterial } from "actions/materials";
import Slider from "@material-ui/core/Slider";
import { useDispatch, useSelector } from "react-redux";
import { getMaterials } from "reducers/materials";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import {
  materials,
  moreSpecific,
  evenMoreSpecific,
  units,
  processing,
  type,
  texture,
  condition,
  color
} from "data/defaults.js";
import { WoodCard, TextileCard } from "../";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";
const IOSSlider = withStyles({
  root: {
    color: "#3880ff",
    height: 2,
    padding: "15px 0"
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    "&:focus,&:hover,&$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow
      }
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 11px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000"
    }
  },
  track: {
    height: 2
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: "#bfbfbf"
  },
  mark: {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    marginTop: -3
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor"
  }
})(Slider);

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
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    position: "fixed"
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar
}));
const drawerWidth = 240;
const Sellers = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const materialData = useSelector(getMaterials);
  const [values, setValues] = React.useState({});
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleSave = event => {
    dispatch(addMaterial(values));
  };
  const handleCardClick = () => {
    console.log("click");
  };
  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        {/* <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        <Divider />
        <List>
          <ListItem>
            <TextField
              select
              label="Material"
              className={classes.textField}
              value={values.material}
              onChange={handleChange("material")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              margin="normal"
            >
              {materials.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </ListItem>
          <ListItem>
            <TextField
              select
              label="Type"
              className={classes.textField}
              value={values.type}
              onChange={handleChange("type")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              margin="normal"
            >
              {type.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </ListItem>
          <ListItem>
            <TextField
              select
              label="Texture"
              className={classes.textField}
              value={values.texture}
              onChange={handleChange("texture")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              margin="normal"
            >
              {texture.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </ListItem>
          <ListItem>
            <TextField
              select
              label="Condition"
              className={classes.textField}
              value={values.condition}
              onChange={handleChange("condition")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              margin="normal"
            >
              {condition.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </ListItem>
          <ListItem>
            <TextField
              select
              label="Color"
              className={classes.textField}
              value={values.color}
              onChange={handleChange("color")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              margin="normal"
            >
              {color.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </ListItem>
          <ListItem>
            <TextField
              label="Location"
              className={classes.textField}
              value={values.location}
              onChange={handleChange("location")}
              margin="normal"
            />
          </ListItem>

          <ListItem style={{ marginTop: "10px", marginBottom: "10px" }}>
            <span
              style={{
                top: "-20px",
                position: "absolute",
                opacity: ".6",
                left: "22px",
                top: "-5px",
                fontSize: "12px"
              }}
            >
              Price
            </span>
            <IOSSlider
              style={{
                marginLeft: "8px",
                marginRight: "8px",
                marginTop: "16px",
                marginBottom: "8px"
              }}
              defaultValue={60}
              valueLabelDisplay="on"
            />
          </ListItem>
          <ListItem style={{ marginTop: "10px", marginBottom: "10px" }}>
            <span
              style={{
                top: "-20px",
                position: "absolute",
                opacity: ".6",
                left: "22px",
                top: "-5px",
                fontSize: "12px"
              }}
            >
              Quantity
            </span>
            <IOSSlider
              style={{
                marginLeft: "8px",
                marginRight: "8px",
                marginTop: "16px",
                marginBottom: "8px"
              }}
              defaultValue={40}
              valueLabelDisplay="on"
            />
          </ListItem>
        </List>
      </Drawer>
      <div className={classes.container}>
        <div className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={6}>
                {materialData.map((material, index) => (
                  <Grid key={index} item>
                    {material.material === "Wood" ? (
                      <Link
                        underline="none"
                        component={RouterLink}
                        to="/material-page"
                      >
                        <WoodCard material={material}></WoodCard>
                      </Link>
                    ) : (
                      <Link
                        underline="none"
                        component={RouterLink}
                        to="/material-page"
                      >
                        <TextileCard material={material} />
                      </Link>
                    )}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};
export default Sellers;
