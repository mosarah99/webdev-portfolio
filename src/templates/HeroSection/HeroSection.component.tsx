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

          backgroundColor: theme.palette.primary.main,
          backgroundImage: [
            // `rgba(0,0,0,0.8)`,
            `linear-gradient(45deg, ${alpha(theme.palette.primary.dark, 0.4)}, ${alpha(theme.palette.secondary.dark, 0.4)})`,
            `url(${bgImageUrl})`,
          ].join(','),
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',

          textShadow: ['1px 1px 10px black', '1px 1px 5px black'].join(', '),

          color: ['textSecondary', theme.palette.primary.contrastText],
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
        }}
        pretitleProps={{
          variant: 'h6',
        }}
        subtitleProps={{
          variant: 'subtitle1',
        }}
      />
    </SecondarySection>
  );
};

export default HeroSection;
