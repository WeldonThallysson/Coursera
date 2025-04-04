import React from 'react';
import { Paper, Typography } from "@mui/material";

const Header = () => {
  return (
    <Paper
      elevation={3}
      sx={{ p: 3, textAlign: "center", background: "#333", color: "#fff" }}
    >
      <Typography variant="h3">Little Lemon Restaurant</Typography>
      <Typography variant="subtitle1">
        Delicious food and great ambiance!
      </Typography>
    </Paper>
  );
};

export default Header;
