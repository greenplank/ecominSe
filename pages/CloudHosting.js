import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import CloudHostingDetailsContent from '../components/Services/CloudHostingDetailsContent';
import SEOPackages from '../components/Services/SEOPackages';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class CloudHosting extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Cloud Hosting" 
                    BGImage="bg-one"
                />  

                <CloudHostingDetailsContent/>

                <Footer />
            </>
        );
    }
}

export default CloudHosting;