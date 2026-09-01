import {
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
import Page from '../Page.component';
import PrimarySection from '../../components/Section/PrimarySection/PrimarySection.component';
import SecondarySection from '../../components/Section/SecondarySection/SecondarySection.component';
import HeroSection from '../../templates/HeroSection/HeroSection.component';

// TODO: move this component to templates folder
// TODO: reconsider UI/UX
const SingleSkillCard = ({ skill }: { skill: (typeof skills)[number] }) => (
  <Card variant='outlined'>
    <Stack
      direction={'row'}
      sx={{
        alignItems: 'center',
      }}
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
      </Box>
    </Stack>
  </Card>
);

const SingleStackSkillCard = ({
  skill,
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
      sx={{
        marginLeft: 2,
      }}
    >
      {skill?.name}
    </Typography>
  </Stack>
);
const Skills: React.FC = () => {
  return (
    <Page>
      <HeroSection
        bgImageUrl='https://images.pexels.com/photos/4863008/pexels-photo-4863008.jpeg'
        title='Skills & Expertise'
        subtitle='Granular breakdown of my technical proficiencies'
        sx={{
          backgroundPositionY: 'bottom',
        }}
      />
      <PrimarySection className='skillspage__top-stacks-section'>
        {/* 
            TODO: Dilute into 2 sections 
        */}
        <SectionHeader
          title='Tech Stack'
          subtitle='I find myself coming back to'
        />
        <Container maxWidth='lg'>
          <Grid
            container
            spacing={4}
            sx={{
              justifyContent: 'center',
            }}
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
      </PrimarySection>
      <SecondarySection className='skillspage__skills-list-section'>
        {/* 
            TODO: implement scroll spy (react scroll spy) to observe the categories in view 
            TODO: implement a sticky side navigation for the categories

        */}
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
                    align: 'center',
                  },
                }}
              />

              <Divider variant='fullWidth' />
              <CardContent>
                <Grid
                  container
                  spacing={1}
                  sx={{
                    justifyContent: 'center',
                  }}
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
      </SecondarySection>
    </Page>
  );
};

export default Skills;
