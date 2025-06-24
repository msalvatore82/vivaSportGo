import { useRef, useState } from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styles } from './style.ts';
import emailjs from '@emailjs/browser';

export default function Contacto() {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(false);
    setError(false);

    if (!form.current) return;

    const formData = new FormData(form.current);
    if (formData.get('website')) {
      setError(true);
      return;
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        setSent(true);
        setDisabled(true);
        if (form.current) form.current.reset();
        setTimeout(() => setDisabled(false), 60000);
      },
      () => setError(true)
    );
  };

  return (
    <Box id="contact" sx={styles.container}>
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
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="website"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="user_name"
                    placeholder={t('contact_name')}
                    label={t('contact_name')}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="user_lastname"
                    placeholder={t('contact_lastname')}
                    label={t('contact_lastname')}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="user_email"
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
                    name="user_phone"
                    type="tel"
                    placeholder={t('contact_phone')}
                    label={t('contact_phone')}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="message"
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
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={disabled}
                  >
                    {t('contact_send')}
                  </Button>
                </Grid>
                {sent && (
                  <Grid item xs={12}>
                    <Typography color="success.main">{t('contact_success')}</Typography>
                  </Grid>
                )}
                {error && (
                  <Grid item xs={12}>
                    <Typography color="error.main">{t('contact_error')}</Typography>
                  </Grid>
                )}
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
}