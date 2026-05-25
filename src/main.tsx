import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SnackbarKey, SnackbarProvider } from "notistack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const notistackRef = React.createRef<SnackbarProvider>();
const onClickDismiss = (key: SnackbarKey) => () => {
  notistackRef.current?.closeSnackbar(key);
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={3500}
      ref={notistackRef}
      action={(key) => (
        <IconButton onClick={onClickDismiss(key)} size="small" color="inherit">
          <CloseIcon />
        </IconButton>
      )}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
