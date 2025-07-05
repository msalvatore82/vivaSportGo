import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Paper, Button, Grid, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { styles } from "./style";
import torneo1 from "../../assets/paella-cup.webp";
import torneo2 from "../../assets/mal-de-altura.webp";
import torneo3 from "../../assets/EGORF-2024.webp";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import { useEffect } from "react";
import egorf1 from "../../assets/egorf/egorf-1.webp";
import egorf2 from "../../assets/egorf/egorf-2.webp";
import egorf4 from "../../assets/egorf/egorf-4.webp";
import egorf5 from "../../assets/egorf/egorf-5.webp";
import egorf6 from "../../assets/egorf/egorf-6.webp";
import egorf7 from "../../assets/egorf/egorf-7.webp";
import egorf8 from "../../assets/egorf/egorf-8.webp";
import egorf9 from "../../assets/egorf/egorf-9.webp";
import egorf10 from "../../assets/egorf/egorf-10.webp";
import egorf11 from "../../assets/egorf/egorf-11.webp";
import egorf12 from "../../assets/egorf/egorf-12.webp";
import egorf13 from "../../assets/egorf/egorf-13.webp";
import paella1 from "../../assets/paella/paella-1.webp";
import paella2 from "../../assets/paella/paella-2.webp";
import paella3 from "../../assets/paella/paella-3.webp";
import paella4 from "../../assets/paella/paella-4.webp";
import paella5 from "../../assets/paella/paella-5.webp";
import paella6 from "../../assets/paella/paella-6.webp";
import paella7 from "../../assets/paella/paella-7.webp";
import paella8 from "../../assets/paella/paella-8.webp";
import mal1 from "../../assets/mal-altura/malaltura-1.webp";
import mal2 from "../../assets/mal-altura/malaltura-2.webp";
import mal3 from "../../assets/mal-altura/malaltura-3.webp";
import mal4 from "../../assets/mal-altura/malaltura-4.webp";
import mal5 from "../../assets/mal-altura/malaltura-5.webp";
import mal6 from "../../assets/mal-altura/malaltura-6.webp";
import mal7 from "../../assets/mal-altura/malaltura-7.webp";
import mal8 from "../../assets/mal-altura/malaltura-8.webp";
import mal9 from "../../assets/mal-altura/malaltura-9.webp";
import mal10 from "../../assets/mal-altura/malaltura-10.webp";
import mal11 from "../../assets/mal-altura/malaltura-11.webp";
import mal12 from "../../assets/mal-altura/malaltura-12.webp";
import mal13 from "../../assets/mal-altura/malaltura-13.webp";

const tournaments = [
  {
    slug: "paella-cup-2026-hockey",
    image: torneo1,
    video: "https://www.youtube.com/embed/STdpbiXB7X0",
    gallery: [paella1, paella2, paella3, paella4, paella5, paella6, paella7, paella8],
    title: "tournament_paella_title",
    description: "tournament_paella_description",
    preregister: "tournament_paella_preregister",
    signup: "tournament_paella_signup_btn",
    whatToExpectTitle: "tournament_paella_expect_title",
    whatToExpect: [
      "tournament_paella_expect_1",
      "tournament_paella_expect_2",
      "tournament_paella_expect_3",
    ],
    programTitle: "tournament_paella_program_title",
    program: [
      {
        day: "tournament_paella_program_arrival",
        text: "tournament_paella_program_arrival_desc",
      },
      {
        day: "tournament_paella_program_wed",
        text: "tournament_paella_program_wed_desc",
      },
      {
        day: "tournament_paella_program_fri",
        text: "tournament_paella_program_fri_desc",
      },
      {
        day: "tournament_paella_program_sat",
        text: "tournament_paella_program_sat_desc",
      },
      {
        day: "tournament_paella_program_sun",
        text: "tournament_paella_program_sun_desc",
      },
      {
        day: "tournament_paella_program_mon",
        text: "tournament_paella_program_mon_desc",
      },
    ],
    back: "back",
  },
  {
    slug: "EGORF-2026-rugby",
    image: torneo3,
    video: "https://www.youtube.com/embed/nr1rde14MR4",
    gallery: [egorf1, egorf2, egorf4, egorf5, egorf6, egorf7, egorf8, egorf9, egorf10, egorf11, egorf12, egorf13],
    title: "tournament_egorf_title",
    description: "tournament_egorf_description",
    preregister: "tournament_egorf_preregister",
    signup: "tournament_egorf_signup_btn",
    whatToExpectTitle: "tournament_egorf_expect_title",
    whatToExpect: [
      "tournament_egorf_expect_1",
      "tournament_egorf_expect_2",
      "tournament_egorf_expect_3",
    ],
    programTitle: "tournament_egorf_program_title",
    program: [
      {
        day: "tournament_egorf_program_thu",
        text: "tournament_egorf_program_thu_desc",
      },
      {
        day: "tournament_egorf_program_fri",
        text: "tournament_egorf_program_fri_desc",
      },
      {
        day: "tournament_egorf_program_sat",
        text: "tournament_egorf_program_sat_desc",
      },
      {
        day: "tournament_egorf_program_sun",
        text: "tournament_egorf_program_sun_desc",
      },
    ],
    back: "back",
  },
  {
    slug: 'mal-de-altura-2026-rugby',
    image: torneo2, 
    video: "https://www.youtube.com/embed/8hJR8nD9tMQ",
    gallery: [mal1, mal2, mal3, mal4, mal5, mal6, mal7, mal8, mal9, mal10, mal11, mal12, mal13],
    title: "tournament_mal_altura_title",
    description: "tournament_mal_altura_description",
    preregister: "tournament_mal_altura_preregister",
    signup: "tournament_mal_altura_signup_btn",
    whatToExpectTitle: "tournament_mal_altura_expect_title",
    whatToExpect: [
      "tournament_mal_altura_expect_1",
      "tournament_mal_altura_expect_2",
      "tournament_mal_altura_expect_3",
    ],
    programTitle: "tournament_mal_altura_program_title",
    program: [
      {
        day: "tournament_mal_altura_program_day1",
        text: "tournament_mal_altura_program_day1_desc",
      },
      {
        day: "tournament_mal_altura_program_day2",
        text: "tournament_mal_altura_program_day2_desc",
      },
    ],
    back: "back",
  },
  // Puedes agregar más torneos aquí con su slug y datos
];

