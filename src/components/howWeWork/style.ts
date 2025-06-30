export const styles = {
  container: {
    position: "relative",
    width: "100%",
    py: 8,
    overflow: "visible",
  },
  title_howwework: {
    fontWeight: 900,
    marginTop: { xs: "10rem", md: "0" },
    color: "var(--color-primary)",
    textAlign: "center",
    fontSize: { xs: "2rem", md: "2.5rem" },
  },
  svgWrapper: {
    position: "absolute",
    top: 120,
    left: 0,
    width: "100%",
    height: 220,
    zIndex: 0,
    pointerEvents: "none",
    display: { xs: "none", md: "block" },
  },
  
  stepsContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 1,
    width: "100%",
    mt: { xs: 6, md: 8 },
  },
  step: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    mb: { xs: 6, md: 0 },
    width: { xs: "100%", md: "20%" },
    position: "relative",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
      "&:hover": {
      transform: "scale(1.4)",
    },
  },
  
  iconWrapper: {
    width: 180,
    height: 180,
    background: "#fff",
    border: "1px solid var(--color-primary)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5%",
    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
    mb: 2,
    zIndex: 2,
    overflow: "hidden", 
    position: "relative",
    cursor: "pointer",
  
    "&:hover img": {
      transform: "scale(1.2)",
    },
  },
  
  imgStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
    display: "block",
    transition: "transform 0.3s ease-in-out",
  },
  
  stepTitle: {
    fontWeight: 700,
    mb: 1,
    color: "#0A2342",
  },
  stepDesc: {
    color: "#555",
  },
  carouselWrapper: {
    width: 160,
    height: 160,
    overflow: "hidden",
    borderRadius: "5%",
    position: "relative",
  },
  carouselInner: {
    display: "flex",
    flexDirection: "column",
    height: 160 * 3, // altura total (3 imágenes)
    animation: "slideUp 9s infinite", // 3s por imagen
    position: "absolute",
    top: 0,
    left: 0,
  },
  carouselImage: {
    width: 160,
    height: 160,
    objectFit: "cover",
  },
};
