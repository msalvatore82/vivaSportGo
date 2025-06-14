import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { styles } from './style';

interface CardsProps {
  image?: string;
  title?: string;
  description?: string;
}

export default function Cards({
  image = '',
  title = 'Titulo',
  description = 'Descripción',
}: CardsProps) {
  return (
    <Card
      sx={{
        ...styles.card,
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover .card-img-zoom': {
          transform: 'scale(1.1)',
        },
      }}
    >
      <CardMedia
        className="card-img-zoom"
        sx={styles.cardImg}
        component="img"
        height="194"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={styles.title}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={styles.description}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}