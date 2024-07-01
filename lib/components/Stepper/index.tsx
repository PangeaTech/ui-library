import Box from '@mui/material/Box';
import { default as MuiStepper } from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

export interface IStepperProps {
  activeStep: number;
  steps: string[];
  errorStep?: number;
  handleStep: (step: number) => void;
}
const Stepper: React.FC<IStepperProps> = ({ activeStep, steps, errorStep,handleStep }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <MuiStepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label} sx={{":hover": {cursor: "pointer"}}} onClick={() => handleStep(index)}>
            <StepLabel error={index + 1 === errorStep}>{label}</StepLabel>
          </Step>
        ))}
      </MuiStepper>
    </Box>
  );
};

export default Stepper;
