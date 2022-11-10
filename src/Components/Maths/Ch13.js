import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";

import { Container } from "@mui/system";
import { Link } from "react-router-dom";
function MCh13() {
  const URLs = [
    "Hda6PLfqNPQ",
    "zqXG1vHNTuY",
    "82c46aurNKo",
    "dQLanmgDwOA",
    "y9t3yuV5f1o",
    "6upqGY_W9Z8",
    "RvjNjoY7DUM",
    "fKNJtR5mkWU",
    "yGe0dA6xSFE",
    "uEqYWKpn-Bw",
    "lkHXzHCpi0M",
    "Nti1XFEbTtQ",
  ];

  const [lecNo, setLecNo] = useState("");

  const handleChange = (event) => {
    setLecNo(event.target.value);
  };

  let URLindex = Number(lecNo) - 1;

  let ytURL = "https://www.youtube.com/watch?v=" + URLs[URLindex];
  return (
    <>
      <div className="App">
        {/* <h1>Lec No is {lecNo}</h1> */}
        {/* <h1>URL is {ytURL}</h1> */}
        <Container maxWidth="sm">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{ paddingTop: 2, paddingBottom: 3 }}
          >
            <Link to="/">Home</Link>
            <Link to="/Maths">Maths</Link>
            {/* <Link to="/Maths/Chapter1">Chapter-1</Link> */}
            <Typography color="text.primary">Chapter-13</Typography>
            <Typography color="text.primary">Lecture-{lecNo}</Typography>
          </Breadcrumbs>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Lecture No.</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lecNo}
              label="Lecture No."
              onChange={handleChange}
            >
              <MenuItem value="1">Lecture-1</MenuItem>
              <MenuItem value="2">Lecture-2</MenuItem>
              <MenuItem value="3">Lecture-3</MenuItem>
              <MenuItem value="4">Lecture-4</MenuItem>
              <MenuItem value="5">Lecture-5</MenuItem>
              <MenuItem value="6">Lecture-6</MenuItem>
              <MenuItem value="7">Lecture-7</MenuItem>
              <MenuItem value="8">Lecture-8</MenuItem>
              <MenuItem value="9">Lecture-9</MenuItem>
              <MenuItem value="10">Lecture-10</MenuItem>
              <MenuItem value="11">Lecture-11</MenuItem>
              <MenuItem value="12">Lecture-12</MenuItem>
            </Select>
            <FormHelperText>Please select the Lecture.</FormHelperText>
          </FormControl>
        </Container>
        <Container
          maxWidth="sm"
          sx={{
            height: { xs: "225px", md: "320px" },
          }}
        >
          <ReactPlayer width="sm" height="100%" url={ytURL} controls alt={""} />
        </Container>
      </div>
    </>
  );
}

export default MCh13;
