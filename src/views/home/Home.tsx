import { Box, useMediaQuery } from "@mui/material";
import { styleHome } from "./style";
import SliderHome from "../../components/sliderHome/SliderHome.js";
import Header from "../../components/header/Header.js";
import Contacto from "../../components/contact/Contact.js";
import Sidebar from "../../components/sidebar/Sidebar.js";
import Services from "../../components/services/Services.js";

export default function Home() {
    const isMobile = useMediaQuery('(max-width:768px)');
  return (
    <Box sx={styleHome.container}>
        <Box sx={styleHome.headerContainer}>
            {isMobile ? <Sidebar /> : <Header />}
        </Box>
        <Box sx={styleHome.sliderContainer}>
            <SliderHome />
        </Box>
        <Box sx={styleHome.serviciosContainer}>
            <Services />
        </Box>
        <Box sx={styleHome.contactContainer}>
            <Contacto />
        </Box>
      
    </Box>
    
  );
}