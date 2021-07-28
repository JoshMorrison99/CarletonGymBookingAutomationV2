import {
  Grid,
  TextField,
  Typography,
  Button,
  Box,
  CssBaseline,
  Stepper,
  Step,
  StepLabel,
  makeStyles,
  createStyles,
  Menu,
  MenuItem,
  createTheme,
  ThemeProvider,
} from '@material-ui/core';
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const useStyles = makeStyles({
  error: {
    color: 'red',
  },
});

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

const formatDefaultDate = () => {
  const newDate = new Date();
  const retDate =
    (newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours()) +
    ':' +
    (newDate.getMinutes() < 10
      ? '0' + newDate.getMinutes()
      : newDate.getMinutes());

  console.log(retDate);
  return retDate;
};

const Home = (props: any) => {
  const classes = useStyles();
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Grid
          container
          justifyContent="center"
          direction="column"
          alignItems="center"
          spacing={2}
        >
          <CssBaseline />
          <Box mt={4}>
            <Grid item xs={12} sm={12}>
              <Typography variant="h2">
                Carleton Gym Booking Automation
              </Typography>
            </Grid>
          </Box>
          <Grid item xs={12} sm={12}>
            <img width="200" src={logo} alt="carleton logo" />
          </Grid>
        </Grid>
        <Formik
          initialValues={{
            timeToExecute: formatDefaultDate(),
            timeToBook: '',
            username: '',
            password: '',
            dayValue: '',
          }}
          validate={(values) => {
            const errors: any = {};
            console.log(values);
            if (!values.username) {
              errors.username = 'Required';
            }

            if (!values.password) {
              errors.password = 'Required';
            }

            if (!day) {
              errors.dayValue = 'Required';
            }

            console.log(errors);
            return errors;
          }}
          onSubmit={(values) => {
            props.setTimeToExecute(values.timeToExecute);
            props.setDay(day);
            props.setUsername(values.username);
            props.setPassword(values.password);
            props.setStepper(1);
            window.location.hash = '/waiting';
          }}
        >
          {({ isSubmitting, handleChange, handleBlur, errors }) => (
            <Form>
              <Grid
                container
                direction="column"
                alignItems="center"
                spacing={2}
              >
                <Box width={0.4} mt={2}>
                  <TextField
                    id="timeToExecute"
                    label="Time you want the program to book the gym appointment"
                    type="time"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    defaultValue={formatDefaultDate()}
                    fullWidth
                  />
                  {errors.timeToExecute ? (
                    <div className={classes.error}>{errors.timeToExecute}</div>
                  ) : null}
                </Box>
                <Box width={0.4} mt={2}>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick2}
                  >
                    Time to Book Gym
                  </Button>
                  <Menu
                    id="timeToBook"
                    anchorEl={anchorEl2}
                    keepMounted
                    open={Boolean(anchorEl2)}
                    onClose={handleClose2}
                  >
                    <MenuItem
                      onClick={() => {
                        handleClose2();
                        props.setTimeToBook('7-8:30');
                        setTime('7 - 8:30 AM');
                      }}
                    >
                      7 - 8:30 AM
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose2();
                        props.setTimeToBook('8:30-10');
                        setTime('8:30 - 10 AM');
                      }}
                    >
                      8:30 - 10 AM
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose2();
                        props.setTimeToBook('10-11:30');
                        setTime('10 - 11:30 AM');
                      }}
                    >
                      10 - 11:30 AM
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose2();
                        props.setTimeToBook('11:30-1');
                        setTime('11:30 AM - 1 PM');
                      }}
                    >
                      11:30 AM - 1 PM
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose2();
                        props.setTimeToBook('1-2:30');
                        setTime('1 - 2:30 PM');
                      }}
                    >
                      1 - 2:30 PM
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose2();
                        props.setTimeToBook('2:30-4');
                        setTime('2:30 - 4 PM');
                      }}
                    >
                      2:30 - 4 PM
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose2();
                        props.setTimeToBook('4-5:30');
                        setTime('4 - 5:30 PM');
                      }}
                    >
                      4 - 5:30 PM
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose2();
                        props.setTimeToBook('5:30-7');
                        setTime('5:30 - 7 PM');
                      }}
                    >
                      5:30 - 7 PM
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose2();
                        props.setTimeToBook('7-8:30');
                        setTime('7 - 8:30 PM');
                      }}
                    >
                      7 - 8:30 PM
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose2();
                        props.setTimeToBook('8:30-10');
                        setTime('8:30 - 10 PM');
                      }}
                    >
                      8:30 - 10 PM
                    </MenuItem>
                  </Menu>
                  <Typography align="center">{time}</Typography>
                  {errors.dayValue ? (
                    <div className={classes.error}>{errors.timeToBook}</div>
                  ) : null}
                </Box>
                <Box width={0.4} mt={2}>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    Day to Book Gym
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        setDay('Sunday');
                      }}
                    >
                      Sunday
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        setDay('Monday');
                      }}
                    >
                      Monday
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        setDay('Tuesday');
                      }}
                    >
                      Tuesday
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        setDay('Wednesday');
                      }}
                    >
                      Wednesday
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        setDay('Thursday');
                      }}
                    >
                      Thursday
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        setDay('Friday');
                      }}
                    >
                      Friday
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        setDay('Saturday');
                      }}
                    >
                      Saturday
                    </MenuItem>
                  </Menu>
                  <Typography align="center">{day}</Typography>
                  {errors.dayValue ? (
                    <div className={classes.error}>{errors.dayValue}</div>
                  ) : null}
                </Box>
                <Box width={0.4} mt={2}>
                  <TextField
                    label="Username"
                    variant="outlined"
                    type="username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="username"
                    fullWidth
                  />
                  {errors.username ? (
                    <div className={classes.error}>{errors.username}</div>
                  ) : null}
                </Box>
                <Box width={0.4} mt={2}>
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="password"
                    fullWidth
                  />
                  {errors.password ? (
                    <div className={classes.error}>{errors.password}</div>
                  ) : null}
                </Box>
                <Box width={0.4} mt={4}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    fullWidth
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Form>
          )}
        </Formik>
      </ThemeProvider>
    </>
  );
};

export default Home;
