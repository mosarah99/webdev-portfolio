import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import SectionHeader from '../../components/SectionHeader/SectionHeader.component';
import skills, { skillsByCategory, favoriteStacks } from '../../assets/skills';
import * as uuid from 'uuid';

import './Skills.style.css';
import React from 'react';
const SingleSkillCard = ({
  skill,
  ...props
}: {
  skill: (typeof skills)[number];
}) => (
  <Card variant='outlined'>
    <Stack
      direction={'row'}
      alignItems={'center'}
    >
      <CardMedia
        sx={{
          aspectRatio: 1,
          height: '5rem',
        }}
        image={skill.icon}
        title={`${skill.name ?? skill.shortname} icon`}
      />
      <Box sx={{ flexGrow: 1, marginLeft: 2 }}>
        <Typography
          variant='h6'
          // textAlign={'center'}
          // marginBottom={1}
        >
          {skill.name}
        </Typography>
        {/* <Divider variant='fullWidth' />
                            <Typography
                              variant='body2'
                              textAlign={'center'}
                            >
                              {skill.category?.name}
                            </Typography> */}
      </Box>
    </Stack>
  </Card>
);
const SingleStackSkillCard = ({
  skill,
  ...props
}: {
  skill: (typeof skills)[number];
}) => (
  <Stack direction={'row'}>
    <Avatar
      src={skill?.icon}
      alt={`${skill?.name ?? skill?.shortname} icon`}
      variant='square'
    />
    <Typography
      variant='h6'
      marginLeft={2}
    >
      {skill?.name}
    </Typography>
  </Stack>
);
const Skills: React.FC = () => {
  return (
    <Box>
      <section className='skillspage__hero-section'>
        <SectionHeader
          title='Skills & Expertise'
          subtitle='Granular breakdown of my technical proficiencies'
          titleProps={{
            variant: 'h2',
            color: 'primary',
            textTransform: 'uppercase',
            fontWeight: 'bolder',
          }}
          subtitleProps={{
            variant: 'h4',
            color: 'textSecondary',
            textTransform: 'uppercase',
            fontWeight: 'bold',
          }}
        />
      </section>
      <section className='skillspage__top-stacks-section'>
        <SectionHeader
          title='Tech Stack'
          subtitle='I find myself coming back to'
        />
        <Container maxWidth='lg'>
          <Grid
            justifyContent={'center'}
            container
            spacing={4}
          >
            {favoriteStacks.map((stack) => (
              <Grid
                key={uuid.v7()}
                size={{ xs: 12, md: 6 }}
              >
                <Card variant='outlined'>
                  <CardHeader
                    title={stack.name}
                    subheader={stack.description}
                  />
                  <Divider variant='fullWidth' />
                  <CardContent>
                    <Stack>
                      {stack.skills
                        .filter((skill) => !!skill)
                        .map((skill) => (
                          <SingleStackSkillCard
                            skill={skill}
                            key={uuid.v7()}
                          />
                        ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      <section className='skillspage__skills-list-section'>
        <SectionHeader
          title='All Skills'
          subtitle='A comprehensive overview of my technical capabilities'
        />
        <Container maxWidth='xl'>
          {Array.from(skillsByCategory.entries()).map(([category, skills]) => (
            <Card
              key={uuid.v7()}
              elevation={5}
              sx={{ marginBottom: 4 }}
            >
              <CardHeader
                title={category.name}
                slotProps={{
                  title: {
                    component: 'h6',
                    textAlign: 'center',
                  },
                }}
              />

              <Divider variant='fullWidth' />
              <CardContent>
                <Grid
                  justifyContent={'center'}
                  container
                  spacing={1}
                >
                  {skills.map((skill) => (
                    <Grid
                      key={uuid.v7()}
                      size={{ xs: 6, md: 3, lg: 2 }}
                    >
                      <SingleSkillCard skill={skill} />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Container>
      </section>
    </Box>
  );
};

export default Skills;
