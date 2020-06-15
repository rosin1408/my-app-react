import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Backdrop,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Slide,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { useForm, Controller } from "react-hook-form";

import { useHistory, useLocation } from "react-router-dom";

import Copyright from "../copyright/Copyright";

import { login } from "../../services/auth";

const axios = require("axios").default;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const UsernameOrEmail = ({ control, errors }) => {
  return (
    <Controller
      as={
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="usernamrOrEmail"
          label="Email Address"
          name="usernamrOrEmail"
          autoComplete="email"
          inputProps={{ "data-testid": "usernamrOrEmail" }}
          autoFocus
          error={errors.usernamrOrEmail && true}
          helperText={
            errors.usernamrOrEmail ? "Username or e-mail is required" : ""
          }
        />
      }
      name="usernamrOrEmail"
      control={control}
      defaultValue=""
      rules={{ required: true }}
    />
  );
};

const Password = ({ control, errors }) => {
  return (
    <Controller
      as={
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          inputProps={{ "data-testid": "password" }}
          autoComplete="current-password"
          error={errors.password && true}
          helperText={errors.password ? "Password is required" : ""}
        />
      }
      name="password"
      control={control}
      defaultValue=""
      rules={{ required: true }}
    />
  );
};

const ButtonSubmit = ({ classes }) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
      id="loginButton"
      data-testid="loginButton"
    >
      Sign In
    </Button>
  );
};

export default function Login() {
  const { control, handleSubmit, errors } = useForm();
  const [open, setOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const classes = useStyles();

  let history = useHistory();
  let location = useLocation();

  const onSubmit = (data, e) => {
    handleOpen();
    const loginData = {
      usernameOrEmail: data.usernamrOrEmail,
      password: data.password,
    };
    
    axios
      .post("http://localhost:8080/api/auth/signin", loginData)
      .then((a) => {
        login(a.data);
        let { from } = location.state || { from: { pathname: "/dashboard" } };
        history.replace(from);
        setOpen(false);
      })
      .catch((e) => {
        setOpen(false);
        handleOpenDialog();
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <UsernameOrEmail control={control} errors={errors} />

          <Password control={control} errors={errors} />

          <ButtonSubmit classes={classes} />

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>

      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Dialog
        open={dialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Bad credentials"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Username or password is invalid!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
