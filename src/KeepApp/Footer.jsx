import React from "react";
import CopyrightIcon from '@material-ui/icons/Copyright';
const Footer = () => {
    let Year = new Date().getFullYear();
    return <>
    <footer className="footer-box">
    Copyright <CopyrightIcon /> {Year}
    </footer>
    </>
};

export default Footer;
