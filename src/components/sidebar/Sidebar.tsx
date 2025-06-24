import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo.svg';
import { styles } from './style';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../languajeSelector/LanguageSelector.js';
import Footer from '../footer/Footer.js';
import WeatherWidget from '../weatherWidget/WeatherWidget.js';

export default function Sidebar() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <Box sx={styles.sidebarContainer}>
      <Box sx={styles.logoContainer}>
        <img src={logo} alt="logo" style={styles.logo} />
        <Box
          component="span"
          sx={{
            fontSize: '1.2rem',
            fontWeight: 900,
            letterSpacing: 2,
            fontFamily: 'Montserrat, Arial, sans-serif',
            lineHeight: 1,
            ml: 1,
          }}
        >
          VIVASPORTGO<span style={{ color: '#00bfff' }}>+</span>
        </Box>
      </Box>
      <Box sx={styles.languageSelectorContainer}>
        <LanguageSelector isSidebar={true} />
      </Box>
      <Box sx={styles.menuIconContainer}>
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: 350 }
        }}
      >
        <List sx={styles.list}>
          <ListItem button onClick={() => handleNavigation('howwework')}>
            <ListItemText primary={t('how_we_work')} primaryTypographyProps={styles.drawerLink} />
          </ListItem>
          <ListItem button onClick={() => handleNavigation('experiences')}>
            <ListItemText primary={t('experiences')} primaryTypographyProps={styles.drawerLink} />
          </ListItem>
          <ListItem button onClick={() => handleNavigation('contact')}>
            <ListItemText primary={t('contact_title')} primaryTypographyProps={styles.drawerLink} />
          </ListItem>
        </List>
        <Box sx={styles.weatherContainer}>
          <WeatherWidget />
        </Box>
        <Box sx={styles.footerContainer}>
          <Footer />
        </Box>
      </Drawer>
    </Box>
  );
}