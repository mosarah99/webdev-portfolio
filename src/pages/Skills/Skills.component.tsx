import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Stack,
} from '@mui/material';
import SectionHeader from '../../templates/SectionHeader/SectionHeader.component';
import {
  skillsByCategory,
  favoriteStacks,
} from '../../assets/skills';
import * as uuid from 'uuid';

import './Skills.style.css';
import React, { useEffect } from 'react';
import Page from '../Page.component';
import PrimarySection from '../../components/Section/PrimarySection/PrimarySection.component';
import SecondarySection from '../../components/Section/SecondarySection/SecondarySection.component';
import HeroSection from '../../templates/HeroSection/HeroSection.component';
import SingleStackSkillCard from './SingleStackSkillCard/SingleStackSkillCard.component';
import SkillCategoryCard from './SkillCategoryCard/SkillCategoryCard.component';
import { useQueryState } from 'nuqs';

const Skills: React.FC = () => {
  const [_, setCategory] = useQueryState('category');
  useEffect(() => {
    return () => {
      setCategory(null);
    };
  }, []);

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
        <SectionHeader
          title='All Skills'
          subtitle='A comprehensive overview of my technical capabilities'
        />
        <Container maxWidth='xl'>
          <Stack
            sx={(theme) => ({
              gap: theme.spacing(10),
            })}
          >
            {Array.from(skillsByCategory.entries()).map(
              ([category, skills]) => (
                <SkillCategoryCard
                  key={`${category.id}-${JSON.stringify(category)}`}
                  skillCategory={category}
                  skills={skills}
                />
              ),
            )}
          </Stack>
        </Container>
      </SecondarySection>
    </Page>
  );
};

export default Skills;
