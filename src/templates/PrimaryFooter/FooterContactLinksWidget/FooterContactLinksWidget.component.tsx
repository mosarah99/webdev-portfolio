import { Stack } from '@mui/material';
import FooterEmailWidget from '../FooterEmailWidget/FooterEmailWidget.component';
import FooterSocialsWidget from '../FooterSocialsWidget/FooterSocialsWidget.component';
import type { HTMLAttributes } from 'react';

export interface FooterContactLinksWidgetProps extends HTMLAttributes<HTMLDivElement> {}
export const FooterContactLinksWidget = ({
  ...props
}: FooterContactLinksWidgetProps) => {
  return (
    <Stack
      spacing={2}
      {...props}
    >
      <FooterEmailWidget />
      <FooterSocialsWidget />
    </Stack>
  );
};

export default FooterContactLinksWidget;
