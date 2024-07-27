// src/components/ContactDialog.tsx
import React, { useState, useEffect } from "react";
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

const ContactDialog: React.FC<ContactDialogProps> = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_un3r2oe", // Replace with your EmailJS service ID
        "template_dg8pi3n", // Replace with your EmailJS template ID
        formData,
        "gWCWHsKHJULQONaMw" // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        onClose();
      })
      .catch((error) => {
        console.log("FAILED...", error);
      });
  };

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
          onSubmit={handleSubmit}
        >
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "#ffffff" } }} // Set label color to white
            InputProps={{
              style: { color: "#ffffff" }, // Set input text color to white
              sx: {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ffffff" },
                  "&:hover fieldset": { borderColor: "#00FF7F" },
                  "&.Mui-focused fieldset": { borderColor: "#00FF7F" },
                },
              }, // Change border color
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
            value={formData.email}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "#ffffff" } }} // Set label color to white
            InputProps={{
              style: { color: "#ffffff" }, // Set input text color to white
              sx: {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ffffff" },
                  "&:hover fieldset": { borderColor: "#00FF7F" },
                  "&.Mui-focused fieldset": { borderColor: "#00FF7F" },
                },
              }, // Change border color
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
            value={formData.message}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "#ffffff" } }} // Set label color to white
            InputProps={{
              style: { color: "#ffffff" }, // Set input text color to white
              sx: {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ffffff" },
                  "&:hover fieldset": { borderColor: "#00FF7F" },
                  "&.Mui-focused fieldset": { borderColor: "#00FF7F" },
                },
              }, // Change border color
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
