import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { styles } from "./style";
import contact from "../../assets/contact.jpg";
import design from "../../assets/design.png";
import arrival from "../../assets/arrivals.png";
import celebration from "../../assets/celebration.png";
import play from "../../assets/playhockeymen.jpg";
import play2 from "../../assets/playRugbyMen.jpg";
import play3 from "../../assets/playFemHockey.jpg";

const steps = [
  {
    icon: contact,
    titleKey: "howwework_contact",
    descKey: "howwework_contact_desc",
  },
  {
    icon: design,
    titleKey: "howwework_design",
    descKey: "howwework_design_desc",
  },
  {
    icon: arrival,
    titleKey: "howwework_arrival",
    descKey: "howwework_arrival_desc",
  },
  {
    icon: play,
    titleKey: "howwework_play",
    descKey: "howwework_play_desc",
  },
  {
    icon: celebration,
    titleKey: "howwework_celebration",
    descKey: "howwework_celebration_desc",
  },
];

export default function HowWeWork() {
  const { t } = useTranslation();

  return (
    <Box sx={styles.container}>
      <Typography variant="h2" sx={styles.title_howwework} id="howwework">
        {t("how_we_work")}
      </Typography>

      <Box sx={styles.svgWrapper}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 60 180 Q 250 20 500 120 Q 750 220 940 40"
            stroke="#FF9800"
            strokeWidth="4"
            strokeDasharray="10,12"
            fill="none"
          />
        </svg>
      </Box>

      <Box sx={styles.stepsContainer}>
        {steps.map((step, idx) => (
          <Box key={step.titleKey} sx={styles.step}>
            <Box sx={styles.iconWrapper}>
              {step.titleKey === "howwework_play" ? (
                <Box sx={styles.carouselWrapper}>
                  <Box sx={styles.carouselInner}>
                    {[play, play2, play3].map((img, i) => (
                      <Box
                        key={i}
                        component="img"
                        src={img}
                        sx={styles.carouselImage}
                      />
                    ))}
                  </Box>
                </Box>
              ) : (
                <img
                  src={step.icon}
                  alt={t(step.titleKey)}
                  style={{
                    width: 160,
                    height: 160,
                    borderRadius: "5%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              )}
            </Box>

            <Typography variant="h6" sx={styles.stepTitle}>
              {`${idx + 1}. ${t(step.titleKey)}`}
            </Typography>
            <Typography variant="body2" sx={styles.stepDesc}>
              {t(step.descKey)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
