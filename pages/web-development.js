import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import WebDetailsContent from '../components/Services/WebDetailsContent';
import WebPackages from '../components/Services/WebPackages';
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
                
                <WebDetailsContent />

                <WebPackages/>

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default WebDevelopment;