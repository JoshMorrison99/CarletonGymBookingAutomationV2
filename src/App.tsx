import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Booking from './Booking';
import StepperLog from './Components/Stepper';
import Home from './Home';
import Waiting from './Waiting';

export default function App() {
  const [stepper, setStepper] = useState(0);
  const [timeToBook, setTimeToBook] = useState('');
  const [timeToExecute, setTimeToExecute] = useState('');
  const [day, setDay] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const steps = ['Fill out Form', 'Wait til Time', 'Booking Gym'];
  return (
    <Router>
      <StepperLog activeStep={stepper} steps={steps} />
      <Switch>
        <Route exact path="/">
          <Home
            setStepper={setStepper}
            setTimeToBook={setTimeToBook}
            setTimeToExecute={setTimeToExecute}
            setDay={setDay}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        </Route>
        <Route exact path="/waiting">
          <Waiting
            setStepper={setStepper}
            timeToBook={timeToBook}
            timeToExecute={timeToExecute}
            day={day}
            username={username}
            password={password}
          />
        </Route>
        <Route exact path="/booking">
          <Booking />
        </Route>
      </Switch>
    </Router>
  );
}
