import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  Pagination,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import type React from 'react';
import { parseAsStringEnum, useQueryState } from 'nuqs';
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactElement,
} from 'react';

/**
 * SWIPER
 */
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

/**
 * PROJECT ASSETS, COMPONENTS, TEMPLATES
 */
import {
  featuredProjects,
  projectsWithSkills,
  type ProjectWithSkills,
} from '../../assets/projects-skills';
import { skillsWithCategory } from '../../assets/skills';
import SectionHeader from '../../templates/SectionHeader/SectionHeader.component';
import FeaturedProject from '../../components/FeaturedProject/FeaturedProject.component';
import Page from '../Page.component';
import SecondarySection from '../../components/Section/SecondarySection/SecondarySection.component';
import ContrastSection from '../../components/Section/ContrastSection/ContrastSection.component';
import HeroSection from '../../templates/HeroSection/HeroSection.component';
import useProjectsFilter from '../../hooks/Projects/useProjectsFilter';
import ProjectDisplayContainer from '../../components/Container/ProjectDisplayContainer/ProjectDisplayContainer';
import ProjectFilterContainer from '../../components/Container/ProjectFilterContainer/ProjectFilterContainer';

import './Projects.style.css';
import ProjectFilterModal from '../../templates/ProjectFilterModal/ProjectFilterModal.component';
import useProjectsPagination from '../../hooks/Projects/useProjectsPagination';
import ViewMenuButtonGroup from './ViewMenuButtonGroup/ViewMenuButtonGroup.component';

export const ProjectsPage: React.FC = () => {
  // View Modes
  const viewModes = ['grid', 'list'];
  const [viewMode, setViewMode] = useQueryState(
    'view',
    parseAsStringEnum(viewModes).withDefault('grid'),
  );
  const onViewModeChange = (
    mode: (typeof viewModes)[number],
  ) => setViewMode(mode);

  // Filtering Projects
  const { filteredProjects, filters, filterOperations } =
    useProjectsFilter({
      projects: projectsWithSkills,
      skills: skillsWithCategory,
    });
  const [filterModalOpen, setFilterModalOpen] =
    useState(false);

  // pagination
  const {
    currentPage,
    pageCount,
    viewableProjects,
    jumpPage,
  } = useProjectsPagination({
    projects: filteredProjects,
    pageSize: 6,
  });
  const onPageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    // setPage(value);
    event.preventDefault();
    jumpPage(value);
  };

  const theme = useTheme();

  return (
    <Page>
      <HeroSection
        bgImageUrl='https://images.pexels.com/photos/8168570/pexels-photo-8168570.png'
        header='The Showcase'
        subheader='A selection of my most impactful projects'
      />
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
          preheader='A bit more detailed'
          header='Projects List'
        />
        <Container
          maxWidth={'xl'}
          disableGutters
        >
          <Stack
            direction={'row'}
            spacing={
              useMediaQuery(theme.breakpoints.down('md'))
                ? 0
                : 2
            }
          >
            <Box
              id='project-filters'
              sx={{
                display: {
                  xs: 'none',
                  md: 'block',
                },
              }}
            >
              <ProjectFilterModal
                open={filterModalOpen}
                onModalClose={() =>
                  setFilterModalOpen(false)
                }
                filerComponent={
                  <ProjectFilterContainer
                    allSkills={skillsWithCategory}
                    activeSkillFilters={
                      filters.skills ?? []
                    }
                    onFilterAdd={
                      filterOperations.skills.append
                    }
                    onFilterRemove={
                      filterOperations.skills.remove
                    }
                  />
                }
              />
              <ProjectFilterContainer
                allSkills={skillsWithCategory}
                activeSkillFilters={filters.skills ?? []}
                onFilterAdd={filterOperations.skills.append}
                onFilterRemove={
                  filterOperations.skills.remove
                }
              />
            </Box>

            <Stack
              id='projects-all-stack'
              spacing={2}
              sx={{
                flexGrow: 1,
              }}
            >
              <Card
                id='projects-appbar'
                component={Toolbar}
                sx={(theme) => ({
                  justifySelf: 'stretch',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',

                  padding: 2,
                  position: 'sticky',
                  top: '60px',
                  zIndex: theme.zIndex.mobileStepper,
                })}
              >
                <Box>
                  <Button
                    variant={
                      (filters.skills ?? []).length < 1
                        ? 'outlined'
                        : 'contained'
                    }
                    sx={{
                      display: {
                        xs: 'inline-block',
                        md: 'none',
                      },
                    }}
                    onClick={() => setFilterModalOpen(true)}
                  >
                    Filters
                  </Button>
                </Box>
                <FormControl component={'form'}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <ViewMenuButtonGroup
                          viewModes={Array.from(viewModes)}
                          activeViewMode={viewMode}
                          onClick={onViewModeChange}
                        />
                      }
                      label='View'
                      labelPlacement='start'
                    />
                  </FormGroup>
                </FormControl>
              </Card>
              <ProjectDisplayContainer
                id='projects-gallery'
                projects={viewableProjects}
                viewMode={viewMode as 'grid' | 'list'}
              />
              <Stack
                id='projects-pagination'
                sx={{
                  margin: 4,
                  alignItems: 'center',
                }}
              >
                <Pagination
                  page={currentPage}
                  size='large'
                  count={pageCount}
                  onChange={onPageChange}
                  color='primary'
                />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </SecondarySection>
    </Page>
  );
};
export default ProjectsPage;
