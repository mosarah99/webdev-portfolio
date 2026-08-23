import { Box, Container, Pagination, Stack } from '@mui/material';
import type React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader.component';
import FeaturedProject from '../../components/FeaturedProject/FeaturedProject.component';
import * as uuid from 'uuid';

import './Projects.style.css';

import {
  featuredProjects,
  projectsWithSkills,
  type ProjectWithSkills,
} from '../../assets/projects-skills';
import { skillsWithCategory } from '../../assets/skills';
import { useMemo, useState } from 'react';
import type { SkillWithCategory } from '../../assets/skills';
import ProjectDisplayContainer from '../../components/Container/ProjectDisplayContainer/ProjectDisplayContainer';
import ProjectFilterContainer from '../../components/Container/ProjectFilterContainer/ProjectFilterContainer';
import Page from '../Page.component';

export const ProjectsPage: React.FC = () => {
  // View Modes
  const viewModes = ['grid', 'list'] as const;
  const [viewMode, setViewMode] = useState<(typeof viewModes)[number]>('grid');

  // Filtering Projects
  const [filter, setFilter] = useState<SkillWithCategory[]>([]);
  const filteredProjects = useMemo(() => {
    console.log(`updating filteredProjects...`);

    const skillSet = filter.length === 0 ? skillsWithCategory : filter;
    const targetSkillIds = new Set(skillSet.map((skill) => skill.id));
    const filteredProjects = projectsWithSkills.filter((project) => {
      // Check if any ID in the project's skillId array exists in our target set
      return project.skillId.some((id) => {
        return targetSkillIds.has(id);
      });
    });
    // setFilteredProjects(filteredProjects);
    return filteredProjects;
  }, [filter, setFilter]);

  // Pagination
  const [itemsPerPage, _] = useState<number>(6);
  const [page, setPage] = useState(1);
  const maxPageCount = useMemo(() => {
    return Math.ceil(filteredProjects.length / itemsPerPage);
  }, [filteredProjects, itemsPerPage]);
  const projectsOnPage: ProjectWithSkills[] = useMemo(() => {
    console.log(`projectsOnPage updating...`);
    console.log(`current page: ${page}`);

    const inView = filteredProjects.slice(
      (page - 1) * itemsPerPage,
      itemsPerPage * page < filteredProjects.length
        ? itemsPerPage * page
        : filteredProjects.length,
    );
    // setProjectsOnPage(inView);
    return inView;
  }, [page, filteredProjects, maxPageCount]);

  const onPageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const onViewModeChange =
    (mode: (typeof viewModes)[number]) => (_event: React.MouseEvent<any>) => {
      setViewMode(mode);
    };
  const onFilterChange = (filters: SkillWithCategory[]) => {
    setFilter(filters);
    setPage(1);
  };

  return (
    <Page>
      <section className='projectspage__hero-section'>
        <SectionHeader
          title='The Showcase'
          subtitle='A selection of my most impactful projects'
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
      <section className='projectspage__featured-section'>
        {featuredProjects.map((project) => (
          <FeaturedProject
            key={uuid.v7()}
            // className='projectspage__featured-project'
            project={project}
            sx={{
              'display': 'flex',
              'flexDirection': 'row',
              'alignItems': 'center',
              ':nth-child(odd)': {
                justifyContent: 'flex-start',
              },
              ':nth-child(even)': {
                flexDirection: 'row-reverse',
                // justifyContent: 'flex-end',
              },
            }}
          />
        ))}
      </section>
      <section className='projectspage__projects-list-section'>
        <SectionHeader
          pretitle='A bit more detailed'
          title='Projects List'
        />
        <Container maxWidth={'xl'}>
          <Stack
            direction={{ xs: 'column', xl: 'row' }}
            // justifyContent={'center'}
            alignItems={{ xs: 'center', xl: 'flex-start' }}
            gap={1}
          >
            <ProjectFilterContainer
              allPossibleFilters={skillsWithCategory}
              filters={filter}
              onFilterChange={onFilterChange}
              allPossibleViewModes={viewModes.map((_) => _)}
              currentViewMode={viewMode}
              onViewModeChange={onViewModeChange}
            />
            <ProjectDisplayContainer
              projects={projectsOnPage}
              viewMode={viewMode}
            />
          </Stack>
        </Container>
        <Stack
          margin={4}
          direction={'row'}
          justifyContent={'center'}
        >
          <Pagination
            page={page}
            size='large'
            count={maxPageCount}
            onChange={onPageChange}
            color='primary'
          />
        </Stack>
      </section>
    </Page>
  );
};
export default ProjectsPage;
