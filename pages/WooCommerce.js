import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import WooCommerceDetailsContent from '../components/Services/WooCommerceDetailsContent';
import SEOPackages from '../components/Services/SEOPackages';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class WooCommerce extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="WooCommerce Development" 
                    BGImage="bg-one"
                />  

                <WooCommerceDetailsContent/>

                <Footer />
            </>
        );
    }
}

export default WooCommerce;