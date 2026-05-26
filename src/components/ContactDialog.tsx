import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message should be at least 10 characters")
    .max(500, "Message should not exceed 500 characters"),
});

const ContactDialog: React.FC<ContactDialogProps> = ({ open, onClose }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema,
    onSubmit: (values) => {
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          values,
          import.meta.env.VITE_EMAILJS_USER_ID
        )
        .then(() => {
          enqueueSnackbar("Message sent successfully!", {
            variant: "success",
            action: (key) => (
              <IconButton
                aria-label="close"
                size="small"
                onClick={() => closeSnackbar(key)}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            ),
          });
          formik.resetForm();
          onClose();
        })
        .catch(() => {
          enqueueSnackbar("Failed to send message. Please try again.", {
            variant: "error",
          });
        });
    },
  });

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: "20px",
          bgcolor: "#ffffff",
          m: { xs: 2, sm: 3 },
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: 700, textAlign: "center", pb: 0 }}>
        Get in touch
      </DialogTitle>
      <DialogContent>
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          Share a bit about your role or project — I&apos;ll reply as soon as I can.
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Name"
            name="name"
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle color="action" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email color="action" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            fullWidth
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ alignSelf: "flex-start", mt: 1 }}>
                  <Message color="action" />
                </InputAdornment>
              ),
            }}
          />
          <DialogActions sx={{ px: 0, pb: 0, justifyContent: "center", gap: 1 }}>
            <Button onClick={onClose} color="inherit">
              Cancel
            </Button>
            <Button type="submit" variant="contained" disabled={formik.isSubmitting}>
              Send message
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
