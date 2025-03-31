import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

const ReservationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    alert(`Reservation made for ${data.name} at ${data.time}`);
  };

  return (
    <Container sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
      <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 400 }}>
        <Typography variant="h5" gutterBottom>Reserve Your Table</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField 
            label="Name" 
            fullWidth 
            margin="normal"
            {...register('name', { required: 'Name is required' })} 
            error={!!errors.name} 
             
          />
          <TextField 
            label="Date" 
            type="date" 
            fullWidth 
            margin="normal"
            {...register('date', { required: 'Date is required' })} 
            error={!!errors.date} 
          />
          <TextField 
            label="Time" 
            type="time" 
            fullWidth 
            margin="normal"
            {...register('time', { required: 'Time is required' })} 
            error={!!errors.time} 
          />
          <TextField 
            label="Party Size" 
            type="number" 
            fullWidth 
            margin="normal"
            {...register('partySize', { required: 'Party size is required', min: 1 })} 
            error={!!errors.partySize} 
          />
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Button type="submit" variant="contained" color="primary">Reserve</Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};


export default ReservationForm