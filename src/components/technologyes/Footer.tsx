import React from 'react';
import Logo from "../../assets/logo-text.png";

const Footer = () => {
    return (
        <div>
            <div>
                <img src={Logo} alt="" />
                <p>Curated tools, technologies, and resources for developers building
                 modern software.</p>
                 <div>
                    <h4>GitHub</h4>
                    <h4>Twitter</h4>
                    <h4>Linkedin</h4>
                 </div>
            </div>
            <div>
                <h3>PROJECT</h3>
                <h4>Home</h4>
                <h4>Technologies</h4>
                <h4>Projects</h4>
            </div>

            <div>
                <h3>COMPANY</h3>
                <h4>About</h4>
                <h4>Contact</h4>
                <h4>Carrer</h4>
            </div>

            <div>
                <h4>LEGAL</h4>
                <h4>Privacy</h4>
                <h4>Terms of service</h4>
            </div>
        </div>
    );
};

export default Footer;