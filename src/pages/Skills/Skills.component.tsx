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
import React, { useEffect, useState } from 'react';
import Page from '../Page.component';
import PrimarySection from '../../components/Section/PrimarySection/PrimarySection.component';
import SecondarySection from '../../components/Section/SecondarySection/SecondarySection.component';
import HeroSection from '../../templates/HeroSection/HeroSection.component';
import SingleStackSkillCard from './SingleStackSkillCard/SingleStackSkillCard.component';
import SkillCategoryCard from './SkillCategoryCard/SkillCategoryCard.component';
import { useQueryState } from 'nuqs';
import type IPageContent from '../../types/content/PageContent';

const Skills: React.FC = () => {
  const [_, setCategory] = useQueryState('category');
  useEffect(() => {
    return () => {
      setCategory(null);
    };
  }, []);

  const [content, setContent] = useState<IPageContent>();
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          './content/skillspage.json',
        );
        console.log(response);

        if (!response.ok)
          throw new Error(
            'cannot fetch content from: ' + response.url,
          );

        const data: IPageContent = await response.json();
        console.log(data);

        setContent(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContent();
  }, []);

  const getContent = (
    sectionName: string,
    caseSensitive: boolean = false,
  ) =>
    content?.contents?.find(
      (c) =>
        (caseSensitive ? c.name : c.name.toLowerCase()) ===
        sectionName,
    )?.content;

  return (
    <Page>
      <HeroSection
        bgImageUrl='https://images.pexels.com/photos/4863008/pexels-photo-4863008.jpeg'
        header={getContent('hero')?.header || 'Skills'}
        subheader={
          getContent('hero')?.subheader ||
          'Technical proficiencies'
        }
        sx={{
          backgroundPositionY: 'bottom',
        }}
      />
      <PrimarySection className='skillspage__top-stacks-section'>
        {/* 
            TODO: Dilute into 2 sections 
        */}
        <SectionHeader
          header={
            getContent('stack')?.header || 'Tech Stack'
          }
          subheader={
            getContent('stack')?.subheader || 'I love'
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
          header={getContent('skills')?.header || 'Skills'}
          subheader={
            getContent('skills')?.subheader || 'All of them'
          }
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
