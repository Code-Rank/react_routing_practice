import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import SinupForm from './components/SinupForm';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import {Routes, Route, Switch, Link } from 'react-router-dom';
import react, { useState } from "react";

function App() {
  const [themeColor, setThemeColor] = useState({
    bg: "white",
    color: "black",
  });
  console.log(themeColor.bg);
  const EnableDarkMode = () => {
    //console.log(themeColor);
    if (themeColor.bg === "white") {
      setThemeColor({
        bg: "#202124",
        color: "white",
      });
    } else {
      setThemeColor({
        bg: "white",
        color: "black",
      });
    }
    //console.log(themeColor);

  }
  return (
    <>


     
        <div style={{ backgroundColor: themeColor.bg }}>
          <Nav EnableDarkMode={EnableDarkMode} themeColor={themeColor}  />
          <Routes>
          <Route path='/login' element={ <LoginForm themeColor={themeColor} /> } />
          <Route path='/signup' element={<SinupForm themeColor={themeColor} /> } />
          </Routes>
          <Footer themeColor={themeColor} />
        </div>
        
      {/* <SinupForm themeColor={themeColor}/> */}
      {/* <LoginForm themeColor={themeColor}/> */}





    </>
  );
}

export default App;
