import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

import InstallPWA from "../InstallPWA";

export default function Home() {
  return (
    <>
      <InstallPWA />
      {/* <div className="alert-for-pwa">
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
              <Button variant="contained" color="error">
                Install
              </Button>
            </div>
          </Alert>
        </Collapse>
      </div> */}
      <Container maxWidth="sm">
        <div className="padding-for-home">
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Maths
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn Maths from best teachers in Gujarat. Click given button to
                learn.
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/Maths">
                <Button variant="contained" size="small">
                  Learn
                </Button>
              </Link>
            </CardActions>
          </Card>
        </div>
        <div className="padding-for-home">
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Science
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn Science from best teachers in Gujarat. Click given button
                to learn.
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/Science">
                <Button variant="contained" size="small">
                  Learn
                </Button>
              </Link>
            </CardActions>
          </Card>
        </div>
      </Container>
    </>
  );
}
