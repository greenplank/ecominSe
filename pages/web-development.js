import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ReactDetailsContent from '../components/Portfolio/ReactDetailsContent';
import PricingStyle from '../components/Pricing/PricingStyle';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class WebDevelopment extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="Web Development" 
                    BGImage="bg-two"
                />  
                
                <ReactDetailsContent />

                <PricingStyle/>

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default WebDevelopment;