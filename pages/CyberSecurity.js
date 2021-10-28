import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import CyberSecurityDetailsContent from '../components/Services/CyberSecurityDetailsContent';
import SEOPackages from '../components/Services/SEOPackages';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class CyberSecurity extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Cyber Security" 
                    BGImage="bg-one"
                />  

                <CyberSecurityDetailsContent/>

                <Footer />
            </>
        );
    }
}

export default CyberSecurity;