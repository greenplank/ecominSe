import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import BigCommerceDetailsContent from '../components/Services/BigCommerceDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class BigCommerce extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="BigCommerce Development" 
                    BGImage="bg-one"
                />  

                <BigCommerceDetailsContent/>           
 

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default BigCommerce;