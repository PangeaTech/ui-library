import React from 'react';
import { Box, CircularProgress, LinearProgress } from '@mui/material';
import { styled } from '@mui/system';

interface IPageLoaderProps {
  loadingText: string;
  type?: 'loaderbar' | 'loaderspinner';
}

const PageLoader: React.FC<IPageLoaderProps> = ({ type = 'loaderspinner' }) => {
  const StyledLinearProgress = styled(LinearProgress)({
    width: '256px',
    height: '11px',
    background: 'url(.png)',
    borderRadius: '1312.5px',
    border: '2.625px solid #2A318A',
    opacity: '50%',
    '& .MuiLinearProgress-bar': {
      width: '33px',
      height: '6px',
      background: '#2A318A',
      opacity: '100%',
      borderRadius: '15.75px'
    }
  });

  const StyledCircularProgress = styled(CircularProgress)({
    width: '48px',
    height: '48px',
    position: 'absolute',
    left: '16.67%',
    right: '16.67%',
    top: '16.67%',
    bottom: '16.67%',
    '&::before': {
      content: '""',
      width: '32px',
      height: '32px',
      position: 'absolute',
      left: '0px',
      top: '0px',
      background: 'url(.png)',
      opacity: 0.5
    },
    '&::after': {
      content: '""',
      width: '31px',
      height: '31px',
      position: 'absolute',
      left: '0px',
      top: '0.5px',
      background: '#2A318A'
    },
    '& .mask': {
      position: 'absolute',
      left: '0%',
      right: '3.12%',
      top: '1.56%',
      bottom: '1.56%',
      border: '1px dashed #000000'
    },
    '& .mask:nth-of-type(2)': {
      right: '6.25%',
      top: '3.12%',
      bottom: '3.12%'
    },
    '& .mask:nth-of-type(3)': {
      right: '9.38%',
      top: '4.69%',
      bottom: '4.69%'
    },
    '& .maskGroup': {
      position: 'absolute',
      left: '0%',
      right: '0%',
      top: '0%',
      bottom: '0%',
      background: '#141414'
    },
    '& .maskGroup .mask': {
      border: '2px solid #000000'
    },
    '& .focus': {
      boxSizing: 'border-box',
      position: 'absolute',
      left: '31.71%',
      right: '-31.71%',
      top: '118.31%',
      bottom: '-118.31%',
      border: '6px solid #2A318A',
      transform: 'rotate(-120deg)'
    }
  });

  return (
    <Box className="flex flex-col gap-2 z-10">
      {type === 'loaderspinner' && <StyledCircularProgress className="mx-auto" />}
      {type === 'loaderbar' && (
        <>
          <StyledLinearProgress />
        </>
      )}
    </Box>
  );
};

export default PageLoader;
