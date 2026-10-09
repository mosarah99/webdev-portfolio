import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
import FooterHeader from '../FooterHeader/FooterHeader.component';
import EmailRounded from '@mui/icons-material/EmailRounded';

export interface FooterEmailWidgetProps {
  header?: string;
  link?: URL;
  text?: string;
}
export const FooterEmailWidget = (
  props: FooterEmailWidgetProps,
) => {
  return (
    <Box>
      <FooterHeader>
        {props.header || 'Send an email'}
      </FooterHeader>

      <List dense>
        <ListItem
          component={'div'}
          dense
          disableGutters
        >
          <ListItemButton
            href={
              props.link?.toString() ||
              'mailto:sadatrahman001@gmail.com'
            }
          >
            <ListItemIcon>
              <EmailRounded />
            </ListItemIcon>
            <ListItemText>
              {props.text || 'sadatrahman001@gmail.com'}
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default FooterEmailWidget;
