
import React from "react";
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

const BookingForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    alert(`Reservation made for ${data.name} at ${data.time}`);
  };

  return (
    <Container sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
      <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 400 }}>
        <Typography variant="h5" gutterBottom>
          Reserve Your Table
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} aria-live="polite">
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={String(errors.name?.message || "")}
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
          />
          <TextField
            label="Date"
            type="date"
            fullWidth
            margin="normal"
            {...register("date", { required: "Date is required" })}
            error={!!errors.date}
            helperText={String(errors.date?.message || "")}
            aria-invalid={!!errors.date}
            aria-describedby="date-error"
            slotProps={{ inputLabel: { shrink: true } }}
          />
          <TextField
            label="Time"
            type="time"
            fullWidth
            margin="normal"
            {...register("time", { required: "Time is required" })}
            error={!!errors.time}
            helperText={String(errors.time?.message || "")}
            aria-invalid={!!errors.time}
            aria-describedby="time-error"
            slotProps={{ inputLabel: { shrink: true } }}
          />
          <TextField
            label="Party Size"
            type="number"
            fullWidth
            margin="normal"
            {...register("partySize", {
              required: "Party size is required",
              min: { value: 1, message: "Must be at least 1 person" },
              max: { value: 20, message: "Cannot exceed 20 people" },
            })}
            error={!!errors.partySize}
            helperText={String(errors.partySize?.message || "")}
            aria-invalid={!!errors.partySize}
            aria-describedby="partySize-error"
          />
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Button type="submit" variant="contained" color="primary">
              Reserve
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default BookingForm;
