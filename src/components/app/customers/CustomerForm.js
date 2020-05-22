import React from "react";
import {
  Grid,
  TextField,
  Paper,
  Typography,
  CssBaseline,
  Button,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import SaveIcon from "@material-ui/icons/Save";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { useForm, Controller } from "react-hook-form";

import "date-fns";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
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
  },
}));

export default function CustomerForm() {
  const classes = useStyles();

  const { handleSubmit, control, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid container item xs={12}>
              <Typography component="h1" variant="h4" align="left">
                New Customer
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid container item xs={12} md={2}>
              <Controller
                as={
                  <TextField
                    disabled
                    id="id"
                    name="id"
                    label="Customer Id"
                    fullWidth
                    variant="outlined"
                  />
                }
                name="id"
                value=""
                control={control}
                defaultValue=""
              />
            </Grid>
            <Grid container item xs={12} md={6}>
              <Controller
                as={
                  <TextField
                    id="name"
                    name="name"
                    label="Name *"
                    fullWidth
                    variant="outlined"
                    error={errors.name && true}
                    helperText={errors.name ? 'Name is required' : ''}
                  />
                }
                name="name"
                value=""
                control={control}
                defaultValue=""
                rules={{ required: true }}
              />
            </Grid>
            <Grid container item xs={12} md={4}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Controller
                  as={
                    <DatePicker
                      fullWidth
                      margin="none"
                      id="date-picker-dialog"
                      name="birthDate"
                      label="Birth Date"
                      format="dd/MM/yyyy"
                      inputVariant="outlined"
                      variant="inline"
                    />
                  }
                  name="birthDate"
                  value="21/05/2020"
                  control={control}
                  defaultValue={new Date()}
                  rules={{ required: true }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Box display="flex" flexDirection="row-reverse" width={1} m={1} p={1}>
            <Box>
              <Button
                type="submit"
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
      </form>
    </>
  );
}
