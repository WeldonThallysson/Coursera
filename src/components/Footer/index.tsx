import { Paper, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        textAlign: "center",
        mt: 5,
        background: "#333",
        color: "#fff",
      }}
    >
      <Typography variant="body2">
        &copy; 2025 Little Lemon Restaurant. All rights reserved.
      </Typography>
    </Paper>
  );
};

export default Footer;
