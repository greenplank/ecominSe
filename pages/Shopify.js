import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ShopifyDetailsContent from '../components/Services/ShopifyDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class Shopify extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Shopify Development" 
                    BGImage="bg-one"
                />  

                <ShopifyDetailsContent/>

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default Shopify;