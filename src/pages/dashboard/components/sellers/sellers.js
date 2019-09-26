import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  TextField,
  MenuItem,
  Button,
  Divider
} from "@material-ui/core";
import { Dropzone } from "../";
import { addMaterial } from "actions/materials";
import { useDispatch } from "react-redux";
import {
  materials,
  moreSpecific,
  evenMoreSpecific,
  units,
  processing
} from "data/defaults.js";

const useStyles = makeStyles(theme => ({
  paper: {
    width: "100%"
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  menu: {
    width: 200
  }
}));
const Sellers = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    material: "Wood",
    moreSpecific: "Plywood",
    evenMoreSpecific: "Birch",
    amount: 100,
    location: "Viljandimaa",
    quality: "70%",
    processing: "Finished",
    price: 100,
    units: "KG",
    image: null,
    notes: ""
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleSave = event => {
    dispatch(addMaterial(values));
  };

  return (
    <>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={6} container>
            <Grid item xs={12}>
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
              <TextField
                select
                label="More specifc"
                className={classes.textField}
                value={values.moreSpecific}
                onChange={handleChange("moreSpecific")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                margin="normal"
              >
                {moreSpecific.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="Even more specifc"
                className={classes.textField}
                value={values.evenMoreSpecific}
                onChange={handleChange("evenMoreSpecific")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                margin="normal"
              >
                {evenMoreSpecific.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="standard-number"
                label="Amount"
                value={values.amount}
                onChange={handleChange("amount")}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
              />
              <TextField
                select
                label="Units"
                className={classes.textField}
                value={values.units}
                onChange={handleChange("units")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                margin="normal"
              >
                {units.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Location"
                className={classes.textField}
                value={values.location}
                onChange={handleChange("location")}
                margin="normal"
              />
              <TextField
                label="Quality"
                className={classes.textField}
                value={values.quality}
                onChange={handleChange("quality")}
                margin="normal"
              />
              <TextField
                select
                label="Processing"
                className={classes.textField}
                value={values.processing}
                onChange={handleChange("processing")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                margin="normal"
              >
                {processing.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="standard-number"
                label="Price"
                value={values.price}
                onChange={handleChange("price")}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="Notes about material"
                style={{ margin: 8 }}
                placeholder="Add any additional information ..."
                value={values.notes}
                onChange={handleChange("notes")}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Dropzone
              image={values.image}
              setImage={image => setValues({ ...values, image })}
            ></Dropzone>
          </Grid>
        </Grid>
      </Paper>
      <Divider />
      <Divider />
      <Divider />

      <Grid container justify="flex-end" spacing={2}>
        <Grid item>
          <Button variant="contained" color="primary" size="large">
            Import CSV
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSave}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default Sellers;
