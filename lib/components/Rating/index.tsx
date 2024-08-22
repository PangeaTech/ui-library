import { Box, Rating as MuiRating, Typography, ratingClasses } from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';

export interface IRatingProps extends React.ComponentProps<typeof MuiRating> {
  disabled?: boolean;
  onChange: (event: React.SyntheticEvent<Element, Event>, value: number | null) => void;
  readOnly?: boolean;
  label?: string;
  value: number | undefined;
}

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& > legend': { marginTop: theme.spacing(2) }
}));

const RatingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  position: 'relative'
}));

const StyledRating = styled(MuiRating)(({}) => ({
  [`& .${ratingClasses.iconFilled}`]: {
    color: '#FEC20B'
  },
  [`& .${ratingClasses.iconHover}`]: {
    color: '#FEC20B'
  },
  [`& .${ratingClasses.iconEmpty}`]: {
    color: '#DAD7D6'
  },
  [`& .${ratingClasses.icon}`]: {
    width: '24px',
    height: '24px'
  }
}));

const FeedbackBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '100%',
  marginLeft: theme.spacing(1),
  whiteSpace: 'nowrap',
  minWidth: '80px'
}));

const StyledFeedback = styled(Typography)(({}) => ({
  fontFamily: 'Geograph',
  fontStyle: 'italic',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '112%',
  color: '#000000'
}));

const Rating: React.FC<IRatingProps> = ({ disabled, onChange, readOnly = false, label, value = 0 }) => {
  const [hoverValue, setHoverValue] = useState<number | null>(-1);

  const handleChangeActive = (event: React.ChangeEvent<{}>, newHoverValue: number | null) => {
    console.log(event);
    setHoverValue(newHoverValue);
  };

  const feedbackLabels = ['Poor+', 'Poor', 'OK', 'Good', 'Excellent'];
  const feedbackText = hoverValue !== null && hoverValue > 0 ? feedbackLabels[hoverValue - 1] : '';

  return (
    <StyledBox>
      <Typography component="legend">{label}</Typography>
      <RatingContainer>
        <StyledRating
          name="simple-controlled"
          value={value ? value : 0}
          onChange={onChange}
          onChangeActive={handleChangeActive}
          disabled={disabled}
          readOnly={readOnly}
        />
        {hoverValue !== -1 && (
          <FeedbackBox>
            <StyledFeedback>{feedbackText}</StyledFeedback>
          </FeedbackBox>
        )}
      </RatingContainer>
    </StyledBox>
  );
};

export default Rating;
