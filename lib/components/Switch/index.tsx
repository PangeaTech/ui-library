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
  ({ switchBgColor }) => ({
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
          backgroundColor: switchBgColor || '#2D35DC',
          opacity: 1,
          border: 0
        },
        '& .MuiSwitch-thumb': {
          color: '#FFFFFF'
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          // opacity: 0.5,
          backgroundColor: '#DFE0FF'
        }
      }
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 20,
      height: 20,
      backgroundColor: '#FFFFFF'
    },
    '& .MuiSwitch-track': {
      borderRadius: 13,
      backgroundColor: '#C2C2C2',
      opacity: 1
    },
    '&.Mui-disabled': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: 0,
      gap: '12px',
      width: '280px',
      height: '20px',
      flex: 'none',
      order: 2,
      flexGrow: 0,
      '& .MuiSwitch-track': {
        background: '#DFE0FF',
        border: '1px solid #F5F5F5',
        borderRadius: '12px'
      },
      '& .MuiSwitch-thumb': {
        background: '#F0F0F0',
        boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)'
      }
    },
    // Resetting the default MUI styles
    '& .MuiSwitch-root': {
      boxShadow: 'none',
      '& .MuiSwitch-switchBase': {
        padding: 0
      },
      '& .MuiSwitch-track': {
        background: 'none',
        opacity: 1
      },
      '& .MuiSwitch-thumb': {
        boxShadow: 'none'
      }
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
