import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ContentWritingDetailsContent from '../components/Services/ContentWritingDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class ContentStrategy extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Content Strategy & Writing" 
                    BGImage="bg-one"
                />  

                <ContentWritingDetailsContent />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default ContentStrategy;