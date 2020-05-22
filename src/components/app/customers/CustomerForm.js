import React from 'react';
import { Grid, TextField, Paper, Typography, CssBaseline, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import SaveIcon from '@material-ui/icons/Save';
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from '@material-ui/pickers';

import 'date-fns';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  }
}));

export default function CustomerForm() {

  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid container item xs={12}>
            <Typography component="h1" variant="h4" align="left">New Customer</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid container item xs={12} md={2}>
            <TextField disabled id="id" label="Customer Id" fullWidth variant="outlined" />
          </Grid>
          <Grid container item xs={12} md={6}>
            <TextField required id="name" label="Name" fullWidth variant="outlined" />
          </Grid>
          <Grid container item xs={12} md={4}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                fullWidth
                margin="none"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                inputVariant="outlined"
                variant="inline"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
        <Box display="flex" flexDirection="row-reverse" width={1} m={1} p={1}>
          <Box >
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  )
}