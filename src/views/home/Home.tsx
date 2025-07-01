import { Box, useMediaQuery } from "@mui/material";
import { styleHome } from "./style";
import HeroParallax from "../../components/heroParallax/HeroParallax.js";
import Header from "../../components/header/Header.js";
import Contacto from "../../components/contact/Contact.js";
import Sidebar from "../../components/sidebar/Sidebar.js";
import HowWeWork from "../../components/howWeWork/HowWeWork.js";
import Footer from "../../components/footer/Footer";
import Experiences from "../../components/experiences/Experiences.js";
import Counters from "../../components/counters/Counters.js";
import UpcomingTournaments from "../../components/upcomingTournaments/UpcomingTournaments";
import TrustedTeams from "../../components/trustedTeams/TrustedTeams";

export default function Home() {
    const isMobile = useMediaQuery('(max-width:768px)');
  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#fafbfc',
    }}>
      <Box sx={{ flex: 1 }}>
        <Box sx={styleHome.headerContainer}>
            {isMobile ? <Sidebar /> : <Header />}
        </Box>
        <Box sx={styleHome.sliderContainer}>
            <HeroParallax />
        </Box>
        <Box sx={styleHome.howWeWorkContainer}>
            <HowWeWork />
        </Box>
        <Box sx={styleHome.experiencesContainer}>
            <Experiences />
        </Box>
        <Box sx={styleHome.countersContainer}>
            <Counters />
        </Box>
        <UpcomingTournaments />
        <TrustedTeams />
        <Box sx={styleHome.contactContainer}>
            <Contacto />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}