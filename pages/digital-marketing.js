import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import DigitalDetailsContent from '../components/Portfolio/DigitalDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class DigitalMarketing extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="Digital Marketing" 
                    BGImage="bg-two"
                />  
                
                <DigitalDetailsContent />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default DigitalMarketing;