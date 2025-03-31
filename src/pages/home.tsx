import { Link } from 'react-router';
import { Box, Button, Container, Typography } from '@mui/material';


const Home = () => {
  return (
    <Container sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h4">Welcome to Little Lemon!</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>We are glad to have you. Book a table below:</Typography>
      <Box sx={{ mt: 3 }}>
        <Link to="/reserve" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">Reserve a Table</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Home
