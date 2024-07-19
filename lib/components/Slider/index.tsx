import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { default as MuiSlider, SliderProps } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

export interface ISliderProps extends SliderProps {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  disabled?: boolean;
  sliderTrackColor?: string;
  sliderThumbColor?: string;
  valueLabelColor?: {
    color: string;
    background: string;
  };
}

const CustomSlider = styled((props: ISliderProps) => <MuiSlider {...props} />)(
  ({ sliderTrackColor = '', sliderThumbColor = '', valueLabelColor }) => ({
    height: 6,
    '& .MuiSlider-track': {
      border: 'none'
    },
    color: sliderTrackColor,
    '& .MuiSlider-thumb': {
      height: 18,
      width: 18,
      backgroundColor: sliderThumbColor,
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: '0px 0px 0px 5px rgba(25, 118, 210, 0.16)'
      },
      '&::before': {
        display: 'none'
      }
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: valueLabelColor ? valueLabelColor.background : 'dodgerBlue',
      color: valueLabelColor ? valueLabelColor.color : 'white',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&::before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)'
      },
      '& > *': {
        transform: 'rotate(45deg)'
      }
    }
  })
);
export const Slider: React.FC<ISliderProps> = ({ leftIcon, rightIcon, disabled, ...props }) => {
  const [value, setValue] = useState<number>(30);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        {leftIcon}
        <CustomSlider valueLabelDisplay="auto" {...props} value={value} onChange={handleChange} disabled={disabled} />
        {rightIcon}
      </Stack>
    </Box>
  );
};

export default Slider;
