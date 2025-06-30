import React, { useEffect, useRef, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styles } from "./style.ts";

interface CounterItem {
  label: string; // clave i18n
  target: number;
}

const countersData: CounterItem[] = [
  { label: 'counters_teamsTrustedUs', target: 127 },
  { label: 'counters_playersImpacted', target: 3512 },
  { label: 'counters_queriesAnswered', target: 321 },
  { label: 'counters_countriesReached', target: 12 },
];

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const step = target / 60; // animación en ~1 segundo (60 frames)
    const update = () => {
      ref.current += step;
      if (ref.current < target) {
        setCount(Math.ceil(ref.current));
        animationFrameId.current = requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    };

    animationFrameId.current = requestAnimationFrame(update);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [target]);

  return (
    <Typography variant="h3" sx={styles.counterNumber}>
      {count.toLocaleString()}
    </Typography>
  );
};

const Counters = () => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.countersSection}>
      <Grid container spacing={4} justifyContent="center">
        {countersData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={styles.counterItem}>
            <Counter target={item.target} />
            <Typography variant="subtitle1">{t(item.label)}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Counters;
