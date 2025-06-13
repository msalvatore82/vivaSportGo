import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo.svg';
import { styles } from './style.js';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../languajeSelector/LanguageSelector.js';

export default function Sidebar() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  return (
    <div style={styles.sidebarContainer}>
        <Box sx={styles.logoContainer}>
            <img src={logo} alt="logo" style={styles.logo} />
            <div
              style={{
                fontSize: '1.2rem',
                fontWeight: 900,
                letterSpacing: 2,
                fontFamily: "Montserrat, Arial, sans-serif",
                lineHeight: 1,
              }}
            >
              VIVASPORTGO<span style={{ color: "#00bfff" }}>+</span>
            </div>
        </Box>
        <Box sx={styles.languageSelectorContainer}>
            <LanguageSelector isSidebar={true} />
        </Box>
        <Box sx={styles.menuIconContainer}>
            <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
        </Box>

        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <List sx={styles.list}>
                <ListItem button onClick={toggleDrawer(false)}>
                    <ListItemText primary={t('welcome')} />
                </ListItem>
                <ListItem button onClick={toggleDrawer(false)}>
                    <ListItemText primary={t('services_title')} />
                </ListItem>
                <ListItem button onClick={toggleDrawer(false)}>
                    <ListItemText primary={t('contact_title')} />
                </ListItem>
            </List>
        </Drawer>
    </div>
  );
}