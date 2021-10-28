import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import SoftwareQADetailsContent from '../components/Services/SoftwareQADetailsContent';
import SEOPackages from '../components/Services/SEOPackages';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class CyberSecurity extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Software QA & Testing" 
                    BGImage="bg-one"
                />  

                <SoftwareQADetailsContent/>

                <Footer />
            </>
        );
    }
}

export default CyberSecurity;