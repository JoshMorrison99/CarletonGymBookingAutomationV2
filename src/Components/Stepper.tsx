import { StepLabel, Stepper, Step } from '@material-ui/core';
import React from 'react';

const StepperLog = (props: any) => {
  return (
    <Stepper activeStep={props.activeStep} alternativeLabel>
      {props.steps.map((label: any) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepperLog;
