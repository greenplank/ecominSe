import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import MobileDetailsContent from '../components/Services/MobileDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class MObileApp extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Mobile App Development" 
                    BGImage="bg-one"
                />  

                <MobileDetailsContent />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default MObileApp;