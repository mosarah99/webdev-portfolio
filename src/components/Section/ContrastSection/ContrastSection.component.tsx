import { type PropsWithChildren } from 'react';
import { Section, type SectionProps } from '../Section.component';
import { useTheme } from '@mui/material';

export interface ContrastSectionProps extends PropsWithChildren<SectionProps> {}

export const ContrastSection = ({
  sx,
  children,
  ...props
}: ContrastSectionProps) => {
  const theme = useTheme();
  const bgColor = theme.palette.primary.dark;
  const fontColor = theme.palette.primary.contrastText;
  return (
    <Section
      sx={{
        bgcolor: bgColor,
        color: fontColor,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Section>
  );
};

export default ContrastSection;
