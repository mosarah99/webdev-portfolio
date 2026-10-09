import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import FooterHeader from '../FooterHeader/FooterHeader.component';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';

export interface FooterSocialsWidgetProps {
  linkedinUsername?: string;
  githubUsername?: string;
}
export const FooterSocialsWidget = (
  props: FooterSocialsWidgetProps,
) => {
  return (
    <Box>
      <FooterHeader>Socials</FooterHeader>
      <List dense>
        <ListItem
          disableGutters
          dense
        >
          <ListItemButton
            href={`https://www.linkedin.com/in/${
              props.linkedinUsername || 'sadatrahman001'
            }`}
          >
            <ListItemIcon>
              <LinkedIn />
            </ListItemIcon>
            <ListItemText>
              linkedin.com/in/
              {props.linkedinUsername || 'sadatrahman001'}
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem
          disableGutters
          dense
        >
          <ListItemButton
            href={`https://github.com/${
              props.githubUsername || 'mosarah99'
            }`}
          >
            <ListItemIcon>
              <GitHub />
            </ListItemIcon>
            <ListItemText>
              github.com/
              {props.githubUsername || 'mosarah99'}
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default FooterSocialsWidget;
