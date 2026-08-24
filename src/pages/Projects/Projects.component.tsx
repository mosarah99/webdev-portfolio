import {
  autocompleteClasses,
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Pagination,
  Stack,
} from '@mui/material';
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
import PrimarySection from '../../components/Section/PrimarySection/PrimarySection.component';
import SecondarySection from '../../components/Section/SecondarySection/SecondarySection.component';
import ContrastSection from '../../components/Section/ContrastSection/ContrastSection.component';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Pagination as SwiperPagination,
  Autoplay as SwiperAutoplay,
  A11y as SwiperA11y,
  EffectCoverflow as SwiperEffectCoverflow,
} from 'swiper/modules';

// swiper css
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css/effect-coverflow';

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
      <PrimarySection className='projectspage__hero-section'>
        <SectionHeader
          title='The Showcase'
          subtitle='A selection of my most impactful projects'
          titleProps={{
            variant: 'h2',
            color: 'primary',
            sx: {
              textTransform: 'uppercase',
              fontWeight: 'bolder',
            },
          }}
          subtitleProps={{
            variant: 'h4',
            color: 'textSecondary',
            sx: {
              textTransform: 'uppercase',
              fontWeight: 'bold',
            },
          }}
        />
      </PrimarySection>
      <ContrastSection className='projectspage__featured-section'>
        <Container
          maxWidth='md'
          sx={{
            height: {
              md: '400px',
              sm: '300px',
              xs: '60vh',
            },
          }}
        >
          <Swiper
            style={{
              width: '100%',
              height: '100%',
            }}
            modules={[
              SwiperPagination,
              SwiperAutoplay,
              SwiperA11y,
              SwiperEffectCoverflow,
            ]}
            effect='coverflow'
            coverflowEffect={{
              rotate: 70,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2500,
              enabled: true,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            a11y={{
              enabled: true,
              prevSlideMessage: `Previous Featured Project`,
              nextSlideMessage: `Next Featured Project`,
            }}
            direction='vertical'
            loop={true}
            mousewheel={true}
            grabCursor={true}
            spaceBetween={5}
            slidesPerView={1}
            speed={300}
          >
            {featuredProjects.map((project) => (
              <SwiperSlide
                key={`swiper-swiperslide-${JSON.stringify(project)}`}
                style={{
                  width: '100%',
                  height: '100%',

                  display: 'flex',
                  justifyContent: 'stretch',
                  alignItems: 'stretch',
                  gap: '1rem',
                }}
              >
                <FeaturedProject project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </ContrastSection>
      <SecondarySection className='projectspage__projects-list-section'>
        <SectionHeader
          pretitle='A bit more detailed'
          title='Projects List'
        />
        <Container maxWidth={'xl'}>
          <Stack
            direction={{ xs: 'column', xl: 'row' }}
            // justifyContent={'center'}
            sx={{
              alignItems: { xs: 'center', xl: 'flex-start' },
              gap: 1,
            }}
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
          direction={'row'}
          sx={{
            margin: 4,
            justifyContent: 'center',
          }}
        >
          <Pagination
            page={page}
            size='large'
            count={maxPageCount}
            onChange={onPageChange}
            color='primary'
          />
        </Stack>
      </SecondarySection>
    </Page>
  );
};
export default ProjectsPage;
