import {
  Box,
  Card,
  CardMedia,
  Collapse,
  Typography,
} from '@mui/material';
import type { SkillWithCategory } from '../../assets/skills';
import { useEffect, useRef, useState } from 'react';

export interface SingleSkillCardProps {
  skill: SkillWithCategory;
}

export const SingleSkillCard = ({
  skill,
}: SingleSkillCardProps) => {
  const cardRef = useRef<HTMLElement>(null);
  const [collapsedState, setCollapsedState] =
    useState<boolean>(true);

  useEffect(() => {
    const card = cardRef.current;
    const handlemouseenter = () => setCollapsedState(false);
    const handlemouseleave = () => setCollapsedState(true);
    if (card) {
      card.addEventListener('mouseenter', handlemouseenter);
      card.addEventListener('mouseleave', handlemouseleave);
    }

    return () => {
      card?.removeEventListener(
        'mouseenter',
        handlemouseenter,
      );
      card?.removeEventListener(
        'mouseleave',
        handlemouseleave,
      );
    };
  }, [cardRef.current]);

  return (
    <Box ref={cardRef}>
      <Card variant='elevation'>
        <Box
          // component={Paper}
          sx={{
            padding: 2,
          }}
        >
          <CardMedia
            image={skill.icon}
            sx={{
              width: '100%',
              aspectRatio: 1,
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: '0',
            width: '100%',
          }}
        >
          <Collapse
            in={!collapsedState}
            // collapsedSize={60}
          >
            <Box
              component={Card}
              sx={(theme) => ({
                padding: 2,
                // width: '100%'
                backgroundColor:
                  theme.palette.background.default,
              })}
            >
              <Typography variant='h4'>
                {skill.shortname}
              </Typography>
              <Typography variant='body1'>
                {skill.name}
              </Typography>
              <Typography variant='caption'>
                {skill.category?.name}
              </Typography>
            </Box>
          </Collapse>
        </Box>
      </Card>
    </Box>
  );
};

export default SingleSkillCard;
