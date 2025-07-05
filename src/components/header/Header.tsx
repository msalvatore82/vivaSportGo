import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.svg';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { styles } from './style';
import LanguageSelector from '../languajeSelector/LanguageSelector';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);

    // Detectar sección activa
    const sections = ['howwework', 'experiences', 'contact'];
    const scrollPosition = currentScrollPos + 100; // Offset para el header

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
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
        <Box style={styles.headerLogo} onClick={() => navigate('/')}>
          <img src={logo} alt="logo" style={styles.headerLogoImage} 
          />
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
        <Box sx={styles.headerNav}>
          <Link
            href="#howwework"
            underline="none"
            className={activeSection === 'howwework' ? 'active' : ''}
            sx={styles.headerLink}
          >
            {t('how_we_work')}
          </Link>
          <Link
            href="#experiences"
            underline="none"
            className={activeSection === 'experiences' ? 'active' : ''}
            sx={styles.headerLink}
          >
            {t('experiences')}
          </Link>
          <Link
            href="#contact"
            underline="none"
            className={activeSection === 'contact' ? 'active' : ''}
            sx={styles.headerLink}
          >
            {t('contact_title')}
          </Link>
        </Box>
        <Box style={styles.languageSelector}>
          <LanguageSelector />
        </Box>
      </Toolbar>
    </AppBar>
  );
}