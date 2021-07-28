import {
  CircularProgress,
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
  Box,
} from '@material-ui/core';
import React from 'react';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

const Booking = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        style={{ minHeight: '60vh' }}
      >
        <CssBaseline />
        <Typography variant="h3">Booking Gym...</Typography>
        <Box mt={5}>
          <CircularProgress color="inherit" />
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

export default Booking;
