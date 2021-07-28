import {
  Grid,
  Container,
  createTheme,
  ThemeProvider,
  Typography,
  CssBaseline,
} from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
const electron = require('electron');
const child_process = require('child_process');
const dialog = electron.dialog;
import Automation from './GymBookingAutomation';
var isWeekend = false;

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

const addZero = (num: number) => {
  if (num < 10) {
    return '0' + num;
  }
  return num;
};

const ConvertDayToNumber = (day: any) => {
  const dayNew = new Date().getDay();
  console.log('dayNew -> ' + dayNew);
  var dayNum = -100;
  switch (day) {
    case 'Sunday':
      dayNum = 0;
      isWeekend = true;
      break;
    case 'Monday':
      dayNum = 1;
      isWeekend = false;
      break;
    case 'Tuesday':
      dayNum = 2;
      isWeekend = false;
      break;
    case 'Wednesday':
      dayNum = 3;
      isWeekend = false;
      break;
    case 'Thursday':
      dayNum = 4;
      isWeekend = false;
      break;
    case 'Friday':
      dayNum = 5;
      isWeekend = false;
      break;
    case 'Saturday':
      dayNum = 6;
      isWeekend = true;
      break;
  }
  console.log('dayNum -> ' + dayNum);
  return dayNum - dayNew;
};

const ConvertTimeToNum = (time: any) => {
  var timeNum = -100;
  switch (time) {
    case '7-8:30':
      timeNum = 0;
      break;
    case '8:30-10':
      timeNum = 1;
      break;
    case '10-11:30':
      timeNum = 2;
      break;
    case '11:30-1':
      timeNum = 3;
      break;
    case '1-2:30':
      timeNum = 4;
      break;
    case '2:30-4':
      timeNum = 5;
      break;
    case '4-5:30':
      timeNum = 6;
      break;
    case '5:30-7':
      timeNum = 7;
      break;
    case '7-8:30':
      timeNum = 8;
      break;
    case '8:30-10':
      timeNum = 9;
  }
  return isWeekend ? timeNum - 1 : timeNum;
};

const Waiting = (props: any) => {
  ConvertDayToNumber(props.day);
  const [currentTime, setCurrentTime] = useState(new Date());

  const toTimeHolder = props.timeToExecute.split(':');
  const toHours: number = parseInt(toTimeHolder[0]);
  const toMinutes: number = parseInt(toTimeHolder[1]);
  const toTimeDate = new Date();
  toTimeDate.setHours(toHours);
  toTimeDate.setMinutes(toMinutes);
  toTimeDate.setSeconds(0);
  console.log(new Date(toTimeDate).toString());
  console.log(new Date(currentTime).toString());
  const [waitTime, setWaitTime] = useState(
    toTimeDate.getTime() - currentTime.getTime()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      if (waitTime < 1000) {
        props.setStepper(2);
        window.location.hash = '/booking';
        Automation(
          props.username,
          props.password,
          ConvertTimeToNum(props.timeToBook),
          ConvertDayToNumber(props.day)
        );
      }
      setCurrentTime(new Date());
      setWaitTime(toTimeDate.getTime() - currentTime.getTime());
      console.log(waitTime);
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        direction="column"
        style={{ minHeight: '60vh' }}
      >
        <CssBaseline />
        <Typography variant="h4" align="center">
          Booking {props.day}
        </Typography>
        <Typography variant="h3">Waiting till {props.timeToExecute}</Typography>
        <Typography variant="h5" align="center">
          {addZero(
            Math.floor((waitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          ) +
            'h ' +
            addZero(Math.floor((waitTime % (1000 * 60 * 60)) / (1000 * 60))) +
            'm ' +
            addZero(Math.floor((waitTime % (1000 * 60)) / 1000)) +
            's'}
        </Typography>
      </Grid>
    </ThemeProvider>
  );
};

export default Waiting;
