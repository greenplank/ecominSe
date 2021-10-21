import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import WordpressDetailsContent from '../components/Services/WordpressDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class WordpressDevelopment extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Wordpress Development" 
                    BGImage="bg-one"
                />  

                <WordpressDetailsContent />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default WordpressDevelopment;