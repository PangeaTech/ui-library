import { Backdrop, Box, CircularProgress, Typography } from '@mui/material';

interface IPageLoaderProps {
  loadingText: string;
}
const PageLoader: React.FC<IPageLoaderProps> = ({ loadingText }) => {
  return (
    <Box className="flex flex-col gap-2 absolute left-2/4 top-2/4 z-10">
      <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, '& .MuiBackdrop-root': { backgroundColor: 'lightgrey' } }} open />
      <CircularProgress className="mx-auto" />
      <Typography variant="h5" sx={{ ml: 2, color: 'whitesmoke', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        {loadingText}
      </Typography>
    </Box>
  );
};

export default PageLoader;
