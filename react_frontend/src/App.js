import React from "react";
import "./App.css";
import ProjectRoutes from "./Routes";
import { SnackbarProvider } from "notistack";
import { MdCancel } from "react-icons/md";
import { IconButton } from "@mui/material";

function App() {
  const notistackRef = React.createRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };
  return (
    <>
      <SnackbarProvider
        ref={notistackRef}
        action={(key) => (
          <IconButton onClick={onClickDismiss(key)}>
            <MdCancel />
          </IconButton>
        )}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <ProjectRoutes />
      </SnackbarProvider>
    </>
  );
}

export default App;
