import { type PropsWithChildren } from 'react';
import { Section, type SectionProps } from '../Section.component';
import { useTheme } from '@mui/material';

export interface SecondarySectionProps extends PropsWithChildren<SectionProps> {}

export const SecondarySection = ({
  sx,
  children,
  ...props
}: SecondarySectionProps) => {
  const theme = useTheme();
  return (
    <Section
      sx={{
        bgcolor: theme.palette.background.paper,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Section>
  );
};

export default SecondarySection;
