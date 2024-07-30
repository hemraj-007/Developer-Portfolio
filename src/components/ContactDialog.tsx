// src/components/ContactDialog.tsx
import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import emailjs from "emailjs-com";
import { AccountCircle, Email, Message } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface ContactDialogProps {
  open: boolean;
  onClose: () => void;
}

const StyledDialog = styled(Dialog)({
  "& .MuiPaper-root": {
    borderRadius: "20px",
    backgroundColor: "#2c3e50",
    color: "#ffffff",
    width: "400px",
    height: "auto",
    maxWidth: "none",
  },
});

const StyledButton = styled(Button)(() => ({
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#00FF7F",
    color: "#2c3e50",
  },
}));

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Enter a valid email address"
    ),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message should be at least 10 characters")
    .max(500, "Message should not exceed 500 characters")
    .matches(
      /^[a-zA-Z0-9 !@#$%^&*()_+=-]*$/,
      "Message contains invalid characters"
    ),
});

const ContactDialog: React.FC<ContactDialogProps> = ({ open, onClose }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          values,
          import.meta.env.VITE_EMAILJS_USER_ID
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          enqueueSnackbar("Message sent successfully!", {
            variant: "success",
            action: (key) => (
              <IconButton
                aria-label="close"
                color="inherit"
                sx={{ p: 0.5 }}
                onClick={() => closeSnackbar(key)}
              >
                <CloseIcon />
              </IconButton>
            ),
            style: {
              backgroundColor: "#f0f0f0",
              color: "#000000",
              border: "1px solid #e0e0e0",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              fontFamily: "Arial, sans-serif",
            },
          });
          onClose();
        })
        .catch((error) => {
          console.log("FAILED...", error);
          enqueueSnackbar("Failed to send message. Please try again.", {
            variant: "error",
            action: (key) => (
              <IconButton
                aria-label="close"
                color="inherit"
                sx={{ p: 0.5 }}
                onClick={() => closeSnackbar(key)}
              >
                <CloseIcon />
              </IconButton>
            ),
            style: {
              backgroundColor: "#f0f0f0",
              color: "#000000",
              border: "1px solid #e0e0e0",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              fontFamily: "Arial, sans-serif",
            },
          });
        });
    },
  });

  useEffect(() => {
    if (open) {
      document.getElementById("root")!.style.filter = "blur(5px)";
    } else {
      document.getElementById("root")!.style.filter = "none";
    }

    return () => {
      document.getElementById("root")!.style.filter = "none";
    };
  }, [open]);

  return (
    <StyledDialog open={open} onClose={onClose}>
      <DialogTitle sx={{ color: "#ffffff", textAlign: "center" }}>
        Contact Me
      </DialogTitle>
      <DialogContent>
        <Typography
          variant="body2"
          align="center"
          sx={{ color: "#ffffff", marginBottom: "1rem" }}
        >
          Please fill out the form below to get in touch with me.
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: "0 1rem",
          }}
          onSubmit={formik.handleSubmit}
        >
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            InputLabelProps={{ style: { color: "#ffffff" } }}
            InputProps={{
              style: { color: "#ffffff" },
              sx: {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ffffff" },
                  "&:hover fieldset": { borderColor: "#00FF7F" },
                  "&.Mui-focused fieldset": { borderColor: "#00FF7F" },
                },
              },
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle style={{ color: "#ffffff" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputLabelProps={{ style: { color: "#ffffff" } }}
            InputProps={{
              style: { color: "#ffffff" },
              sx: {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ffffff" },
                  "&:hover fieldset": { borderColor: "#00FF7F" },
                  "&.Mui-focused fieldset": { borderColor: "#00FF7F" },
                },
              },
              startAdornment: (
                <InputAdornment position="start">
                  <Email style={{ color: "#ffffff" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="dense"
            label="Message"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            InputLabelProps={{ style: { color: "#ffffff" } }}
            InputProps={{
              style: { color: "#ffffff" },
              sx: {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ffffff" },
                  "&:hover fieldset": { borderColor: "#00FF7F" },
                  "&.Mui-focused fieldset": { borderColor: "#00FF7F" },
                },
              },
              startAdornment: (
                <InputAdornment position="start">
                  <Message style={{ color: "#ffffff" }} />
                </InputAdornment>
              ),
            }}
          />
          <DialogActions sx={{ justifyContent: "center" }}>
            <StyledButton onClick={onClose}>Cancel</StyledButton>
            <StyledButton type="submit">Send</StyledButton>
          </DialogActions>
        </Box>
      </DialogContent>
    </StyledDialog>
  );
};

export default ContactDialog;
