import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.svg';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { styles } from './style';
import LanguageSelector from '../languajeSelector/LanguageSelector';

export default function Header() {
  const { t } = useTranslation();

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevScrollPos]);

  return (
    <AppBar
      style={{
        ...styles.appBar,
        transition: 'transform 0.3s',
        transform: visible ? 'translateY(0)' : 'translateY(-110%)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
      }}
    >
      <Toolbar sx={styles.header}>
        <Box style={styles.headerLogo}>
          <img src={logo} alt="logo" style={styles.headerLogoImage} />
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
        <Box style={styles.headerNav}>
          <a href="#servicios" style={styles.headerLink}>{t('services_title')}</a>
          <a href="#proceso" style={styles.headerLink}>{t('process_title')}</a>
          <a href="#contacto" style={styles.headerLink}>{t('contact_title')}</a>
        </Box>
        <Box style={styles.languageSelector}>
          <LanguageSelector />
        </Box>
      </Toolbar>
    </AppBar>
  );
}