import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import type { ReactNode } from 'react';
import React from 'react';

export interface CopyrightFooterProps {
  footerText?: string & ReactNode;
}
export const CopyrightFooter = (
  props: CopyrightFooterProps,
) => {
  return (
    <Box>
      <Divider variant='fullWidth' />
      <Container>
        <Stack
          direction={{
            xs: 'row',
            // xs: 'column',
            // md: 'row',
          }}
          sx={{
            justifyContent: 'center',
          }}
        >
          {props.footerText || (
            <React.Fragment>
              Made with ❤️ by mosarah &copy; 2026.{' '}
              <span style={{ flexGrow: 1 }} /> All rights
              reserved, except as granted by the License.
            </React.Fragment>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default CopyrightFooter;
