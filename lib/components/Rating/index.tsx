import Box from '@mui/material/Box';
import { default as MuiRating, RatingProps } from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export interface IRatingProps extends RatingProps {
  disabled?: boolean;
  onChange: (event: React.SyntheticEvent<Element, Event>, value: number | null) => void;
  readOnly?: boolean;
  label?: string;
  value: number | undefined;
}

const Rating: React.FC<IRatingProps> = ({ disabled, onChange, readOnly = false, label, value = 0 }) => {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 }
      }}
    >
      <Typography component="legend">{label}</Typography>
      <MuiRating name="simple-controlled" value={value ? value : 0} onChange={onChange} disabled={disabled} readOnly={readOnly} />
    </Box>
  );
};

export default Rating;
