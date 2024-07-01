import React from 'react';
import { Container, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Button } from 'pangea_ui_library';

export interface ErrorPageProps {
  errorMessage: string;
  onRefresh: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorMessage, onRefresh }) => {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '20vh' }}>
      <ErrorOutlineIcon sx={{ fontSize: '5rem', color: '#f44336' }} />
      <Typography variant="h5" gutterBottom style={{ marginTop: '1rem' }}>
        Oops! Something went wrong.
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        {errorMessage}
      </Typography>
      <Button variant="contained" color="primary" onClick={onRefresh}>
        Refresh Page
      </Button>
    </Container>
  );
};

export default ErrorPage;
