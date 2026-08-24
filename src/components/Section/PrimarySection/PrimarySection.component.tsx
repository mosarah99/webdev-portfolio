import { type PropsWithChildren } from 'react';
import { Section, type SectionProps } from '../Section.component';
import { useTheme } from '@mui/material';

export interface PrimarySectionProps extends PropsWithChildren<SectionProps> {}

export const PrimarySection = ({
  sx,
  children,
  ...props
}: PrimarySectionProps) => {
  const theme = useTheme();
  return (
    <Section
      sx={{
        backgroundColor: theme.palette.background.default,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Section>
  );
};

export default PrimarySection;
