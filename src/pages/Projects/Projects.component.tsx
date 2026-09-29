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

export const ProjectsPage: React.FC = () => {
  // View Modes
  const viewModes = ['grid', 'list'] as const;
  const [viewMode, setViewMode] =
    useState<(typeof viewModes)[number]>('grid');

  // Filtering Projects
  const { filteredProjects, filters, filterOperations } =
    useProjectsFilter({
      projects: projectsWithSkills,
      skills: skillsWithCategory,
    });

  const {
    currentPage,
    pageCount,
    viewableProjects,
    jumpPage,
  } = useProjectsPagination({
    projects: filteredProjects,
    pageSize: 6,
  });

  const theme = useTheme();

  const onPageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    // setPage(value);
    event.preventDefault();
    jumpPage(value);
  };
  const onViewModeChange =
    (mode: (typeof viewModes)[number]) =>
    (_event: React.MouseEvent<any>) => {
      setViewMode(mode);
    };

  const [filterModalOpen, setFilterModalOpen] =
    useState(false);

  const ViewMenuButtonGroup = () => {
    return (
      <ButtonGroup
        sx={{
          marginX: 1,
        }}
      >
        {viewModes.map((mode) => (
          <Button
            key={mode}
            variant={
              mode === viewMode ? 'contained' : 'outlined'
            }
            onClick={onViewModeChange(mode)}
            sx={{
              textTransform: {
                '': 'lowercase',
                ':firstLetter': 'uppercase',
              },
            }}
          >
            {mode}
          </Button>
        ))}
      </ButtonGroup>
    );
  };

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
              spacing={2}
              sx={{
                flexGrow: 1,
              }}
            >
              <Card
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
                      control={<ViewMenuButtonGroup />}
                      label='View'
                      labelPlacement='start'
                    />
                  </FormGroup>
                </FormControl>
              </Card>
              <ProjectDisplayContainer
                projects={viewableProjects}
                viewMode={viewMode}
              />
            </Stack>
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
            page={currentPage}
            size='large'
            count={pageCount}
            onChange={onPageChange}
            color='primary'
          />
        </Stack>
      </SecondarySection>
    </Page>
  );
};
export default ProjectsPage;
