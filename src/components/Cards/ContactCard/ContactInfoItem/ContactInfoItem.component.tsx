import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import type { ReactNode } from 'react';

export interface ContactInfoItemProps {
  actionButton?: ReactNode;
  icon: ReactNode;
  text: string;
}
export const ContactInfoItem = (
  props: ContactInfoItemProps,
) => {
  return (
    <ListItem
      component={'div'}
      disableGutters
    >
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText>{props.text}</ListItemText>
      <ListItemSecondaryAction>
        {props.actionButton}
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ContactInfoItem;
