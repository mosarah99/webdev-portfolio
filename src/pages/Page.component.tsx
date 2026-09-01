import { Box, type BoxProps } from '@mui/material';
import { Suspense, type PropsWithChildren } from 'react';
import PageLoader from '../templates/PageLoader/PageLoader.component';

interface PageProps extends PropsWithChildren<BoxProps> {}

export const Page = ({ children, ...props }: PageProps) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Box
        component={'main'}
        {...props}
      >
        {children}
      </Box>
    </Suspense>
  );
};

export default Page;
