import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import MagentoDetailsContent from '../components/Services/MagentoDetailsContent';
// import SEOPackages from '../components/Services/SEOPackages';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class WooCommerce extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Magento Development" 
                    BGImage="bg-one"
                />  

                <MagentoDetailsContent/>

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default WooCommerce;