import { useEffect, useRef, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styles } from "./style.ts";
// Importo iconos de Material UI
import GroupsIcon from '@mui/icons-material/Groups';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
interface CounterItem {
  label: string; // clave i18n
  target: number;
  icon: React.ElementType;
}

const countersData: CounterItem[] = [
  { label: 'counters_teamsTrustedUs', target: 127, icon: GroupsIcon},
  { label: 'counters_playersImpacted', target: 3512, icon: SportsSoccerIcon },
  { label: 'counters_queriesAnswered', target: 321, icon: QuestionAnswerIcon },
  { label: 'counters_countriesReached', target: 12, icon: TravelExploreOutlinedIcon},
];

const Counter = ({ target }: { target: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<number>(0);
    const animationFrameId = useRef<number | null>(null);
  
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
        if (animationFrameId.current !== null) {
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
      <Grid container spacing={0} justifyContent="center" alignItems="stretch">
        {countersData.map((item, index) => {
          const Icon = item.icon;
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{
                ...styles.counterItem,
                ...(index !== countersData.length - 1 ? styles.borderRight : {}),
              }}
            >
              <Icon sx={styles.icon} />
              <Counter target={item.target} />
              <Typography variant="subtitle1" sx={styles.counterTitle}>{t(item.label)}</Typography>
            </Grid>
          );
        })}
      </Grid>
    
    </Box>
  );
};

export default Counters;
