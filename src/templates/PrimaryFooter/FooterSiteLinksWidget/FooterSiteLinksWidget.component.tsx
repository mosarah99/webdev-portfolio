import {
  Box,
  List,
  ListItem,
  ListItemButton,
  Stack,
} from '@mui/material';
import FooterHeader from '../FooterHeader/FooterHeader.component';
import type { SiteLink } from '../../../assets/footer-site-links';

export interface FooterSiteLinksWidgetProps {
  footerLinks: SiteLink[];
  heading?: string;
}
export const FooterSiteLinksWidget = (
  props: FooterSiteLinksWidgetProps,
) => {
  return (
    <Stack>
      <FooterHeader>
        {props.heading || 'Site Links'}
      </FooterHeader>

      <List dense>
        {props.footerLinks.map((link, index) => (
          <ListItem
            key={`${index}-${link}`}
            disableGutters
            dense
          >
            <ListItemButton href={link.href}>
              {link.title}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default FooterSiteLinksWidget;
