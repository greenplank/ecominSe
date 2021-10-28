import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AppDevelopmentDetailsContent from '../components/Services/AppDevelopmentDetailsContent';
// import SEOPackages from '../components/Services/SEOPackages';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class WooCommerce extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="App Development" 
                    BGImage="bg-one"
                />  

                <AppDevelopmentDetailsContent/>

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default WooCommerce;