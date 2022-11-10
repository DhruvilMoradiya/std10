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
        <Link to="/Science/Chapter1" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-1 રાસાયણિક પ્રક્રિયાઓ અને સમીકરણો" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Science/Chapter2" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-2 એસિડ, બેઇઝ અને ક્ષાર" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Science/Chapter3" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-3 ધાતુઓ અને અધાતુઓ" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Science/Chapter4" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-4 કાર્બન અને તેના સંયોજનો" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Science/Chapter5" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-5 તત્વોનું આવર્તી વર્ગીકરણ" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Science/Chapter6" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-6 જૈવિક ક્રિયાઓ" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Science/Chapter7" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-7 નિયત્રંણ અને સંકલન" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Science/Chapter8" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-8 સજીવો કેવી રીતે પ્રજનન કરે છે ?" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Science/Chapter9" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-9 આનુવંશિકતા અને ઉદ્વિકાસ" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Science/Chapter10" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-10 પ્રકાશ પરાવર્તન અને વક્રીભવન" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Science/Chapter11" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-11 માનવ આંખ અને રંગબેરંગી દુનિયા" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Science/Chapter12" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-12 વિદ્યુત" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Science/Chapter13" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-13 વિદ્યુતપ્રવાહ ની ચુમ્બકીય અસરો  " />
            </ListItemButton>
          </ListItem>
        </Link>

        <Divider light="false" />
        <Link to="/Science/Chapter14" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-14 ઉર્જાના સ્ત્રોતો" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Science/Chapter15" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-15 આપણું પર્યાવરણ" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider light="false" />
        <Link to="/Science/Chapter16" className="RouterLink">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <NavigateNextIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Chapter-15 નૈસર્ગીક સ્ત્રોત નું ટકાઉ પ્રબંધન" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Container>
  );
}
