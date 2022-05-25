import Navbar from './Navbar';
import Home from './Home';
import Profanity from './Profanity';
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider, createTheme} from '@mui/material/styles';

const App = () => {
    const [darkMode, setDarkMode] = React.useState(true);

    const darkTheme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
        typography: {
            fontFamily: 'Akshar',
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 600,
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Router>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/search" element={<Profanity/>}/>
                    <Route path="/about-us" element={<AboutUs/>}/>
                    <Route path="/contact-us" element={<ContactUs/>}/>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
