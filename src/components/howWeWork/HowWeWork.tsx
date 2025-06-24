import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { styles } from "./style";

const steps = [
  {
    icon: "/icons/contact.svg", // o un icono de MUI
    titleKey: "howwework_contact",
    descKey: "howwework_contact_desc",
  },
  {
    icon: "/icons/design.svg",
    titleKey: "howwework_design",
    descKey: "howwework_design_desc",
  },
  {
    icon: "/icons/arrival.svg",
    titleKey: "howwework_arrival",
    descKey: "howwework_arrival_desc",
  },
  {
    icon: "/icons/celebration.svg",
    titleKey: "howwework_celebration",
    descKey: "howwework_celebration_desc",
  },
];

export default function HowWeWork() {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h2" sx={styles.title_howwework} id="howwework">
        {t("how_we_work")}
      </Typography>
      <Box sx={styles.container}>
        {steps.map((step, idx) => (
          <Box key={step.titleKey} sx={styles.step}>
            <img src={step.icon} alt={t(step.titleKey)} style={styles.icon} />
            <Typography variant="h6" sx={styles.title}>
              {t(step.titleKey)}
            </Typography>
            <Typography variant="body2" sx={styles.desc}>
              {t(step.descKey)}
            </Typography>
            {idx < steps.length - 1 && <Box sx={styles.arrow} />}
          </Box>
        ))}
      </Box>
    </>
  );
}
