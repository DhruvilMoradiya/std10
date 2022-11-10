import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Maths() {
  return (
    <Container className="MathsCon" maxWidth="sm">
      <Typography
        align="center"
        sx={{ paddingBottom: 2, paddingTop: 2, opacity: 0.5 }}
      >
        Click on the Chapter you want to study.
        <br />
        તમારે જે પ્રકરણનો અભ્યાસ કરવો છે તેના પર ક્લિક કરો.
      </Typography>
      <List>
        <Link to="/Maths/Chapter1" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-1 વાસ્તવિક સંખ્યા" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Maths/Chapter2" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-2 બહુપદીઓ" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Maths/Chapter3" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-3 દ્વિચલ સુરેખ સમીકરણો" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Maths/Chapter4" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-4 દ્વિઘાત સમીકરણ" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Maths/Chapter5" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-5 સમાંતર શ્રેણી" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Maths/Chapter6" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-6 ત્રિકોણ" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Maths/Chapter7" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-7 યામ ભૂમિતિ" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Maths/Chapter8" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-8 ત્રિકોણમિતીનો પરિચય" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Maths/Chapter9" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-9 ત્રિકોણમિતીનો ઉપયોગ" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Maths/Chapter10" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-10 વર્તુળ" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Maths/Chapter11" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-11 રચના" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Maths/Chapter12" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-12 વર્તુળ સંબંધિત ક્ષેત્રફળ" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Maths/Chapter13" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-13 પુષ્ઠ્ફળ અને ઘનફળ" />
            </ListItemButton>
          </ListItem>
        </Link>

        <Divider light="false" />
        <Link to="/Maths/Chapter14" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-14 આંકડાશાસ્ત્ર<" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Maths/Chapter15" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-15 સંભાવના" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
      </List>
    </Container>
  );
}
