// CustomSwitch.tsx
import React from 'react';
import { Switch as MuiSwitch, SwitchProps, Typography } from '@mui/material';
import { styled } from '@mui/system';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';

interface CustomSwitchProps extends Omit<SwitchProps, 'color'> {
  switchBgColor?: string;
  label: string;
  isLeftLabel?: boolean;
  leftlabel?: string;
  labelPlacement?: 'top' | 'bottom' | 'start' | 'end';
  labelColor?: string;
  labelSize?: 'small' | 'medium' | 'large';
  labelWeight?: 'light' | 'regular' | 'medium' | 'bold';
}

const IOSSwitch = styled((props: CustomSwitchProps) => <MuiSwitch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(
  ({ theme, switchBgColor }) => ({
    width: 38,
    height: 22,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 1,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: switchBgColor || theme.palette.primary,
          opacity: 1,
          border: 0
        },
        '& .MuiSwitch-thumb': {
          color: theme.palette.primary,
          border: `6px solid ${theme.palette.primary}`
        }
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 20,
      height: 20
    },
    '& .MuiSwitch-track': {
      borderRadius: 13,
      backgroundColor: '#E9E9EA',
      opacity: 1
    }
  })
);

const Switch: React.FC<CustomSwitchProps> = (props) => {
  return (
    <Box>
      <FormGroup sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem' }}>
        {props.isLeftLabel && (
          <Typography sx={{ color: props.labelColor || 'black', fontSize: props.labelSize || '1rem', fontWeight: props.labelWeight || 'medium' }}>
            {props.leftlabel || ''}
          </Typography>
        )}
        <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} {...props} />} labelPlacement={props.labelPlacement} label={props.label} />
      </FormGroup>
    </Box>
  );
};

export default Switch;
