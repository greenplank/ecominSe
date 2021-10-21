import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ReactDetailsContent from '../components/Portfolio/ReactDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class ReactDeveloper extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="React Developer" 
                    BGImage="bg-two"
                />  
                
                <ReactDetailsContent />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default ReactDeveloper;