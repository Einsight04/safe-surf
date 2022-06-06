import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import {Link} from "react-router-dom";

const AboutUs = (): JSX.Element => {
    const useStyles = {
        title: {
            marginTop: '1rem',
        }
    };

    return (
        <Container>
            <Typography variant='h6' align='center' gutterBottom>
                SafeSurf is a webapp that aims to give users access to our proprietary and autonomous profanity identification tool. Users will be able to input webpage links and in return receive profanity reports. The processing will take place on our server, where we identify and evaluate profanity levels across web pages. Once ready, users will be given ample amounts of information - including a percentage based analysis of a site's profanity levels and if requested, a preview of the page (HTML / PNG).
            </Typography>
            <Typography variant='h6' align='center' gutterBottom>
                By setting preventative measures in place, SafeSurf can prove useful to organizations across the world. The need for a rapid and reusable tool like SafeSurf is now needed more than ever. With over 40 trillion gigabytes of data encompassing the internet, identifying inappropriate data has become a challenge. SafeSurf aims to give users access to information that would otherwise not be accessible, allowing everyone to make informed decisions.
            </Typography>
            <Typography variant='h6' align='center' gutterBottom>
                Ultimately, SafeSurf can only excel if users find value in the service. To increase SafeSurfs odds of becoming successful, we believe that a 90% accuracy rate must be met before launch. This will decrease the odds of profanity slipping through our searches - helping to create a better user experience by substantially lowering systematic error.
            </Typography>
        </Container>
    );
}

export default AboutUs;