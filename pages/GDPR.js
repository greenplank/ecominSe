import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import GDPRDetailsContent from '../components/Services/GDPRDetailsContent';
// import SEOPackages from '../components/Services/SEOPackages';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class WooCommerce extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="GDPR" 
                    BGImage="bg-one"
                />  

                <GDPRDetailsContent/>

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default WooCommerce;