import { Box, Card } from '@mui/material';
import * as uuid from 'uuid';
import './PageLoader.style.css';

const LoaderCard = ({ index = 0 }: { index: number }) => {
  return (
    <Card
      className='crystal'
      sx={(theme) => ({
        position: 'absolute',
        top: '50%',
        left: '50%',
        maxWidth: '100px',
        width: '10rem',
        aspectRatio: 1,
        // height: 100,
        opacity: 0,
        transformOrigin: 'bottom center',
        transform: 'translate(-50%, -50%) rotateX(45deg) rotateZ(0deg)',
        animation: [
          'spin 4s linear infinite',
          'emerge 2s ease-in-out infinite alternate',
          'fadeIn 0.3s ease-out forwards',
        ].join(', '),
        visibility: 'hidden',

        background: `linear-gradient(90deg, ${theme.palette.info.light}, ${theme.palette.secondary.dark})`,
        animationDelay: `calc(0.3s * ${index})`,
      })}
      key={uuid.v7()}
    ></Card>
  );
};

export const PageLoader = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',

        position: 'fixed',
        top: '0px',
        bottom: '0px',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          perspective: '800px',
        }}
      >
        {new Array(6).fill(null).map((_, index) => (
          <LoaderCard
            index={index}
            key={uuid.v7()}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PageLoader;
