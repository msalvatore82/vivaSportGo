import { Grid, TextField, Button, Card, CardContent, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styles } from './style.js';

export default function Contacto() {
  const { t } = useTranslation();

  return (
    <Box sx={styles.container}>
      <Typography gutterBottom variant="h3" align="center">
        {t('contact_title')}
      </Typography>
      <Grid>
        <Card sx={styles.card}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {t('contact_subtitle')}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              {t('contact_description')}
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    placeholder={t('contact_name')}
                    label={t('contact_name')}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    placeholder={t('contact_lastname')}
                    label={t('contact_lastname')}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder={t('contact_email')}
                    label={t('contact_email')}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    placeholder={t('contact_phone')}
                    label={t('contact_phone')}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label={t('contact_message')}
                    multiline
                    rows={4}
                    placeholder={t('contact_message_placeholder')}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    {t('contact_send')}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
}