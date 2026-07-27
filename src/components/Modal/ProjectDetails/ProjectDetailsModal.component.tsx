import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Modal,
  Stack,
  Typography,
} from '@mui/material';
import SectionHeader from '../../SectionHeader/SectionHeader.component';
import { type ProjectWithSkills } from '../../../assets/projects-skills';
import * as uuid from 'uuid';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface ProjectDetailsModalProps {
  open: boolean;
  project: ProjectWithSkills;
  onClose: () => void;
}

export const ProjectDetailsModal = (props: ProjectDetailsModalProps) => {
  return (
    <Modal
      open={props.open}
      sx={{
        overflow: 'auto',
      }}
    >
      <Box
        sx={{
          width: '100%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Container
          maxWidth='lg'
          sx={
            {
              // backgroundColor: 'background.paper',
            }
          }
          style={{
            padding: 0,
          }}
        >
          <Stack>
            <Card
              sx={
                {
                  // width: '100%',
                }
              }
            >
              <CardMedia
                image={props.project.image}
                component={'img'}
                alt={`${props.project.title} image`}
                sx={{
                  objectFit: 'cover',
                  width: '100%',
                }}
              />
              <CardContent>
                <Stack spacing={5}>
                  <SectionHeader
                    title={props.project.title}
                    subtitle={props.project.description}
                  />
                  {/* {props.project.detail_description
                    .split('\n')
                    .map((paragraph: string) => (
                      <Typography
                        key={uuid.v7()}
                        variant='body1'
                        align='center'
                      >
                        {paragraph}
                      </Typography>
                    ))} */}
                  <Divider variant='fullWidth' />
                  <CardContent>
                    <Markdown rehypePlugins={[rehypeRaw]}>
                      {props.project.detail_description}
                    </Markdown>
                  </CardContent>
                </Stack>
              </CardContent>

              <CardContent
                sx={{
                  margin: 2,
                }}
              >
                <Stack
                  direction={'row'}
                  spacing={2}
                  flexWrap={'wrap'}
                >
                  {props.project.skills.map((skill: any) => (
                    <Chip
                      variant='filled'
                      key={uuid.v7()}
                      avatar={
                        <Avatar
                          src={skill.icon}
                          alt={`${skill.name} icon`}
                          slotProps={{
                            img: {
                              loading: 'lazy',
                            },
                          }}
                        />
                      }
                      label={
                        <Typography variant='caption'>{skill.name}</Typography>
                      }
                    />
                  ))}
                </Stack>
              </CardContent>

              <Divider variant='fullWidth' />
              <CardContent
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Button
                  variant='text'
                  fullWidth
                  onClick={props.onClose}
                >
                  Close
                </Button>
              </CardContent>
            </Card>
          </Stack>
        </Container>
      </Box>
    </Modal>
  );
};

export default ProjectDetailsModal;
