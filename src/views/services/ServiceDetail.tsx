import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import servicesData from "../../components/services/servicesData"; 
import { Box, Typography } from "@mui/material";

export default function ServiceDetail() {
  const { serviceKey } = useParams();
  const { t } = useTranslation();

  const service = servicesData.find(s => s.key === serviceKey);

  if (!service) return <Typography variant="h4">Service not found</Typography>;

  return (
    <Box sx={{ maxWidth: 600, margin: "2rem auto", textAlign: "center" }}>
      <img src={service.image} alt={t(service.key)} style={{ width: "100%", borderRadius: 12 }} />
      <Typography variant="h3" sx={{ mt: 2 }}>{t(service.key)}</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>{t(service.descKey)}</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>{t(service.descLong)}</Typography>
    </Box>
  );
}
