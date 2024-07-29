/* eslint-disable react/prop-types */
import { Box, Typography, TextField } from "@mui/material";

const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
  return (
    <Box m="30px 0">
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          Contact Info
        </Typography>
        <TextField
          fullwidth
          type="text"
          label="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={{ gridColumn: "span 4", marginBottom: "15px" }}
        />
        <TextField
          fullwidth
          type="text"
          label="PhoneNumber"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phoneNumber}
          name="phoneNumber"
          error={!!touched.phoneNumber && !!errors.phoneNumber}
          helperText={touched.phoneNumber && errors.phoneNumber}
          sx={{ gridColumn: "span 4", marginBottom: "15px" }}
        />
      </Box>
    </Box>
  );
};

export default Payment;
