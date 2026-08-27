import { type PropsWithChildren } from 'react';
import { Section, type SectionProps } from '../Section.component';

export interface ContrastSectionProps extends PropsWithChildren<SectionProps> {}

export const ContrastSection = ({ sx, ...props }: ContrastSectionProps) => {
  return (
    <Section
      sx={[
        (theme) => ({
          bgcolor: theme.palette.primary.dark,
          color: theme.palette.primary.contrastText,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

export default ContrastSection;
