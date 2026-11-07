import {
  List,
  ListItem,
  ListItemButton,
  Stack,
} from '@mui/material';
import FooterHeader from '../FooterHeader/FooterHeader.component';
import type { SiteLink } from '../../../assets/footer-site-links';
import type { HTMLAttributes } from 'react';

export interface FooterSiteLinksWidgetProps extends HTMLAttributes<HTMLDivElement> {
  footerLinks: SiteLink[];
  heading?: string;
}
export const FooterSiteLinksWidget = ({
  footerLinks,
  heading,
  ...props
}: FooterSiteLinksWidgetProps) => {
  return (
    <Stack {...props}>
      <FooterHeader>{heading || 'Site Links'}</FooterHeader>

      <List dense>
        {footerLinks.map((link, index) => (
          <ListItem
            key={`${index}-${link}`}
            disableGutters
            dense
          >
            <ListItemButton href={link.href}>
              {link.label}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default FooterSiteLinksWidget;
