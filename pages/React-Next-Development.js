import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ReactNextDetailsContent from '../components/Services/ReactNextDetailsContent';
// import SEOPackages from '../components/Services/SEOPackages';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class WooCommerce extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="React&NextJs Development" 
                    BGImage="bg-one"
                />  

                <ReactNextDetailsContent/>

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default WooCommerce;