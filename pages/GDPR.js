import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import GDPRDetailsContent from '../components/Services/GDPRDetailsContent';
// import SEOPackages from '../components/Services/SEOPackages';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class WooCommerce extends Component {
    render() {
        return (
            <>
                <NavbarOne />

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