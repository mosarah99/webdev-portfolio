import { Stack } from '@mui/material';
import FooterEmailWidget from '../FooterEmailWidget/FooterEmailWidget.component';
import FooterSocialsWidget from '../FooterSocialsWidget/FooterSocialsWidget.component';

export interface FooterContactLinksWidgetProps {}
export const FooterContactLinksWidget = (
  props: FooterContactLinksWidgetProps,
) => {
  return (
    <Stack spacing={2}>
      <FooterEmailWidget />
      <FooterSocialsWidget />
    </Stack>
  );
};

export default FooterContactLinksWidget;
