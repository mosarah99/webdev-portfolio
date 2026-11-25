import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import type {
  SkillBasic,
  SkillWithCategory,
} from '../../assets/skills';

export interface SkillsListProps {
  listSubHeader?: React.ReactNode;
  skills: SkillBasic[] | SkillWithCategory[];
  actionButtonIcon?: React.ReactNode;
  onActionButtonClick?: (
    skill: SkillBasic | SkillWithCategory,
  ) => any;
  showSkillShortName?: boolean;
}
export const SkillsList = (props: SkillsListProps) => {
  const handleButtonClick =
    (skill: SkillBasic | SkillWithCategory) =>
    (_event: React.MouseEvent) => {
      if (props.onActionButtonClick)
        props.onActionButtonClick(skill);
    };

  return (
    <List subheader={props.listSubHeader}>
      {props.skills.map((skill) => (
        <ListItem
          key={`${JSON.stringify(props.listSubHeader?.toString())}-${JSON.stringify(skill)}`}
          disableGutters
          secondaryAction={
            <ListItemIcon>
              <IconButton
                onClick={handleButtonClick(skill)}
                aria-label={`${props.actionButtonIcon?.toString()} action button`}
              >
                {props.actionButtonIcon}
              </IconButton>
            </ListItemIcon>
          }
        >
          <ListItemAvatar>
            <Avatar
              component={Paper}
              src={skill?.icon}
              alt={`${skill?.name} icon`}
              aria-labelledby='skill-list-item-label'
              slotProps={{
                img: {
                  loading: 'lazy',
                },
              }}
            />
          </ListItemAvatar>
          <ListItemText
            id='skill-list-item-label'
            primary={skill.name}
            secondary={
              props.showSkillShortName
                ? skill.shortname
                : null
            }
            slotProps={{
              primary: { noWrap: true },
              secondary: { noWrap: true },
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default SkillsList;
