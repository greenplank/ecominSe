import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import UXUIDetailsContent from '../components/Portfolio/UXUIDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class UXUIDesign extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="UX/UI Designing" 
                    BGImage="bg-two"
                />  
                
                <UXUIDetailsContent />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default UXUIDesign;