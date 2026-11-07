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
import type { ISection } from '../../types/content/PageContent';
import useContentFetch from '../../hooks/Utilities/useContentFetch';

const Skills: React.FC = () => {
  const [_, setCategory] = useQueryState('category');
  useEffect(() => {
    return () => {
      setCategory(null);
    };
  }, []);

  const content = useContentFetch(
    new URL('./content/skillspage.json', document.baseURI),
  );
  const getData = (sectionName: ISection['name']) =>
    content.getSection.byName(sectionName)?.content;

  return (
    <Page data-testid='skillspage'>
      <HeroSection
        bgImageUrl='https://images.pexels.com/photos/4863008/pexels-photo-4863008.jpeg'
        header={getData('hero')?.header || 'Skills'}
        subheader={
          getData('hero')?.subheader ||
          'Technical proficiencies'
        }
        sx={{
          backgroundPositionY: 'bottom',
        }}
        data-testid='skillspage__hero-section'
      />
      <PrimarySection
        className='skillspage__top-stacks-section'
        data-testid='skillspage__stacks-section'
      >
        {/* 
            TODO: Dilute into 2 sections 
        */}
        <SectionHeader
          header={getData('stack')?.header || 'Tech Stack'}
          subheader={
            getData('stack')?.subheader || 'I love'
          }
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
                data-testid='skillspage__stacks-section--stack'
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
      <SecondarySection
        className='skillspage__skills-list-section'
        data-testid='skillspage__skill-section'
      >
        <SectionHeader
          header={getData('skills')?.header || 'Skills'}
          subheader={
            getData('skills')?.subheader || 'All of them'
          }
        />
        <Container
          maxWidth='xl'
          data-testid='skillspage__skill-section--skills'
        >
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
                  data-testid='skillspage__skill-section--skills-category'
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
