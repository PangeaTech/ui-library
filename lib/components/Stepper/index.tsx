import React from 'react';
import CheckIcon from '@mui/icons-material/Check';

interface Step {
  title: string;
  description: string;
  isActive: boolean;
  stepNumber: number;
}

interface StepperProps {
  steps: Step[];
  activeStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, activeStep }) => {
  console.log(activeStep);
  return (
    <div className="flex flex-col h-full justify-start items-start relative p-20 pr-0">
      {steps.map((step, index) => (
        <div key={step.stepNumber} className="relative w-full flex items-center h-full">
          {/* Vertical Line */}
          {index !== steps.length && <div className={`absolute left-[90%] w-[2px] bg-[#D9D9D9] h-full`}></div>}

          {/* Step content */}
          <div className="flex flex-row justify-between items-center w-full mb-5">
            <div>
              <h3 className="text-sm font-medium">{step.title}</h3>
              <p className="text-xs text-[#908E8D]">{step.description}</p>
            </div>
            <div
              className={`relative w-8 h-8 flex items-center justify-center rounded-full z-10 
              ${step.stepNumber < activeStep ? 'bg-[#22A447] text-white' : step.stepNumber === activeStep ? 'bg-[#197BBD] text-white' : 'bg-white border-2 border-[#197BBD] text-[#197BBD]'}`}
            >
              {step.stepNumber < activeStep ? <CheckIcon className="text-white" /> : step.stepNumber}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
