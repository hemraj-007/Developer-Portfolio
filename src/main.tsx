import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SnackbarProvider } from "notistack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const notistackRef = React.createRef<any>();
const onClickDismiss = (key: any) => () => {
  notistackRef.current.closeSnackbar(key);
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
