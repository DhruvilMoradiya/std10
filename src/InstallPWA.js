import { useEffect, useState } from "react";
import * as React from "react";

import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }
  return (
    <>
      {/* <button
        className="link-button"
        id="setup_button"
        aria-label="Install app"
        title="Install app"
        onClick={onClick}
      >
        Install
      </button> */}
      <div className="alert-for-pwa">
        <Collapse in={open}>
          <Alert
            className="alert-display"
            severity="error"
            action={
              <IconButton
                aria-label="close"
                // color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {" "}
            <AlertTitle>Install App</AlertTitle>
            Install app for better user experience. Click this button to
            install.
            <br />
            <div className="padding-for-alert">
              <Button onClick={onClick} variant="contained" color="error">
                Install
              </Button>
            </div>
          </Alert>
        </Collapse>
      </div>
    </>
  );
};

export default InstallPWA;
