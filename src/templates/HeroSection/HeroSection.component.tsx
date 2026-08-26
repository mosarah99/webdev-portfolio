import {
  SecondarySection,
  type SecondarySectionProps,
} from '../../components/Section/SecondarySection/SecondarySection.component';
import { alpha } from '@mui/material';
import SectionHeader from '../../components/SectionHeader/SectionHeader.component';

interface HeroSectionProps extends Omit<SecondarySectionProps, 'children'> {
  preTitle?: string;
  title?: string;
  subtitle?: string;
  bgImageUrl: string;
  backgroundImage?: string;
}

const HeroSection = ({ bgImageUrl, sx, ...props }: HeroSectionProps) => {
  return (
    <SecondarySection
      className='skillspage__hero-section'
      sx={[
        (theme) => ({
          minHeight: '80vh',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          backgroundColor: theme.palette.primary.main,
          backgroundImage: [
            `linear-gradient(45deg, ${alpha(theme.palette.primary.dark, 0.6)}, ${alpha(theme.palette.secondary.dark, 0.6)})`,
            `url(${bgImageUrl})`,
          ].join(','),
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',

          textShadow: [
            `.25rem .25rem .5rem ${theme.palette.primary.light}`,
            `-.25rem -.25rem 1rem ${theme.palette.secondary.light}`,
          ].join(', '),
          textAlign: 'center',
          color: [theme.palette.primary.contrastText],
          fontWeight: 900,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      <SectionHeader
        pretitle={props.preTitle}
        title={props.title ?? ''}
        subtitle={props.subtitle}
        titleProps={{
          variant: 'h1',
          sx: {
            textTransform: 'uppercase',
          },
        }}
        pretitleProps={{
          variant: 'h6',
        }}
        subtitleProps={{
          variant: 'h6',
        }}
      />
    </SecondarySection>
  );
};

export default HeroSection;
