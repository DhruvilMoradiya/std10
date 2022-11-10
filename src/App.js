import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home";
import Maths from "./Components/Maths/Maths";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sci from "./Components/Sci/Sci";
import NavBar from "./Components/Navbar";
import MCh1 from "./Components/Maths/Ch1";
import MCh2 from "./Components/Maths/Ch2";
import MCh3 from "./Components/Maths/Ch3";
import MCh4 from "./Components/Maths/Ch4";
import MCh5 from "./Components/Maths/Ch5";
import MCh6 from "./Components/Maths/Ch6";
import MCh7 from "./Components/Maths/Ch7";
import MCh8 from "./Components/Maths/Ch8";
import MCh9 from "./Components/Maths/Ch9";
import MCh10 from "./Components/Maths/Ch10";
import MCh11 from "./Components/Maths/Ch11";
import MCh12 from "./Components/Maths/Ch12";
import MCh13 from "./Components/Maths/Ch13";
import MCh14 from "./Components/Maths/Ch14";
import MCh15 from "./Components/Maths/Ch15";
import SCh1 from "./Components/Sci/Ch1";
import SCh2 from "./Components/Sci/Ch2";
import SCh3 from "./Components/Sci/Ch3";
import SCh4 from "./Components/Sci/Ch4";
import SCh5 from "./Components/Sci/Ch5";
import SCh6 from "./Components/Sci/Ch6";
import SCh7 from "./Components/Sci/Ch7";
import SCh8 from "./Components/Sci/Ch8";
import SCh9 from "./Components/Sci/Ch9";
import SCh10 from "./Components/Sci/Ch10";
import SCh11 from "./Components/Sci/Ch11";
import SCh12 from "./Components/Sci/Ch12";
import SCh13 from "./Components/Sci/Ch13";
import SCh14 from "./Components/Sci/Ch14";
import SCh15 from "./Components/Sci/Ch15";
import SCh16 from "./Components/Sci/Ch16";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Hind Vadodara", "cursive"].join(","),
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="content">
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Maths" element={<Maths />} />
              <Route path="Maths/Chapter1" element={<MCh1 />} />
              <Route path="Maths/Chapter2" element={<MCh2 />} />
              <Route path="Maths/Chapter3" element={<MCh3 />} />
              <Route path="Maths/Chapter4" element={<MCh4 />} />
              <Route path="Maths/Chapter5" element={<MCh5 />} />
              <Route path="Maths/Chapter6" element={<MCh6 />} />
              <Route path="Maths/Chapter7" element={<MCh7 />} />
              <Route path="Maths/Chapter8" element={<MCh8 />} />
              <Route path="Maths/Chapter9" element={<MCh9 />} />
              <Route path="Maths/Chapter10" element={<MCh10 />} />
              <Route path="Maths/Chapter11" element={<MCh11 />} />
              <Route path="Maths/Chapter12" element={<MCh12 />} />
              <Route path="Maths/Chapter13" element={<MCh13 />} />
              <Route path="Maths/Chapter14" element={<MCh14 />} />
              <Route path="Maths/Chapter15" element={<MCh15 />} />
              <Route path="Science" element={<Sci />} />
              <Route path="Science/Chapter1" element={<SCh1 />} />
              <Route path="Science/Chapter2" element={<SCh2 />} />
              <Route path="Science/Chapter3" element={<SCh3 />} />
              <Route path="Science/Chapter4" element={<SCh4 />} />
              <Route path="Science/Chapter5" element={<SCh5 />} />
              <Route path="Science/Chapter6" element={<SCh6 />} />
              <Route path="Science/Chapter7" element={<SCh7 />} />
              <Route path="Science/Chapter8" element={<SCh8 />} />
              <Route path="Science/Chapter9" element={<SCh9 />} />
              <Route path="Science/Chapter10" element={<SCh10 />} />
              <Route path="Science/Chapter11" element={<SCh11 />} />
              <Route path="Science/Chapter12" element={<SCh12 />} />
              <Route path="Science/Chapter13" element={<SCh13 />} />
              <Route path="Science/Chapter14" element={<SCh14 />} />
              <Route path="Science/Chapter15" element={<SCh15 />} />
              <Route path="Science/Chapter16" element={<SCh16 />} />
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
