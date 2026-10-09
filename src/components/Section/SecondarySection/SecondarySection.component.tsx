import { type PropsWithChildren } from 'react';
import { Section, type SectionProps } from '../Section.component';

export interface SecondarySectionProps extends PropsWithChildren<SectionProps> {}

export const SecondarySection = ({ sx, ...props }: SecondarySectionProps) => {
  return (
    <Section
      sx={[
        (theme) => ({
          bgcolor: theme.palette.background.paper,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

export default SecondarySection;
