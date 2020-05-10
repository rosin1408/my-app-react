import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useForm, Controller } from 'react-hook-form';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";

const axios = require('axios').default;

function Copyright() {
    return (
    <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
            Roberto Rosin
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
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
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    error={errors.usernamrOrEmail && true}
                    helperText={errors.usernamrOrEmail ? 'Username or e-mail is required' : ''}
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
                    id="password"
                    autoComplete="current-password"
                    error={errors.password && true}
                    helperText={errors.password ? 'Password is required' : ''}
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
            className={classes.submit}>
            Sign In
        </Button>
    );
};

export default function Login() {
    const { control, handleSubmit, errors } = useForm();
    const classes = useStyles();
    let history = useHistory();

    const onSubmit = (data, e) => {
        const loginData = {usernameOrEmail: data.usernamrOrEmail, password: data.password};
        axios.post('http://localhost:8080/api/auth/signin', loginData).then(a => history.pus('/'));
    }

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
                <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>

                    <UsernameOrEmail control={control} errors={errors}/>

                    <Password control={control} errors={errors}/>

                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
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
        </Container>
    );
}
