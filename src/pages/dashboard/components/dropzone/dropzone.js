import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    padding: theme.spacing(2)
  },
  image: {
    width: "100%",
    objectFit: "cover",
    height: "100%"
  },
  bordered: {
    border: "2px dashed",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderColro: theme.palette.secondary.main
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        }
}));

const Dropzone = ({ image = null, setImage, className = {} }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  console.log(image, "image");
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    acceptedFiles.forEach(file => {
      const { lastModified, lastModifiedDate, name, path, size, type } = file;
      const reader = new FileReader();
      reader.onload = event => {
        // dispatch(
        //   addFileToInvoice({
        //     invoiceID,
        //     file: event.target.result,
        //     fileName: name
        //   })
        // );
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Toolbar
      {...getRootProps()}
      className={clsx(classes.root,className, {
        [classes.highlight]: true
      })}
    >
      {image ? (
        <img className={classes.image} src={image} />
      ) : (
        <div className={classes.bordered}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <Typography align="center" variant="h5" gutterBottom>
              Drop the picture here ...{" "}
            </Typography>
          ) : (
            <Typography align="center" variant="h5" gutterBottom>
              Drag your picture here or click to browse{" "}
            </Typography>
          )}
        </div>
      )}
    </Toolbar>
  );
};
export default Dropzone;
