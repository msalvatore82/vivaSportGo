// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import home1 from '../../assets/GALERIA_Sports And Travel Europe_1.webp';
import home2 from '../../assets/GALERIA_Sports And Travel Europe_2.webp';
import home3 from '../../assets/GALERIA_Sports And Travel Europe_3.webp';
import home4 from '../../assets/GALERIA_Sports And Travel Europe_4.webp';

import { Autoplay } from 'swiper/modules';
import { styles } from './style';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    image: home1,
    textKey: 'slide1_text',
  },
  {
    image: home2,
    textKey: 'slide2_text',
  },
  {
    image: home3,
    textKey: 'slide3_text',
  },
  {
    image: home4,
    textKey: 'slide4_text',
  },
];

export default function SliderHome() {
  const { t } = useTranslation();

  return (
    <Box sx={styles.swiperContainer}>
      <Swiper
        style={styles.swiper}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} style={{
            position: "relative" as const,
            textAlign: "center" as const
          }}>
            <img 
              src={slide.image} 
              alt={`Slide ${index + 1}`} 
              style={{
                width: "100%",
                height: "100vh",
                objectFit: "cover" as const
              }} 
            />
            <Typography sx={styles.slideText}>{t(slide.textKey)}</Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

