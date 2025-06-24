import { Box, useMediaQuery } from "@mui/material";
import { styleHome } from "./style";
import HeroParallax from "../../components/heroParallax/HeroParallax.js";
import Header from "../../components/header/Header.js";
import Contacto from "../../components/contact/Contact.js";
import Sidebar from "../../components/sidebar/Sidebar.js";
import HowWeWork from "../../components/howWeWork/HowWeWork.js";

export default function Home() {
    const isMobile = useMediaQuery('(max-width:768px)');
  return (
    <Box sx={styleHome.container}>
        <Box sx={styleHome.headerContainer}>
            {isMobile ? <Sidebar /> : <Header />}
        </Box>
        <Box sx={styleHome.sliderContainer}>
            <HeroParallax />
        </Box>
        <Box sx={styleHome.serviciosContainer}>
            <HowWeWork />
        </Box>
        <Box sx={styleHome.contactContainer}>
            <Contacto />
        </Box>
      
    </Box>
    
  );
}