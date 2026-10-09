import { type PropsWithChildren } from 'react';
import { Section, type SectionProps } from '../Section.component';

export interface PrimarySectionProps extends PropsWithChildren<SectionProps> {}

export const PrimarySection = ({ sx, ...props }: PrimarySectionProps) => {
  return (
    <Section
      sx={[
        (theme) => ({
          bgcolor: theme.palette.background.default,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

export default PrimarySection;
