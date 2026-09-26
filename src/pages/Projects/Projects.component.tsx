import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Pagination,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import type React from 'react';
import SectionHeader from '../../templates/SectionHeader/SectionHeader.component';
import FeaturedProject from '../../components/FeaturedProject/FeaturedProject.component';

import './Projects.style.css';

import {
  featuredProjects,
  projectsWithSkills,
  type ProjectWithSkills,
} from '../../assets/projects-skills';
import {
  skillsWithCategory,
  type SkillBasic,
  type SkillWithCategory,
} from '../../assets/skills';
import { useMemo, useState } from 'react';
import Page from '../Page.component';
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
import HeroSection from '../../templates/HeroSection/HeroSection.component';
import useProjectsFilter from '../../hooks/Projects/useProjectsFilter';
import {
  AddRounded,
  DeleteRounded,
} from '@mui/icons-material';
import ProjectDisplayContainer from '../../components/Container/ProjectDisplayContainer/ProjectDisplayContainer';

interface SkillsListProps {
  listSubHeader?: React.ReactNode;
  skills: SkillBasic[] | SkillWithCategory[];
  actionButtonIcon?: React.ReactNode;
  onActionButtonClick?: (
    skill: SkillBasic | SkillWithCategory,
  ) => any;
  showSkillShortName?: boolean;
}
const SkillsList = (props: SkillsListProps) => {
  const handleButtonClick =
    (skill: SkillBasic | SkillWithCategory) =>
    (_event: React.MouseEvent) => {
      if (props.onActionButtonClick)
        props.onActionButtonClick(skill);
    };

  return (
    <List subheader={props.listSubHeader}>
      {props.skills.map((skill) => (
        <ListItem
          key={`${JSON.stringify(props.listSubHeader?.toString())}-${JSON.stringify(skill)}`}
          disableGutters
          secondaryAction={
            <ListItemIcon>
              <IconButton
                onClick={handleButtonClick(skill)}
              >
                {props.actionButtonIcon}
              </IconButton>
            </ListItemIcon>
          }
        >
          <ListItemAvatar>
            <Avatar
              src={skill?.icon}
              alt={`${skill?.name} icon`}
              slotProps={{
                img: {
                  loading: 'lazy',
                },
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={skill.name}
            secondary={
              props.showSkillShortName
                ? skill.shortname
                : null
            }
            slotProps={{
              primary: { noWrap: true },
              secondary: { noWrap: true },
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};

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

  // Pagination
  const [itemsPerPage, _] = useState<number>(6);
  const [page, setPage] = useState(1);
  const maxPageCount = useMemo(() => {
    return Math.ceil(
      filteredProjects.length / itemsPerPage,
    );
  }, [filteredProjects, itemsPerPage]);
  const projectsOnPage: ProjectWithSkills[] =
    useMemo(() => {
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

  const theme = useTheme();

  const onPageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };
  const onViewModeChange =
    (mode: (typeof viewModes)[number]) =>
    (_event: React.MouseEvent<any>) => {
      setViewMode(mode);
    };
  //   const onFilterChange = (filters: SkillWithCategory[]) => {
  //     setFilter(filters);
  //     setPage(1);
  //   };

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
        <Container maxWidth={'xl'}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
          >
            <Box
              component={Stack}
              sx={{
                alignSelf: 'stretch',
                minWidth: 'fit-content',
              }}
            >
              <CardContent>
                <SkillsList
                  listSubHeader={
                    <Typography
                      variant='h6'
                      component={'h3'}
                      noWrap
                    >
                      {(filters.skills ?? []).length < 1
                        ? 'No '
                        : null}
                      Active Filters
                    </Typography>
                  }
                  skills={filters.skills ?? []}
                  actionButtonIcon={<DeleteRounded />}
                  onActionButtonClick={(skill) =>
                    filterOperations.skills.remove(skill)
                  }
                  showSkillShortName
                />
              </CardContent>
              <CardContent>
                <Divider variant='fullWidth' />
              </CardContent>
              <CardContent>
                <SkillsList
                  skills={skillsWithCategory}
                  listSubHeader={
                    <Typography
                      variant='h6'
                      component={'h3'}
                      noWrap
                    >
                      Skill Filters
                    </Typography>
                  }
                  actionButtonIcon={<AddRounded />}
                  onActionButtonClick={(skill) =>
                    filterOperations.skills.append(skill)
                  }
                />
              </CardContent>
            </Box>

            <Stack
              spacing={2}
              sx={{
                flexGrow: 1,
              }}
            >
              <Card
                sx={(theme) => ({
                  padding: 2,
                  position: 'sticky',
                  top: '60px',
                  zIndex: theme.zIndex.mobileStepper,
                })}
              >
                <Stack
                  direction={'row'}
                  spacing={2}
                  sx={{
                    justifySelf: 'stretch',
                    alignItems: 'center',
                  }}
                >
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
                  >
                    Filters
                  </Button>
                  <Box
                    component={'span'}
                    sx={{ flexGrow: 1 }}
                  ></Box>
                  <FormControl component={'form'}>
                    <FormGroup>
                      <FormControlLabel
                        control={<ViewMenuButtonGroup />}
                        label='View'
                        labelPlacement='start'
                      />
                    </FormGroup>
                  </FormControl>
                </Stack>
              </Card>
              <ProjectDisplayContainer
                projects={projectsOnPage}
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