export default function TournamentDetail() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { tournamentSlug } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Buscar el torneo por slug
  const torneo = tournaments.find((t) => t.slug === tournamentSlug);
  
  // Si no encuentra el torneo, mostrar error
  if (!torneo) {
    return (
      <Box>
        {isMobile ? <Sidebar /> : <Header />}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '60vh',
          textAlign: 'center',
          px: 2,
        }}>
          <Typography variant="h4" sx={{ mb: 2, color: 'var(--color-text)' }}>
              Torneo no encontrado
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'var(--color-text)' }}>
            El torneo "{tournamentSlug}" no existe o ha sido eliminado.
          </Typography>
          <Button 
            variant="contained" 
            onClick={() => navigate('/')}
            sx={{
              background: 'var(--color-accent)',
              color: 'var(--color-bg)',
              '&:hover': {
                background: 'var(--color-primary)',
              }
            }}
          >
            {t("back")}
          </Button>
        </Box>
        <Footer />
      </Box>
    );
  }

  return (
    <Box>
        {isMobile ? <Sidebar /> : <Header />}
        <Box sx={{ ...styles.hero, backgroundImage: `url(${torneo.image})` }}>
        <Paper elevation={4} sx={styles.heroCard}>
          <Typography variant="h3" sx={styles.heroTitle}>
            {t(torneo.title)}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            {t(torneo.description)}
          </Typography>
          <Typography variant="body1" sx={styles.heroHighlight}>
            {t(torneo.preregister)}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={styles.heroButton}
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                  setTimeout(() => {
                    const messageInput = document.querySelector(
                      'textarea[name="message"]'
                    ) as HTMLTextAreaElement;
                    if (messageInput) {
                      messageInput.value = t("contact_tournament_message", { tournament: t(torneo.title) });
                      messageInput.dispatchEvent(new Event("input", { bubbles: true }));
                      messageInput.focus();
                    }
                  }, 800);
                }
              }, 200);
            }}
          >
            {t(torneo.signup)}
          </Button>
        </Paper>
      </Box>

      {/* Sección principal: What to expect y Programa */}
      <Box sx={styles.mainSection}>
        <Grid container spacing={6}>
          {/* What to expect */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={styles.expectTitle}>
              {t(torneo.whatToExpectTitle)}
            </Typography>
            {torneo.whatToExpect.map((key, idx) => (
              <Typography key={idx} variant="body1" sx={styles.expectText}>
                {t(key)}
              </Typography>
            ))}
            {/* Video de YouTube y una imagen debajo del último bloque de expect */}
            <Box sx={{ mt: 3, textAlign: "center" }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 480,
                  mx: "auto",
                  aspectRatio: "16/9",
                  mb: 2,
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={torneo.video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ borderRadius: 12, width: "100%", height: "100%" }}
                />
              </Box>
              <Box sx={{ width: "100%", maxWidth: 480, mx: "auto" }}>
                <img
                  src={torneo.gallery[0]}
                  alt="Imagen extra"
                  style={{ width: "100%", borderRadius: 12 }}
                />
              </Box>
            </Box>
          </Grid>
          {/* Programa tipo timeline */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={styles.programTitle}>
              {t(torneo.programTitle)}
            </Typography>
            <Box sx={styles.timelineWrapper}>
              {/* Línea vertical timeline */}
              <Box sx={styles.timelineLine} />
              {torneo.program.map((item, idx) => (
                <Box key={idx} sx={{ position: "relative", mb: 3 }}>
                  {/* Punto del timeline */}
                  <Box sx={styles.timelineDot} />
                  <Paper sx={styles.timelineCard}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      {t(item.day)}
                    </Typography>
                    <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
                      {t(item.text)}
                    </Typography>
                  </Paper>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Galería de fotos */}
      <Box sx={styles.masonryGallery}>
        {torneo.gallery.map((img, idx) => (
          <Box key={idx} sx={styles.masonryItem}>
            <img
              src={img}
              alt={`Imagen galería ${idx + 1}`}
              style={{ width: "100%", borderRadius: 8, marginBottom: 16 }}
            />
          </Box>
        ))}
      </Box>

      {/* Botón volver */}
      <Box sx={styles.backButtonSection}>
        <Button 
          variant="text" 
          onClick={() => navigate(-1)}
          sx={{
            color: 'var(--color-primary)',
            fontWeight: 600,
            '&:hover': {
              background: 'rgba(0, 191, 255, 0.1)',
            }
          }}
        >
          ← {t(torneo.back)}
        </Button>
      </Box>
      <Footer />
    </Box>
  );
}
